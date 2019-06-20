<template>
  <div class="login-bg">
    <div class="login-wrap">
      <div class="logo-header">
        <div class="logo"></div>
      </div>
      <cube-input v-model="loginInfo.userName" class="input-item" :placeholder="'请输入用户名'"></cube-input>
      <cube-input v-model="loginInfo.password" class="input-item" :placeholder="'请输入密码'"></cube-input>
      <cube-button :primary="true" class="login-btn">登录</cube-button>
      <cube-button :outline="true">Outline Button</cube-button>
    </div>
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
.logo-header{
  width: 100%;
  height: 2.6rem;
  background-color: aquamarine;
  border-radius: 0 0 50% 50%;
  position: relative;
}
.logo {
  width: 2rem;
  height: 2rem;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin: 0 auto 1.4rem;
  background-color: #ccc;
}
.login-bg {
  /* background-image: linear-gradient(160deg, #00ffd5 20%, #56b3ff 80%); */
  height: 100%;
  position: fixed;
  width: 100%;
}
/* .login-wrap {
  margin: 0.6rem auto 0;
  padding: 0 0.4rem;
} */
.login-btn {
  margin: 0.8rem auto 0.2rem;
}
.input-item {
  margin: 0.4rem auto;
}
</style>



