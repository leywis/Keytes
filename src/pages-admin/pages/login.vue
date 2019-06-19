<template>
  <div class="login-wrap">
    <div class='logo'></div>
    <cube-input v-model="loginInfo.userName" class="input-item"  :placeholder="'请输入用户名'"></cube-input>
    <cube-input v-model="loginInfo.password" class="input-item" :placeholder="'请输入密码'"></cube-input>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      loginInfo: {
        userName: "",
        password: ""
      }
    };
  }
};
</script>

<style scoped>
.logo{
  width: 2rem;
  height: 2rem;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin: 0 auto 1.4rem;
}
.login-wrap {
  margin: 2rem auto 0;
}
.input-item {
  margin: 0.4rem auto;
}
</style>



