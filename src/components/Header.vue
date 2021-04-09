<template>
  <div class="row" id="header">
    <div class="col-12 col-md-6 pl-1 order-10 order-md-1">
      <select class="pl-0 can-click" name="restaurant" id="select-restaurant">
        <option selected>Nhà hàng Biển Đông</option>
        <option>Nhà hàng biển Động</option>
      </select>
    </div>

    <div class="col-12 col-md-6 pl-2 order-1 order-md-10">
      <div id="info" class="fr-md">
        <div class="dropdown">
          <img class="img-avatar" src="../assets/icon/avatar-default.png" alt="avatar" />
          <a href="#" class="pl-2">Nguyễn Kiên Trung</a>
          <img
            class="pl-2 can-click"
            src="../assets/icon/option.png"
            alt="option"
            data-toggle="dropdown"
          />
          <div class="dropdown-menu" style="margin-top: 10px">
            <a class="dropdown-item" href="#">Thông tin tài khoản</a>
            <a class="dropdown-item" href="#">Đổi mật khẩu</a>
            <a class="dropdown-item" href="#">Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>