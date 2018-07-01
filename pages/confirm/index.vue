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
            <div class="step done">
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
        <table class="order-table">
            <thead>
                <tr>
                    <th>影片</th>
                    <th>时间</th>
                    <th>影院</th>
                    <th>座位</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="movie-name">《{{film_name}}》</td>
                    <td class="showtime">今天 6月27日 19:20</td>
                    <td class="cinema-name">{{cinema_name}}</td>
                    <td>
                        <span class="hall">1号厅</span>
                        <div class="seats">
                            <div>
                                <span class=""><i>1</i>排<i>01</i>座</span>
                            </div>
                            <div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="right">
            <div class="price-wrapper">
                <span>实际支付 :</span>
                <span class="price">{{total_price}}</span>
            </div>
            <div>
                <div class="pay-btn" >
                  <a href="/" v-on:click="comeback">确认支付</a>
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
    'title': 'confirm',
  },
  data() {
    return {

    }
  },
  async asyncData({context, route}) {
    let filmName = route.query.filmName;      //取得电影名字
    let cinemaName = route.query.cinemaName;  //取得影院名字
    let totalprice = route.query.totalPrice;  //总价
    return {cinema_name: cinemaName,
      film_name: filmName,
      total_price: totalprice
    }
  },
  methods: {
    comeback: function(event) {
      alert('确认支付');
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

/* 支付提示 */
.count-down-wrapper {
  width: 100%;
  height: 90px;
  padding-top: 20px;
  margin-bottom: 40px;
  background-color: #fff3f3;
}

table {
  display: table;
  border-collapse: separate;
}

table {
  width: 1200px;
  border: 1px solid #e5e5e5;
  border-spacing: 0;
  margin-bottom: 60px;
}

thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
.order-table thead {
  background-color: #f7f7f7;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

.order-table thead th {
  font-size: 16px;
  color: #333;
  width: 25%;
  padding: 14px 0;
  font-weight: 400;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

.order-table thead th {
  font-size: 16px;
  color: #333;
  width: 25%;
  padding: 14px 0;
  font-weight: 400;
  text-align: center;
}


td {
  text-align: center;
  padding: 20px 0;
  color: #333;
}

.order-table .seats {
  display: inline-block;
  text-align: left;
}

.right {
  text-align: right;
}

.right .price-wrapper {
  font-size: 14px;
  color: #333;
  margin-bottom: 17px;
}

.right .price-wrapper .price {
  font-size: 36px;
  color: #f03d37;
}

.pay-btn {
  cursor: pointer;
  display: inline-block;
  width: 90px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #fff;
  background-color: #f03d37;
  border-radius: 100px; 
}


.confirm-btn a {
  color: #fff;
}
.cut {
  width: 100%;
  height: 200px;
}
</style>
