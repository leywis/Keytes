<template>
  <div class="login-bg">
    <div class="login-wrap">
      <!-- logo -->
      <div class="logo-header">
        <div class="logo">
          <img src="../../assets/logo.png" alt>
        </div>
      </div>
      <!-- 表单 -->
      <div class="input-wrap">
        <cube-input v-model="loginInfo.userName" class="input-item" :placeholder="'请输入用户名'"></cube-input>
        <cube-input v-model="loginInfo.password" class="input-item" :placeholder="'请输入密码'"></cube-input>
      </div>
      <!-- 按钮 -->
      <div class="btn-wrap">
        <div class="login-btn">登 录</div>
        <div class="login-btn register-btn">注 册</div>
      </div>
    </div>
  </div>
</template>

<script>
// import api from "../../api/index";
import axios from "axios";
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
  },
  methods: {
    getHomeData() {
      axios.get("/api/index").then(res => {
        console.log(res);
        // ...
      });
    }
  },
  mounted() {
    this.getHomeData();
  }
};
</script>

<style scoped>
.logo-header {
  width: 100%;
  height: 3rem;
  border-radius: 0 0 50% 50%;
  position: relative;
}
.logo {
  width: 2rem;
  height: 2rem;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: 1.4rem auto 0.8rem;
}
.logo > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
}
.login-bg {
  /* background-image: linear-gradient(160deg, #00ffd5 20%, #56b3ff 80%); */
  height: 100%;
  position: fixed;
  width: 100%;
}
.input-wrap {
  width: 9.4rem;
  margin: 0 auto;
}
.btn-wrap {
  padding-top: 0.32rem;
}
.login-btn {
  width: 9.4rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.5rem;
  margin: 0.2rem auto;
  color: #fff;
  background: #409eff;
  box-sizing: border-box;
  font-size: 16px;
  cursor: pointer;
}

.login-btn:active {
  background: #ceedff;
}
.register-btn {
  background: #fff;
  border: 1px solid #409eff;
  color: #409eff;
}
.input-item {
  margin: 0.4rem auto;
}
</style>



