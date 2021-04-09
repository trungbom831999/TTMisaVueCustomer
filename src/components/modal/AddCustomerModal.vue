//thêm nhân viên mới
<template>
  <div class="modal fade" id="add-customer-modal" ref="addCustomerModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">THÔNG TIN NHÂN VIÊN</h4>
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="row">
            <div class="col-2 pr-0">
              <figure>
                <img
                  src="../../assets/img/default-avatar.jpg"
                  id="avatar-img"
                  class="rounded-circle border-grey img-thumbnail"
                  alt="Ảnh đại diện"
                  width="100%"
                />
                <input
                  type="file"
                  id="avatar-file"
                  name="img[]"
                  class="file"
                  accept="image/x-png,image/gif,image/jpeg,image/jpg"
                  style="display: none"
                />
                <div class="input-group my-3" style="display: none">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    placeholder="Upload File"
                    id="avatar-file-src"
                  />
                  <div class="input-group-append">
                    <button type="button" class="browse btn btn-primary">
                      Browse...
                    </button>
                  </div>
                </div>
                <figcaption class="text-center">
                  (Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif)
                </figcaption>
              </figure>
            </div>
            <div class="col-10">
              <h5 class="ml-3">A.THÔNG TIN CHUNG:</h5>
              <hr class="hr-green ml-3" />
              <br />

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="customer-code"
                      >Mã nhân viên
                      <p class="text-danger d-inline">(*)</p>
                    </label>
                    <input
                      v-model="customer.CustomerCode"
                      type="text"
                      class="form-control"
                      id="customer-code"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="full-name"
                      >Họ và tên
                      <p class="text-danger d-inline">(*)</p></label
                    >
                    <input
                      v-model="customer.FullName"
                      type="text"
                      class="form-control"
                      id="full-name"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="date-of-birth">Ngày sinh</label>
                    <input
                      v-model="customer.DateOfBirth"
                      type="date"
                      class="form-control"
                      id="date-of-birth"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="gender">Giới tính</label>
                    <select
                      v-model="customer.Gender"
                      class="form-control"
                      id="gender"
                    >
                      <option value="1">Nam</option>
                      <option value="0">Nữ</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="identity-number"
                      >Số CMTND/ Căn cước
                      <p class="text-danger d-inline">(*)</p>
                    </label>
                    <input
                      v-model="customer.IdentityNumber"
                      type="text"
                      class="form-control"
                      id="identity-number"
                      @keypress="isNumber($event)"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="identity-date">Ngày cấp</label>
                    <input
                      v-model="customer.IdentityDate"
                      type="date"
                      class="form-control"
                      id="identity-date"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="identity-place">Nơi cấp</label>
                    <input
                      v-model="customer.IdentityPlace"
                      type="text"
                      class="form-control"
                      id="identity-place"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="email"
                      >Email
                      <p class="text-danger d-inline">(*)</p>
                    </label>
                    <input
                      v-model="customer.Email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="VD: abc@gmail.com"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="phone-number"
                      >Số điện thoại
                      <p class="text-danger d-inline">(*)</p>
                    </label>
                    <input
                      v-model="customer.PhoneNumber"
                      type="tel"
                      class="form-control"
                      id="phone-number"
                      placeholder="VD: 0xxx-xxx-xxx"
                      @keypress="isPhoneNumber($event)"
                    />
                  </div>
                </div>
              </div>

              <h5 class="ml-3">B.THÔNG TIN CÔNG VIỆC:</h5>
              <hr class="hr-green ml-3" />
              <br />

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <div class="form-group">
                      <label for="position-name">Vị trí</label>
                      <select
                        v-model="customer.PositionId"
                        class="form-control"
                        id="position-name"
                      >
                        <option value="3700cc49-55b5-69ea-4929-a2925c0f334d">
                          Giám đốc
                        </option>
                        <option value="25c6c36e-1668-7d10-6e09-bf1378b8dc91">
                          Thu ngân
                        </option>
                        <option value="148ed882-32b8-218e-9c20-39c2f00615e8">
                          Nhân viên Marketting
                        </option>
                        <option value="0">Chưa xác định</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="department-name">Phòng ban</label>
                    <select
                      v-model="customer.DepartmentId"
                      class="form-control"
                      id="department-name"
                    >
                      <option value="469b3ece-744a-45d5-957d-e8c757976496">
                        Phòng nhân sự
                      </option>
                      <option value="17120d02-6ab5-3e43-18cb-66948daf6128">
                        Phòng đào tạo
                      </option>
                      <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">
                        Phòng Marketing
                      </option>
                      <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">
                        Phòng Công nghệ
                      </option>
                      <option value="0">Chưa xác định</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="personal-tax-code">Mã số thuế cá nhân</label>
                    <input
                      v-model="customer.PersonalTaxCode"
                      type="text"
                      class="form-control"
                      id="personal-tax-code"
                      @keypress="isNumber($event)"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="salary">Mức lương cơ bản</label>
                    <div class="salary-group">
                      <input
                        v-model="customer.Salary"
                        type="text"
                        class="form-control text-right input-salary"
                        id="salary"
                        @keypress="isNumber($event)"
                        @keyup="setSalary()"
                      />
                      <label class="exchange-rate" for="salary"
                        ><i>(VNĐ)</i></label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="join-date">Ngày gia nhập công ty</label>
                    <input
                      v-model="customer.JoinDate"
                      type="date"
                      class="form-control"
                      id="join-date"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="work-status-name">Tình trạng công việc</label>
                    <select
                      v-model="customer.WorkStatus"
                      class="form-control"
                      id="work-status-name"
                    >
                      <option value="1">Đang làm việc</option>
                      <option value="2">Đang thử việc</option>
                      <option value="3">Xem xét</option>
                      <option value="0">Đã nghỉ việc</option>
                      <option value="5">Chưa xác định</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer bg-grey">
          <button
            type="button"
            class="btn btn-modal-footer"
            data-dismiss="modal"
          >
            Hủy
          </button>
          <button
            id="add-customer-btn"
            class="btn btn-green btn-modal-footer"
            @click="addNewCustomer()"
          >
            <img
              class="img-btn"
              src="../../assets/icon/add.png"
              alt="Lưu"
              title="Lưu nhân viên mới"
            />Lưu
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
  name: "AddNewCustomers",
  components: {},
  data() {
    return {
      customer: {
        DateOfBirth: "",
        Address: "",
        DepartmentId: "",
        DepartmentName: "",
        EducationalBackground: 0,
        Email: "",
        CustomerCode: "",
        FirstName: "",
        FullName: "",
        Gender: 1,
        GenderName: "Nam",
        IdentityDate: "",
        IdentityNumber: "",
        IdentityPlace: "",
        JoinDate: "",
        LastName: "",
        MaritalStatus: 0,
        PersonalTaxCode: "",
        PhoneNumber: "",
        PositionId: "",
        PositionName: "",
        QualificationId: "",
        QualificationName: "",
        Salary: 0,
        WorkStatus: 1,
        WorkStatusName: "",
      },
    };
  },
  mounted() {
    $("#add-customer-modal").on("shown.bs.modal", function () {
      document.getElementById("customer-code").focus();
    });
    document.getElementById("avatar-img").addEventListener("click", function () {
      document.getElementById("avatar-file").click();
    });
  },
  methods: {
    //Thống báo lỗi hoặc thành công
    showWarningAlert(content) {
      console.log(content);
    },

    showSuccessAlert(content) {
      console.log(content);
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

    //Đổi định dạng input Salary
    setSalary: function () {
      var salaryFix = this.customer.Salary.split(".")
        .join("")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.customer.Salary = salaryFix;
    },

    //input chỉ có số
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57)
        // && charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    //input số điện thoại chỉ có số và dấu +
    //VD +84xxx
    isPhoneNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 43
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    //validate mã nhân viên
    validateCustomerCode(customerCode) {
      customerCode = customerCode.trim();
      if (customerCode == null || customerCode == "") {
        this.showWarningAlert("Mã nhân viên không được để trống");
        return false;
      }
      return true;
    },

    //validate họ và tên
    validateFullName(customerFullName) {
      customerFullName = customerFullName.trim();
      if (customerFullName == null || customerFullName == "") {
        this.showWarningAlert("Họ tên không được để trống");
        return false;
      }
      return true;
    },

    //validate số căn cước
    validateIdentityNumber(customerIdentityNumber) {
      customerIdentityNumber = customerIdentityNumber.trim();
      if (customerIdentityNumber == null || customerIdentityNumber == "") {
        this.showWarningAlert("Vui lòng điền số CMTND/ Căn cước");
        return false;
      }
      return true;
    },

    //Validate số điện thoại 10 số
    validatePhoneNumber(customerPhone) {
      customerPhone = customerPhone.trim();
      if (customerPhone == null || customerPhone == "") {
        this.showWarningAlert("Số điện thoại không được trống");
        return false;
      }
      var phone = customerPhone.trim();
      phone = phone.replace("(+84)", "0");
      phone = phone.replace("+84", "0");
      phone = phone.replace("0084", "0");
      phone = phone.replace(/ /g, "");
      if (phone != "") {
        var firstNumber = phone.substring(0, 2);
        if (
          (firstNumber == "09" || firstNumber == "08") &&
          phone.length == 10
        ) {
          if (phone.match(/^\d{10}/)) {
            return true;
          }
        } else if (firstNumber == "01" && phone.length == 11) {
          if (phone.match(/^\d{11}/)) {
            return true;
          }
        }
      }
      this.showWarningAlert("Số điện thoại không hợp lệ");
      return false;
    },

    //Validate Email
    validateEmail(customerEmail) {
      var pattern = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      customerEmail = customerEmail.trim();
      if (customerEmail == null || customerEmail == "") {
        this.showWarningAlert("Email không được trống");
        return false;
      } else if (!pattern.test(customerEmail)) {
        this.showWarningAlert("Email không hợp lệ");
        return false;
      }
      return true;
    },

    //check toàn bộ thông tin trước khi ấn gửi
    checkInfoCustomer() {
      //kiểm tra mã nhân viên
      if (!this.validateCustomerCode(this.customer.CustomerCode)) {
        document.getElementById("customer-code").focus();
        return false;
      }
      //kiểm tra họ và tên
      if (!this.validateFullName(this.customer.FullName)) {
        document.getElementById("full-name").focus();
        return false;
      }
      //kiểm tra số căn cước
      if (!this.validateIdentityNumber(this.customer.IdentityNumber)) {
        document.getElementById("identity-number").focus();
        return false;
      }
      //kiểm tra email
      if (!this.validateEmail(this.customer.Email)) {
        document.getElementById("email").focus();
        return false;
      }

      //kiểm tra số điện thoại
      if (!this.validatePhoneNumber(this.customer.PhoneNumber)) {
        document.getElementById("phone-number").focus();
        return false;
      }

      console.log(this.customer);
      return true;
    },

    //POST thông tin nhân viên mới
    addNewCustomer() {
      if (this.checkInfoCustomer()) {
        this.customer.Salary = this.customer.Salary.split(".").join("");
        axios({
          method: "post",
          url: localHost,
          data: this.customer,
        })
          .then(function (response) {
            //thành công
            console.log(response);
            $("#add-customer-modal").modal("hide");
          })
          .catch(function (response) {
            //gặp lỗi
            console.log(response);
          });
          this.loadData();
      }
    },

    loadData() {
      this.$emit("loadData");
    },
  },
  async created() {},
};
</script>