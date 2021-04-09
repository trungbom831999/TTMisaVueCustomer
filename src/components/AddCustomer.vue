// phần thêm nhân viên mới
<template>
  <div class="row" style="width: 100%">
    <div class="col-12 col-md-6 p-0">
      <h4 class="font-weight-bold" style="padding-top: 4px">
        Danh sách nhân viên
      </h4>
    </div>
    <div class="col-12 col-md-6 p-0">
      <div class="fr-md">
        <button
          id="add-btn"
          class="btn btn-green mr-3"
          data-toggle="modal"
          data-target="#add-customer-modal"
        >
          <img
            class="img-btn mr-3"
            src="../assets/icon/add.png"
            alt="thêm"
            title="Thêm nhân viên mới"
          />
          Thêm nhân viên
        </button>
      </div>
    </div>
  </div>
</template>