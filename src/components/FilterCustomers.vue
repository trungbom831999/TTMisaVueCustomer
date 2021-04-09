// bộ lọc tìm kiếm
<template>
  <div class="row mt-2" style="width: 100%">
    <div class="col-12 col-md-10 row p-0">
      <div class="col-md-4 col-12 pl-0">
        <input
          type="text"
          class="form-control mr-2 mt-1"
          id="search-input"
          placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
          width="100%"
        />
      </div>
      <div class="col-md-4 col-12 pl-0">
        <select class="form-control mr-2 mt-1 can-click" width="100%">
          <option selected>Tất cả phòng ban</option>
          <option>Phòng ban 1</option>
          <option>Phòng ban 2</option>
          <option>Phòng ban 3</option>
        </select>
      </div>
      <div class="col-md-4 col-12 pl-0">
        <select class="form-control mr-2 mt-1 can-click" width="100%">
          <option selected>Tất cả vị trí</option>
          <option>Vị trí 1</option>
          <option>Vị trí 2</option>
          <option>Vị trí 3</option>
        </select>
      </div>
    </div>
    <div class="col-12 col-md-2 pl-0">
      <div class="fr-md">
        <button id="refesh-btn" class="btn mt-1" title="Tìm kiếm về mặc định">
          <img class="img-btn" src="../assets/icon/refresh.png" alt="refesh" />
        </button>
      </div>
    </div>
  </div>
</template>