<template>
  <div id="app">
    <Alert />
    <SideBar />
    <div id="main-content">
      <Header />
      <div id="content">
        <AddCustomer />
        <FilterCustomers />
        <TableCustomers />
        <Pagination />
      </div>
    </div>
    <AddCustomerModal/>
    <!-- <EditCustomerModal/>
    <DeleteCustomerModal/> -->
  </div>
</template>

<script>
import Alert from "./components/Alert.vue";
import SideBar from "./components/SideBar.vue";
import Header from "./components/Header.vue";
import AddCustomer from "./components/AddCustomer.vue";
import FilterCustomers from "./components/FilterCustomers.vue";
import TableCustomers from "./components/TableCustomers.vue";
import Pagination from "./components/Pagination.vue";
//import modal
import AddCustomerModal from './components/modal/AddCustomerModal.vue'
// import EditCustomerModal from './components/modal/EditCustomerModal.vue'
// import DeleteCustomerModal from './components/modal/DeleteCustomerModal.vue'

// import $ from 'jquery'

export default {
  name: "App",
  components: {
    Alert,
    SideBar,
    Header,
    AddCustomer,
    FilterCustomers,
    TableCustomers,
    Pagination,
    AddCustomerModal,
    // EditCustomerModal,
    // DeleteCustomerModal
  },
  mounted() {
    
  }
};
</script>
<!-- <script src="./assets/script/list.js"></script> -->

<style>
@import "./assets/css/style.css";
@import "./assets/bootstrap/bootstrap.min.css";
</style>
