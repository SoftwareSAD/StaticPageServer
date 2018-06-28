<template>
  <b-container class="login-container">
    <b-form @submit.prevent="login" v-if="!$store.state.authUser" class="login-form">
      <h4>登录</h4>
      <!--用户名-->
      <b-form-group id="phoneInputGroup" label="手机号:" label-for="phoneInput">
        <b-form-input id="phoneInput" type="text" v-model="form.cellphone" required>
        </b-form-input>
      </b-form-group>
      <!--密码-->
      <b-form-group id="passInputGroup" label="密码:" label-for="passInput">
        <b-form-input id="passInput" type="password" v-model="form.password" required>
        </b-form-input>
      </b-form-group>
      <!--提交/重置-->
      <b-button type="submit">Submit</b-button>
      <b-button type="reset">Reset</b-button>
      <!--没有账号-注册-->
      <b-form-row>还没有账号？<b-link to="/register" target="_self">免费注册</b-link></b-form-row>
      <!--错误信息提示-->
      <b-form-row class="error" v-if="form.error">{{ form.error }}</b-form-row>
    </b-form>
    <div v-else>
      Hello {{ $store.state.authUser.cellphone }}!
    </div>
  </b-container>
</template>

<script>
  export default {
    head: {
      title: "登录"
    },
    data() {
      return {
        form: {
          error: '',
          cellphone: '',
          password: '',
        }
      }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch('login', {
            cellphone: this.form.cellphone,
            password: this.form.password
          })
          this.form.cellphone = ''
          this.form.password = ''
          this.form.error = null
          let path = this.$route.query.path || "/"
          this.$router.replace(path)
        } catch (e) {
          this.form.error = e.message
        }
      }
    }
  }
</script>

<style scoped>
  .login-container{
    margin-top: 150px;
    margin-bottom: 150px;
    text-align: center;
  }
  .login-form {
    text-align: left;
    margin:20px auto 50px auto;
    height: fit-content;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px 20px 20px;
  }
  .error {
    color: red;
  }
  button {
    color: white;
    background-color: #2E294E;
    width: 50%;
  }
</style>
