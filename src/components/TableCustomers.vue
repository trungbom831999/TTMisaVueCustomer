<template>
  <div id="info-customers" class="mt-2 mr-3">
    <table v-show="!loading" id="table-customers" class="table table-striped">
      <!-- <colgroup>
        <col span="8" style="width: 12.5%" />
      </colgroup> -->
      <thead>
        <tr>
          <th>Mã Khách hàng</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Công ty</th>
          <th>Địa chỉ</th>
        </tr>
      </thead>
      <tbody id="tbody-customers">
        <tr
          class="customer-info"
          v-for="customer in customers"
          :key="customer.customerId"
          :customerId="customer.customerId"
        >
          <td>
            {{ customer.customerCode }}
          </td>
          <td>
            {{ customer.fullName }}
          </td>
          <td>
            {{ genderDetermination(customer.gender) }}
          </td>
          <td>
            {{ changeDatetimeToDate(customer.dateOfBirth) }}
          </td>
          <td>
            {{ customer.phoneNumber }}
          </td>
          <td :title="customer.email">
            {{ customer.email }}
          </td>
          <td :title="customer.companyName">
            {{ customer.companyName }}
          </td>
          <td :title="customer.address">
            {{ customer.address }}
          </td>
          <td class="text-right">
            {{
              customer.Salary != null
                ? customer.Salary.toString().replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    "."
                  )
                : " "
            }}
          </td>
          <td>
            {{ customer.WorkStatusName }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-show="loading"
      id="spinner-load-data"
      style="display: none !important"
    >
      <div class="d-flex justify-content-center">
        <div
          class="spinner-border"
          role="status"
          style="color: #019160 !important"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <div id="context-menu">
      <div
        class="item"
        data-toggle="modal"
        data-target="#edit-customer-modal"
        @click="getCustomer()"
      >
        <img class="img-btn" src="../assets/icon/edit.png" alt="Edit" /> Sửa
      </div>
      <div
        class="item"
        data-toggle="modal"
        data-target="#delete-customer-modal"
        @click="getCustomer()"
      >
        <img class="img-btn" src="../assets/icon/delete.png" alt="Edit" /> Xóa
      </div>
    </div>

    <EditCustomerModal :customer="customer" />

    <DeleteCustomerModal @loadData="loadData" :customer="customer" />
  </div>
</template>

<script>
import * as axios from "axios";
import EditCustomerModal from "./modal/EditCustomerModal.vue";
import DeleteCustomerModal from "./modal/DeleteCustomerModal.vue";
var idHidden = "";
var localHost = "https://localhost:44339/api/v1/Customers/";
export default {
  name: "TableCustomers",
  components: {
    EditCustomerModal,
    DeleteCustomerModal,
  },
  data() {
    return {
      loading: true,
      customerId: "",
      customer: {},
      customers: [],
    };
  },
  mounted() {
    window.addEventListener("click", function () {
      // document.getElementById("context-menu").classList.remove("active");
      document.getElementById("context-menu").style.display = "none";
    });

    document
      .getElementById("info-customers")
      .addEventListener("scroll", function () {
        // document.getElementById("context-menu").classList.remove("active");
        document.getElementById("context-menu").style.display = "none";
      });
  },
  methods: {
    setupMenu() {
      document
        .getElementById("tbody-customers")
        .addEventListener("contextmenu", function (event) {
          event.preventDefault();
          var contextElement = document.getElementById("context-menu");
          contextElement.style.top = event.pageY + "px";
          contextElement.style.left = event.pageX + "px";
          contextElement.style.display = "block";
          // contextElement.classList.add("active");
          idHidden = event.target.parentElement.getAttribute("customerid");
          // console.log(this.customerId);
        });
    },

    //Đổi định dạng ngày từ Db để hiển thị
    changeDatetimeToDate(datetime) {
      if (datetime) {
        var date = new Date(datetime);
        var formatOptions = {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        };
        var dateString = date.toLocaleDateString("en-US", formatOptions);

        return dateString;
      }
      return "";
    },

    //Đổi gender sang giới tính
    genderDetermination(gender) {
      switch (gender) {
        case 0:
          return "Nữ";
        case 1:
          return "Nam";
        default:
          return "Chưa xác định";
      }
    },

    //Lấy Customer sau khi click custom menu
    async getCustomer() {
      // console.log(this.customerId);
      this.customerId = idHidden;
      const response = await axios.get(localHost + this.customerId);
      this.customer = response.data;
      console.log(this.customer);
    },

    //Load Data
    async loadData() {
      this.loading = true;
      const response = await axios.get(localHost);

      console.log(response.data[0]);
      this.loading = false;
      this.customers = response.data;
      this.setupMenu();
    },
  },
  async created() {
    const response = await axios.get(localHost);

    console.log(response.data[0]);
    this.loading = false;
    this.customers = response.data;
    this.setupMenu();
  },
};
</script>
