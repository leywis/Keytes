<template>
  <div id="app">
    <!-- <Login msg="12"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./pages-admin/pages/login";

export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style>
</style>
