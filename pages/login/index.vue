<template>
  <b-container class="login-container">
    <h4>登录</h4>
    <b-form @submit.prevent="login" v-if="!$store.state.authUser">
      <!--用户名-->
      <b-form-group id="emailInputGroup1" label="用户名:" label-for="emailInput1">
        <b-form-input id="emailInput1" type="text" v-model="form.email" placeholder="邮箱/手机" required>
        </b-form-input>
      </b-form-group>
      <!--密码-->
      <b-form-group id="passwordInputGroup2" label="密码:" label-for="passwordInput2">
        <b-form-input id="passwordInput2" type="password" v-model="form.password"  placeholder="密码" required>
        </b-form-input>
      </b-form-group>
      <!--提交/重置-->
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <!--没有账号-注册-->
      <b-form-row>还没有账号？<b-link to="/register" target="_self">免费注册</b-link></b-form-row>
      <!--错误信息提示-->
      <b-form-row class="error" v-if="form.error">{{ form.error }}</b-form-row>
    </b-form>
    <div v-else>
      Hello {{ $store.state.authUser.email }}!
    </div>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          error: '',
          email: '',
          password: '',
        }
      }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch('login', {
            email: this.form.email,
            password: this.form.password
          })
          this.form.email = ''
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
    margin: 150px auto 50px auto;
    height: 320px;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px 20px 20px;
  }
  .error {
    color: red;
  }
</style>
