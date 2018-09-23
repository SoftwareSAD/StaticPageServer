<template>
<div>
    <div class="maincontainer" id="app">
        <div class="order-progress-bar">
            <div class="step first done">
                <span class="step-num">1</span>
                <div class="bar"></div>
                <span class="step-text">选择影片场次</span>
            </div>
            <div class="step done">
                <span class="step-num">2</span>
                <div class="bar"></div>
                <span class="step-text">选择座位</span>
            </div>
            <div class="step">
                <span class="step-num">3</span>
                <div class="bar"></div>
                <span class="step-text">14分钟内付款</span>
            </div>
            <div class="step last">
                <span class="step-num">4</span>
                <div class="bar"></div>
                <span class="step-text">影院取票观影</span>
            </div>
        </div>
        <div class="main clearfix">
            <div class="hall">
                <div class="seat-example">
                    <div class="selectable-example example">
                        <span>可选座位</span>
                    </div>
                    <div class="sold-example example">
                        <span>已售座位</span>
                    </div>
                    <div class="selected-example example">
                        <span>已选座位</span>
                    </div>
                </div>
                <div class="seat-block">
                    <div class="row-id-container">
                        <span class="row-id">1</span>
                        <span class="row-id">2</span>
                        <span class="row-id">3</span>
                        <span class="row-id">4</span>
                        <span class="row-id">5</span>
                        <span class="row-id">6</span>
                    </div>
                    <div class="seats-container">
                        <div class="screen-container">
                            <div class="screen">银幕中央</div>
                            <div class="c-screen-line"></div>
                        </div>
                        <div class="seats-wrapper">
                            <div id="seatWrap">
                                <div class="seat" v-for="(n,index) in clickList" :key="index" :class="getSeatState(index)" v-on:click="handler(index)">
                                  {{ n }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="side">
                <div class="movie-info clearfix">
                    <div class="poster">
                        <img :src="film.img" :alt="film.movie_name">
                    </div>
                    <div class="content">
                        <p class="name text-ellipsis">{{film.movie_name}}</p>

                        <div class="info-item">
                            <span>类型： </span>
                            <span class="value">{{film.movie_type}}</span>
                        </div>
                        <div class="info-item">
                            <span>时长： </span>
                            <span class="value">{{film.movie_time}}</span>
                        </div>

                    </div>
                </div>
                <div class="show-info">
                    <div class="info-item">
                        <span>影院 :</span>
                        <span class="value text-ellipsis">{{cinema.cinema_name}}</span>
                    </div>
                    <div class="info-item">
                        <span>影厅 :</span>
                        <span class="value text-ellipsis">{{room}}号厅</span>
                    </div>
                    <div class="info-item">
                        <span>版本 :</span>
                        <span class="value text-ellipsis">{{film.country.indexOf("中国大陆") != -1 ? '国语' : '英语'}}</span>
                    </div>
                    <div class="info-item">
                        <span>场次 :</span>
                        <span class="value text-ellipsis screen">{{date + '  ' + time}}</span>
                    </div>
                    <div class="info-item">
                        <span>票价 :</span>
                        <span class="value text-ellipsis">￥{{ticketPrice}}/张</span>
                    </div>
                </div>
                <div class="ticket-info">
                    <div class="no-ticket" :class="{'ticket-active': !isTicketActive}">
                        <p class="buy-limit">座位：一次最多选4个座位</p>
                        <p class="no-selected">请<span>点击左侧</span>座位图选择座位</p>
                    </div>
                    <div class="has-ticket" :class="{'ticket-active': isTicketActive}">
                        <span class="text">座位：</span>
                        <div class="ticket-container" data-limit="4">
                          <span class="ticket" v-for="(item, index) in clickList" v-if="item == 1" :key="index">
                            {{Math.floor(index/8)+1}}排{{index%8+1}}座
                          </span>
                        </div>
                    </div>
                    <div class="total-price">
                        <span>总价 :</span>
                        <span class="price">{{totalPrice}}</span>
                    </div>
                </div>
                <div class="confirm-order">
                    <form class="login-form">
                        <input type="text" class="input-phone" placeholder="输入手机号">
                        <div class="code-inputer">
                            <input type="text" class="input-code" placeholder="填写验证码">
                            <span class="send-code">获取验证码</span>
                        </div>
                    </form>
                    <div class="confirm-btn" data-act="confirm-click" data-bid="b_0a0ep6pp">
                        <a :href="'/nuxt/confirm?filmName='+film.movie_name+'&cinemaName='+cinema.cinema_name+'&totalPrice='+totalPrice+'&date='+date+'&time='+time+'&room='+room+'&list='+clickList.join('')">确认选座</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cut">
    </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Adcolumn from '~/components/Adcolumn.vue'
import axios from '~/plugins/axios'
import Vue from 'vue'

export default {
    components: {Logo, Adcolumn},
    head: {
        'title': '选择影片场次',
    },
    data() {
      return {
        clickIndex: 0,
        ticketPrice: 42,
        totalPrice: 0,
        clickList:[
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 2, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0
        ],
        seatNum: 0,
        isTicketActive: false
      }

    },
  async asyncData({context, route}) {
    let filmName = route.query.filmName;      //取得电影名字
    let cinemaName = route.query.cinemaName;  //取得影院名字
    let room = parseInt(route.query.room) + 2;
    let dateIndex = parseInt(route.query.date);

    let today = new Date()
      let nowTime = today.getTime();
      let ms = 24*3600*1000*dateIndex;
      today.setTime(parseInt(nowTime + ms));
      let oMoth = (today.getMonth() + 1).toString();
      if (oMoth.length <= 1) oMoth = '0' + oMoth;
      let oDay = today.getDate().toString();
      if (oDay.length <= 1) oDay = '0' + oDay;
      let str = '-'

    let date = oMoth + str + oDay;
    let time = route.query.time
    let nowcinema = {};
    let nowfilm = {};
    // 获取影院信息
    try {
      let {data} = await axios.get('/api/getCinemaByName', {params: {cinemaName: cinemaName}})
      if(!data.errorCode) {
        nowcinema = data.data
      }
    } catch (e) {
      console.log(e)
    }
    // 获取电影信息
    try {
      let {data} = await axios.get('/api/getSingleFilm', {params: {name: filmName}})
      if(!data.errorCode) {
        nowfilm = data.data[0]
      }
    } catch (e) {
      console.log(e)
    }
    return {cinema: nowcinema,
            film: nowfilm,
            room: room,
            date: date,
            time: time,
    }
  },
    methods: {
      handler: function(index) {
        if (this.clickList[index] == 0) {
          if (this.seatNum < 4) {
            this.$set(this.clickList,index,1);
            this.seatNum++;
            this.isTicketActive = true;
          } else {
            alert("最多选4个座位！")
          }
        } else if (this.clickList[index] == 1) {
          this.$set(this.clickList,index,0);
          this.seatNum--;
          if (this.seatNum == 0) {
            this.isTicketActive = false;
          }
        }
        this.totalPrice = this.ticketPrice * this.seatNum;
      },
      getSeatState: function(index) {
        if (this.clickList[index] == 0) {
          return "seat";
        } else if (this.clickList[index] == 1) {
          return "seatChoosed";
        } else if (this.clickList[index] == 2) {
          return "seatSold";
        }
      }
    }
}


</script>

<style>

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  background-image: none;
}

div {
  display: block;
}
.maincontainer {
  top: 100px;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.order-progress-bar {
  height: 60px;
  width: 100%;
  margin: 40px 0;
  text-align: center;
}

.order-progress-bar .step {
  float: left;
  width: 25%;
}

.order-progress-bar .step-num {
  color: #fff;
  font-size: 12px;
  display: inline-block;
  width: 16px;
  line-height: 16px;
  border-radius: 10px;
  text-align: center;
  background-color: #ffd8d7;
  position: relative;
  top: 10px;
}

.order-progress-bar .done .step-num {
  background-color: #f03d37;
}

.order-progress-bar .bar {
  width: 0;
  height: 4px;
  border-left: 150px solid #ffd8d7;
  border-right: 150px solid #ffd8d7;
}

.order-progress-bar .first .bar {
  border-left-color: transparent!important;
}

.order-progress-bar .done .bar {
  border-color: #f03d37;
}


.order-progress-bar .step-text {
  font-size: 14px;
  color: #999;
  display: inline-block;
  margin-top: 10px;
}

.order-progress-bar .done .step-text {
  color: #f03d37;
}

.order-progress-bar .last .bar {
  border-right-color: transparent!important;
}

/*主框*/
.main {
  width: 100%;
  border: 1px solid #e5e5e5;
  font-size: 0;
}

.clearfix:after, .clearfix:before {
  content: " ";
  display: table;
}

.hall {
  width: 820px;
  display: inline-block;
  vertical-align: top;
}

.hall .seat-example {
  margin: 30px 0 30px 120px;
}

.hall .seat-example .example {
  display: inline-block;
  font-size: 16px;
  color: #666;
  height: 26px;
  line-height: 26px;
  padding-left: 38px;
  background-repeat: no-repeat;
  margin-right: 50px;
}


.hall .seat-example .selectable-example {
  background-image: url("../../assets/img/chooseSeats/selectable_seat.gif");
  background-repeat: no-repeat;
}


.hall .seat-example .sold-example {
  background-image: url("../../assets/img/chooseSeats/sold_seat.gif");
  background-repeat: no-repeat;
}

.hall .seat-example .selected-example {
  background-image: url("../../assets/img/chooseSeats/selected_seat.gif");
  background-repeat: no-repeat;
}


/*座位图*/
.seat-block {
  font-size: 0;
  overflow: hidden;
  margin-left: 20px;
  white-space: nowrap;
}

.seat-block .row-id-container {
  width: 20px;
  float: left;
  margin-top: 112px;
  white-space: normal;
}

.seat-block .row-id-container .row-id {
  font-size: 16px;
  color: #999;
  margin-right: 40px;
  margin-bottom: 10px;
  display: inline-block;
  width: 20px;
  height: 26px;
  line-height: 29px;
  text-align: center;
}

.seat-block .seats-container {
  margin-left: 50px;
  overflow: auto;
  position: relative;
  padding-top: 112px;
}

.seats-container .screen-container {
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
}

.seats-container .screen-container .screen {
  width: 550px;
  padding-top: 50px;
  text-align: center;
  font-size: 16px;
  color: #666;
  position: relative;
  margin-bottom: 40px;
}

.seats-container .screen-container .c-screen-line {
  width: 0;
  border-left: 1px dashed #e5e5e5;
  position: absolute;
  top: 90px;
  bottom: 0;
  left: 50%;
}

.seats-container {
  display: inline-block;
  min-width: 550px;
}

/*.seats-wrapper {
  width: 500px;
  height: 210px;
  margin: auto;
  margin-left: 20px;
}*/


/*座位*/
td {
  border:1px solid #aaaaaa;
}
*,table,tr,td {
  margin:0;
  padding:0;
}
/*.mouseoverStyle {
  font-size:20px;
  color:#ff0000;
  background-color:#FFFF00;
}
.mouseoutStyle {
  font-size:15px;
  color:#FF0000;
}*/

#seatWrap {
  width:440px;
  margin:auto;
  background:#ccc;
}

.seat, .seatSold, .seatChoosed{
  cursor: pointer;
  width:23px;
  height:19px;
  margin:3px 14px 14px 14px;
  float:left;
  text-align:center;
  color:#fff;
}
.seat {
  background-image: url("../../assets/img/chooseSeats/selectable_seat.gif");
  background-repeat: no-repeat;
}

* {
  margin:0;
  padding:0;
  text-decoration:none;
}
.seatChoosed {
  /*background:#00ff00;*/
  background-image: url("../../assets/img/chooseSeats/selected_seat.gif");
  background-repeat: no-repeat;
}

.seatSold {
  background-image: url("../../assets/img/chooseSeats/sold_seat.gif");
  background-repeat: no-repeat;
}


/*side*/
.side {
  width: 378px;
  background-color: #f9f9f9;
  padding: 20px;
  display: inline-block;
}

.clearfix:after, .clearfix:before {
  content: " ";
  display: table;
}

.movie-info .poster {
  width: 115px;
  height: 158px;
  border: 2px solid #fff;
  box-shadow: 0 2px 7px 0 hsla(0, 0%, 53%, .5);
  float: left;
}

.poster img {
  width: 100%;
  height: 100%;
}

.movie-info .content {
  margin-left: 140px;
}

.clearfix:after {
  clear: both;
}

.movie-info .content .name {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 14px;
}

.movie-info .info-item {
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
}

.movie-info .info-item .value {
  color: #151515;
  margin-left: 2px;
}

.side .show-info {
  margin-top: 20px;
}

.side .show-info .info-item {
  margin-bottom: 9px;
}

.side .show-info .info-item>span {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
}

.side .show-info .info-item .value {
  margin-left: 10px;
}

.side .show-info .info-item .screen {
  color: #f03d37;
}

.side .ticket-info {
  padding: 20px 0 10px;
  border-top: 1px dashed #e5e5e5;
  border-bottom: 1px dashed #e5e5e5;
}
/*no-ticket*/
.side .ticket-info .no-ticket {
  display: none;
}
/* has-ticket */
.side .ticket-info .has-ticket {
  display: none;
}

.side .ticket-info .ticket-active {
  display: block;
}




.side .ticket-info .buy-limit {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.side .ticket-info .noselected {
  font-size: 14px;
  color: #333;
  text-align: center;
  margin: 28px 0 39px;
}

p {
  display: block;
}

.side .ticket-info .text {
  font-size: 14px;
  color: #999;
  float: left;
}

.side .ticket-info .ticket-container {
  margin-left: 42px;
  margin-bottom: 20px;
  position: relative;
  top: -5px;
}
.side .ticket-info .ticket {
  position: relative;
  font-size: 14px;
  color: #f03d37;
  display: inline-block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0 12px 10px 0;
}

.side .ticket-info .total-price {
  font-size: 14px;
  color: #333;
}

.side .ticket-info .price:before {
  content: "\FFE5";
  font-size: 14px;
}

.side .ticket-info .price {
  color: #f03d37;
  font-size: 24px;
}


.confirm-order {
  padding: 20px 0;
  text-align: center;
}

.side .confirm-order .login-form {
  display: inline-block;
  width: 260px;
}



.side .confirm-order .login-form input {
  display: block;
  width: 218px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  margin: 0 auto;
  margin-bottom: 6px;
  padding: 20px 20px;
  font-size: 14px;
  color: #333;
}

.side .confirm-order .code-inputer {
  display: inline-block;
  line-height: 42px;
}

.side .confirm-order .send-code {
  font-size: 14px;
  position: relative;
  right: -60px;
  top: -48px;
  color: #f03d37;
  cursor: default;
}

.side .confirm-order .confirm-btn.disable {
  background-color: #dedede;
  box-shadow: none;
}

.side .confirm-order .confirm-btn {
  cursor: default;
  width: 260px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border-radius: 21px;
  position: relative;
  left: 50%;
  margin: 38px 0 0 -130px;
  background-color: #f03d37;
}

.confirm-btn a {
  color: #fff;
}

.cut {
  width: 100%;
  height: 200px;
}
</style>
