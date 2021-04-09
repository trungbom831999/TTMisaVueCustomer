//xóa nhân viên
<template>
  <div
    class="modal fade"
    id="delete-customer-modal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Bạn có chắc chắn muốn xóa?</h5>
          <input type="hidden" id="delete-customer-id" />
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- {{ customerIdDelete }} -->
          <dl class="dl-horizontal">
            <dt>Mã nhân viên</dt>
            <dd>
              {{
                customer.customerCode != null
                  ? customer.customerCode
                  : "Chưa có"
              }}
            </dd>
            <dt>Họ và tên</dt>
            <dd>
              {{ customer.fullName != null ? customer.fullName : "" }}
            </dd>
          </dl>
        </div>
        <div class="modal-footer" style="justify-content: flex-start">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="loadData()"
          >
            Hủy
          </button>
          <button
            class="btn btn-danger"
            id="delete-customer-btn"
            @click="deleteCustomer()"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as axios from "axios";
import JQuery from "jquery";
let $ = JQuery;

var localHost = "https://localhost:44339/api/v1/Customers/";

export default {
  name: "DeleteCustomer",
  props: ["customer"],
  components: {},
  mounted() {
    $("#delete-customer-modal").on("shown.bs.modal", function () {});
  },
  data() {
    return {
      //   customer: {
      //     DateOfBirth: "",
      //     Address: "",
      //     DepartmentId: "",
      //     DepartmentName: "",
      //     EducationalBackground: 0,
      //     Email: "",
      //     CustomerCode: "",
      //     FirstName: "",
      //     FullName: "",
      //     Gender: 1,
      //     GenderName: "Nam",
      //     IdentityDate: "",
      //     IdentityNumber: "",
      //     IdentityPlace: "",
      //     JoinDate: "",
      //     LastName: "",
      //     MaritalStatus: 0,
      //     PersonalTaxCode: "",
      //     PhoneNumber: "",
      //     PositionId: "",
      //     PositionName: "",
      //     QualificationId: "",
      //     QualificationName: "",
      //     Salary: 0,
      //     WorkStatus: 1,
      //     WorkStatusName: "",
      //   },
    };
  },
  methods: {
    deleteCustomer() {
      axios({
        method: "delete",
        url: localHost + this.customer.customerId,
      })
        .then(function (response) {
          //thành công
          console.log(response);
          $("#delete-customer-modal").modal("hide");
        })
        .catch(function (response) {
          //gặp lỗi
          console.log(response);
        });
      this.loadData();
    },

    loadData() {
      this.$emit("loadData");
    },
  },
  //   async created() {
  //     const response = await axios.get(
  //       "http://api.manhnv.net/api/customers/" + this.customerId
  //     );

  //     console.log(response.data);

  //     this.customer = response.data;
  //   },
};
</script>
