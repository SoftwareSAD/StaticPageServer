<template>
  <div>
    <b-container class="register-container" v-if="!$store.state.authUser" >
      <b-form class="register-form" @submit.prevent="register">
        <h4>注册</h4>
        <!--输入手机号-->
        <b-form-group label="手机号" label-for="phoneInput" id="phoneInputGroup">
          <b-form-input id="phoneInput" type="text"  v-model="form.cellphone" required></b-form-input>
          <small class="text-danger">{{error.phone}}</small>
        </b-form-group>
        <!--输入验证码-->
        <b-form-group label="验证码" label-for="codeInput" class="clearfix" id="codeInputGroup">
          <b-form-input id="codeInput" type="text" v-model="form.code" required></b-form-input>
          <small class="text-danger float-left code-error">{{error.code}}</small>
          <b-button class="float-right code-button" @click="send_sms" type="button">发送短信验证码</b-button>
        </b-form-group>
        <!--输入用户昵称-->
        <b-form-group label="用户昵称" label-for="usernameInput1" id="usernameInput1Group">
          <b-form-input id="usernameInput1" type="text" v-model="form.username" required></b-form-input>
        </b-form-group>
        <!--输入密码-->
        <b-form-group label="密码" label-for="passInput1" id="passInput1Group">
          <b-form-input id="passInput1" type="password" v-model="form.password1" v-on:input="check_pass1" required></b-form-input>
          <small class="text-danger code-error">{{error.password1}}</small>
        </b-form-group>
        <!--输入重复密码-->
        <b-form-group label="重复密码" label-for="passInput2" id="passInput2Group">
          <b-form-input id="passInput2" type="password" v-model="form.password2" v-on:input="check_pass2" required></b-form-input>
          <small class="text-danger">{{error.password2}}</small>
        </b-form-group>
        <!--注册协议单选框-->
        <b-form-group id="checkInputGroup4">
          <b-form-checkbox id="checkInput" :checked="form.checked" required>同意<a href="#" @click="showModal">《STAR MOVIE注册协议》</a></b-form-checkbox>
        </b-form-group>
        <b-button id="submit-button" type="submit">注册</b-button>
        <small class="text-danger">{{curError}}</small>
      </b-form>
      <!--注册协议模态框-->
      <b-modal ref="myModalRef1" header-bg-variant="info" title="STAR MOVIE注册协议" style="text-align: left" hide-footer >
          <ol>
            <li>第一，绝对不意气用事</li>
            <li> 第二，绝对不漏判任何一件坏事</li>
            <li>第三，绝对裁判的公正漂亮，裁判机器人蜻蜓队长前来晋见 这场争夺战，我来做裁判</li>
          </ol>
        <b-btn class="mt-1" variant="info" block @click="hideModal">Close Me</b-btn>
      </b-modal>
      <!--注册是否成功提示框-->
      <b-modal ref="myModalRef2" hide-header>
        <h5>{{registered}}</h5>
        <!--<b-btn class="mt-1" variant="info" block @click="hideModal">Close Me</b-btn>-->
      </b-modal>

    </b-container>

    <b-container class="unregister-container" v-else>
      <p>你已经登录！请先退出！</p>
    </b-container>
  </div>

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
          username: '',
          password1: '',
          password2: ''
        },
        error: {
          phone: '',
          code: '',
          password1: '',
          password2: '',
          checked: ''
        },
        curCode : "",
        curPhone: "",
        curError: "",
        registered: "注册成功"
      }
    },
    methods: {
      showModal () {
        this.$refs.myModalRef1.show()
      },

      hideModal () {
        this.$refs.myModalRef1.hide()
      },

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
        } else if(this.form.password2==""){
          this.error.password2 = "请输入重复密码"
        }else {
          this.error.password2 = ""
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
        }
        this.curPhone = this.form.cellphone;
        this.curCode = "";
        for(let i=0;i<4;i++){
          this.curCode+=Math.floor(Math.random()*10)
        }
        try {
          await axios.post('/api/sms', {code: this.curCode, cellphone: this.form.cellphone});
        } catch (error) {
            this.error.code= '发送验证码失败'
          }
      },

      async register() {
        if(this.form.code!==this.curCode) {
          this.error.code = "输入验证码错误"
          return;
        } else {
          this.error.code = ""
        }
        if(this.form.cellphone!==this.curPhone) {
          this.error.code = "手机号码变更"
          return;
        } else {
          this.error.phone = "";
        }

        if(!this.error.phone&&!this.error.checked&&!this.error.password2&&!this.error.password1&&!this.error.code) {
          try {
            await this.$store.dispatch('register', {
              cellphone: this.form.cellphone,
              password: this.form.password1,
              username: this.form.username
            })
            this.registered = "注册成功"
            this.$refs.myModalRef1.show()
            // let path = this.$route.query.path || "/"
            // this.$router.replace(path)
          } catch (e) {
            this.curError = e.message
          }
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
  .unregister-container{
    margin-top: 250px;
    margin-bottom: 250px;
    height: 150px;
    color: white;
    font-size: 30px;
    text-align: center;
    text-shadow: 1px 1px 1px #2E294E;
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
