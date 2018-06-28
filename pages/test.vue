<template>
  <b-container class="register-container">
    <b-form class="register-form" @submit.prevent="register" v-if="!$store.state.authUser">
      <h4>注册</h4>
      <b-form-group label="手机号" label-for="phoneInput">
        <b-form-input id="phoneInput" type="text"  v-model="form.cellphone" require></b-form-input>
        <small class="text-danger">{{error.phone}}</small>
      </b-form-group>
      <b-form-group label="验证码" label-for="codeInput" class="clearfix">
        <b-form-input id="codeInput" type="text" v-model="form.code" v-on:input="check_code" require></b-form-input>
        <small class="text-danger float-left code-error">{{error.code}}</small>
        <b-button class="float-right code-button" v-on:click="send_sms">发送短信验证码</b-button>
      </b-form-group>
      <b-form-group label="密码" label-for="passInput1">
        <b-form-input id="passInput1" type="password" v-model="form.password1" v-on:input="check_pass1" require></b-form-input>
        <small class="text-danger code-error">{{error.password1}}</small>
      </b-form-group>
      <b-form-group label="重复密码" label-for="passInput2">
        <b-form-input id="passInput2" type="password" v-model="form.password2" v-on:input="check_pass2" require></b-form-input>
        <small class="text-danger code-error">{{error.password2}}</small>
      </b-form-group>
      <b-form-group>
        <div class="form-check">
          <input type="checkbox" :checked="form.checked">
            同意<a href="#">《STAR MOVIE注册协议》</a>
        </div>
      </b-form-group>
      <b-button id="submit-button" type="submit">注册</b-button>
      <small class="text-danger">{{curError}}</small>
    </b-form>

    <b-container class="register-container" v-else>
      <p>你已经登录！</p>
    </b-container>
  </b-container>
</template>

<script>
  import axios from 'axios'
  export default {
    head:{
      title: '注册'
    },
    data() {
      return {
        form: {
          cellphone: '',
          code: '',
          password1: '',
          password2: '',
          checked: false
        },
        error: {
          phone: '',
          code: '',
          password1: '',
          password2: ''
        },
        curCode : "",
        curPhone: "",
        curError: ""
      }
    },
    methods: {

      check_pass1() {
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if(!reg.test(this.form.password1)) {
          this.error.password1 ="密码必须是8-16位数字字母组合"
        } else {
          this.error.password1 =""
        }
      },

      check_pass2() {
        if(this.form.password1 !== this.form.password2){
          this.error.password2 ="两次密码输入不同"
        } else {
          this.error.password2 = ""
        }
      },

      check_code() {
        if(this.form.code!==this.curCode) {
          error.code = "输入验证码错误"
        } else {
          error.code = ""
        }
      },

      async send_sms() {
        var phonereg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!this.form.cellphone) {
          this.error.phone = "请输入手机号码";
          return
        } else if (!phonereg.test(this.form.cellphone)) {
          this.error.phone = "输入手机格式错误";
          return
        } else {
          this.error.phone = "";
          return;
        }
        this.curPhone = this.form.cellphone
        this.curCode = ""
        for(let i=0;i<4;i++){
          this.curCode+=Math.floor(Math.random()*10)
        }
        try {
          let {data} = await axios.post('/api/test', {code: this.curCode, cellphone: this.form.cellphone});
        } catch (error) {
          if (error.response && error.response.status === 401) {
            throw new Error('发送验证码失败')
          }
          throw error
        }
      },

      async register() {
        if(this.form.cellphone!==this.curPhone){
          error.phone = "手机号码变更"
        } else {
          error.phone = ""
        }
        if(!error.phone || !error.code || !error.password1 || !error.password2 || !this.form.checked) {
          this.curError = "输入出错，请修改"
          return;
        }
      }
    }
  }
</script>

<style scoped>
  .register-container{
    margin-top: 150px;
    margin-bottom: 150px;
    text-align: center;
  }
  .register-form {
    text-align: left;
    margin:20px auto 50px auto;
    height: fit-content;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px 20px 20px;
  }
  .code-button {
    width: 35%;
    height: 25px;
    font-size: 12px;
    padding: 0;
    background-color: #2E294E;
    color: white;
  }
  .code-error{
    width: 75%;
    font-size: 12px;
  }
  #submit-button {
    color: white;
    background-color: #2E294E;
    width: 100%;
  }
</style>
