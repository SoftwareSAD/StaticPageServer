<!--<template>-->
  <!--<b-container class="login-container">-->
    <!--<b-header>-->
      <!--<h4>登录</h4>-->
    <!--</b-header>-->
    <!--<b-form @submit="onSubmit" @reset="onReset" v-if="show">-->
      <!--<b-form-group id="emailInputGroup1"-->
                    <!--label="Email address:"-->
                    <!--label-for="emailInput1">-->
        <!--<b-form-input id="emailInput1"-->
                      <!--type="email"-->
                      <!--v-model="form.email"-->
                      <!--required-->
                      <!--placeholder="邮箱">-->
        <!--</b-form-input>-->
      <!--</b-form-group>-->
      <!--<b-form-group id="passwordInputGroup2"-->
                    <!--label="Your Name:"-->
                    <!--label-for="passwordInput2">-->
        <!--<b-form-input id="passwordInput2"-->
                      <!--type="password"-->
                      <!--v-model="form.password"-->
                      <!--required-->
                      <!--placeholder="密码">-->
        <!--</b-form-input>-->
      <!--</b-form-group>-->
      <!--<b-button type="submit" variant="primary">Submit</b-button>-->
      <!--<b-button type="reset" variant="danger">Reset</b-button>-->
      <!--<div>还没有账号？<b-link to="/register" target="_self">免费注册</b-link></div>-->
    <!--</b-form>-->
  <!--</b-container>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--form: {-->
          <!--email: '',-->
          <!--password: '',-->
        <!--},-->
        <!--show: true-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--onSubmit (evt) {-->
        <!--evt.preventDefault();-->
        <!--alert(JSON.stringify(this.form));-->
      <!--},-->
      <!--onReset (evt) {-->
        <!--evt.preventDefault();-->
        <!--/* Reset our form values */-->
        <!--this.form.email = '';-->
        <!--this.form.password = '';-->
        <!--/* Trick to reset/clear native browser form validation state */-->
        <!--this.show = false;-->
        <!--this.$nextTick(() => { this.show = true });-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.login-container{-->
  <!--margin: 150px auto 50px auto;-->
  <!--height: 400px;-->
  <!--width: 400px;-->
  <!--background-color: white;-->
  <!--border-radius: 5px;-->
  <!--padding: 10px;-->
<!--}-->
<!--</style>-->
<template>
  <b-container class="login-container">
    <b-header>
      <h4>登录</h4>
    </b-header>
    <b-form @submit="onSubmit" @reset="onReset" v-if="!$store.state.authUser" @submit.prevent="login">
      <p class="error" v-if="form.error">{{ formError }}</p>
      <b-form-group id="emailInputGroup1"
                    label="Email address:"
                    label-for="emailInput1">
        <b-form-input id="emailInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="邮箱">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordInputGroup2"
                    label="Your Name:"
                    label-for="passwordInput2">
        <b-form-input id="passwordInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="密码">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <div>还没有账号？<b-link to="/register" target="_self">免费注册</b-link></div>
    </b-form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
    </div>
  </b-container>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          error: '',
          email: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.password = '';
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      }
    },
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.form.username,
          password: this.form.password
        })
        this.form.username = ''
        this.form.password = ''
        this.form.error = null

        let path = this.$route.query.path || "/"
        this.$router.replace(path)
      } catch (e) {
        this.form.error = e.message
      }
    }
  }
</script>

<style scoped>
  .login-container{
    margin: 150px auto 50px auto;
    height: 400px;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
  }
  .error {
    color: red;
  }
</style>
