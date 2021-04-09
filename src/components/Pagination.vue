<template>
  <div class="row mt-2">
    <div class="col-md-3">
      <p class="pt-2 pl-0">Hiển thị 1-10/1000 nhân viên</p>
    </div>
    <div id="pagination" class="col-md-6 text-center">
      <button
        class="btn pagination-btn"
        id="first-page"
        title="Trang đầu"
      ></button>
      <button
        class="btn pagination-btn"
        id="prev-page"
        title="Trang trước"
      ></button>
      <button class="btn pagination-btn bg-grey" id="current-page">1</button>
      <button class="btn pagination-btn bg-grey">2</button>
      <button class="btn pagination-btn bg-grey">3</button>
      <button class="btn pagination-btn bg-grey">4</button>
      <button
        class="btn pagination-btn"
        id="next-page"
        title="Trang sau"
      ></button>
      <button
        class="btn pagination-btn"
        id="last-page"
        title="Trang cuối"
      ></button>
    </div>
    <div class="col-md-3 text-right">
      <p class="pt-2 pr-3">10 nhân viên/trang</p>
    </div>
  </div>
</template>