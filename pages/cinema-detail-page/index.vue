<template>
<div>
    <div class="banner cinema-banner">
        <div class="wrapper clearfix">
            <div class="cinema-left">
                <div class="avatar-shadow">
                    <img class="avatar" :src="cinema.img_url">
                </div>
            </div>
            <div class="cinema-brief-container">
                <h3 class="name text-ellipsis">{{cinema.cinema_name}}</h3>
                <div class="address text-ellipsis">{{cinema.address}}</div>
                <div class="telephone">{{cinema.telephone}}</div>
                <div class="features-group">
                    <div class="group-title">
                        影院服务
                    </div>

                    <div class="feature">
                        <span class="tag ">3D眼镜收费</span>
                        <p class="desc text-ellipsis" title="自费购买, 5.0元每副">自费购买, 5.0元每副</p>
                    </div>
                    <div class="feature">
                        <span class="tag ">儿童优惠</span>
                        <p class="desc text-ellipsis" title="1.3m以下儿童观看普通电影免票，每个成年人仅限带一名儿童">1.3m以下儿童观看普通电影免票，每个成年人仅限带一名儿童</p>
                    </div>
                    <div class="feature">
                        <span class="tag park-tag">可停车</span>
                        <p class="desc text-ellipsis" title="影城有免费停车位提供">影城有免费停车位提供</p>
                    </div>
                </div>
            </div>
            <div id="cinema-map">
            </div>
        </div>
    </div>
    <div class="movie-container" id="app">
        <div class="movie-list-container" data-cinemaid="2161">
            <div class="movie-list">
              <div class="movie active">
                <img :src="film.img" :alt="film.movie_name" />
              </div>
              <div class="movie" v-for="(movie_img, index) in cinema.online_moive" v-if="film.img != movie_img" :key="index" :data-index="index">
                <img :src="movie_img" alt="movie_img" />
              </div>
              <span class="pointer" style="left: 71.0138px;"></span>

            </div>
            <span class="scroll-prev scroll-btn"></span>
            <span class="scroll-next scroll-btn"></span>
        </div>
        <div class="show-list active" data-index=0>
            <div class="movie-info">
                <div>
                    <h3 class="movie-name">{{film.movie_name}}</h3>
                    <span class="score sc">{{film.movie_star}}</span>
                </div>
                <div class="movie-desc">
                    <div>
                        <span class="key">时长：</span>
                        <span class="value">{{film.movie_time}}</span>
                    </div>
                    <div>
                        <span class="key">类型：</span>
                        <span class="value">{{film.movie_type}}</span>
                    </div>
                    <div>
                        <span class="key">主演：</span>
                      <span class="value" v-for="(actorName, index) in film.actor" v-if="index < 5" :key="index">{{actorName}} </span>
                    </div>
                </div>
            </div>
            <div class="show-date">
                <span>观影时间 :</span>
                <span class="date-item active" data-index="0">今天 6月19</span>
                <span class="date-item " data-index="1">明天 6月20</span>
                <span class="date-item " data-index="2">后天 6月21</span>
                <span class="date-item " data-index="3">周五 6月22</span>
                <span class="date-item " data-index="4">周六 6月23</span>
                <span class="date-item " data-index="5">周日 6月24</span>
            </div>
            <div class="plist-container active">
                <table class="plist">
                    <thead>
                        <tr>
                          <th>放映时间</th>
                          <th>语言版本</th>
                          <th>放映厅</th>
                          <th>售价（元）</th>
                          <th>选座购票</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="">
                          <td>
                            <span class="begin-time">14:40</span>
                            <br>
                            <span class="end-time">16:48散场</span>
                          </td>
                          <td>
                            <span class="lang">英语3D</span>
                          </td>
                          <td>
                            <span class="hall">1号厅</span>
                          </td>
                          <td>
                            <span class="sell-price"><span class="stonefont">28</span></span>
                          </td>
                          <td>
                            <a href="/chooseSeats" class="buy-btn normal" data-tip="" data-act="show-click" data-bid="b_gvh3l8gg" data-val="{movie_id: 341628, cinema_id:2161}">选座购票</a>
                          </td>
                        </tr>
                        <tr class="even">
                          <td>
                            <span class="begin-time">15:30</span>
                            <br>
                            <span class="end-time">17:38散场</span>
                          </td>
                          <td>
                            <span class="lang">英语3D</span>
                          </td>
                          <td>
                            <span class="hall">2号厅</span>
                          </td>
                          <td>
                            <span class="sell-price"><span class="stonefont">28</span></span>
                          </td>
                          <td>
                            <a href="/chooseSeats" class="buy-btn normal" data-tip="" data-act="show-click" data-bid="b_gvh3l8gg" data-val="{movie_id: 341628, cinema_id:2161}">选座购票</a>
                          </td>
                        </tr>
                        <tr class="">
                          <td>
                            <span class="begin-time">17:00</span>
                            <br>
                            <span class="end-time">19:08散场</span>
                          </td>
                          <td>
                            <span class="lang">英语3D</span>
                          </td>
                          <td>
                            <span class="hall">1号厅</span>
                          </td>
                          <td>
                            <span class="sell-price"><span class="stonefont">28</span></span>
                          </td>
                          <td>
                            <a href="/chooseSeats" class="buy-btn normal" data-tip="" data-act="show-click" data-bid="b_gvh3l8gg" data-val="{movie_id: 341628, cinema_id:2161}">选座购票</a>
                          </td>
                        </tr>
                        <tr class="even">
                          <td>
                            <span class="begin-time">18:00</span>
                            <br>
                            <span class="end-time">20:08散场</span>
                          </td>
                          <td>
                            <span class="lang">英语3D</span>
                          </td>
                          <td>
                            <span class="hall">2号厅</span>
                          </td>
                          <td>
                            <span class="sell-price"><span class="stonefont">28</span></span>
                          </td>
                          <td>
                            <a href="/chooseSeats" class="buy-btn normal" data-tip="" data-act="show-click" data-bid="b_gvh3l8gg" data-val="{movie_id: 341628, cinema_id:2161}">选座购票</a>
                          </td>
                        </tr>
                        <tr class="">
                          <td>
                            <span class="begin-time">19:20</span>
                            <br>
                            <span class="end-time">21:28散场</span>
                          </td>
                          <td>
                            <span class="lang">英语3D</span>
                          </td>
                          <td>
                            <span class="hall">1号厅</span>
                          </td>
                          <td>
                            <span class="sell-price"><span class="stonefont">28</span></span>
                          </td>
                          <td>
                            <a href="/chooseSeats" class="buy-btn normal" data-tip="" data-act="show-click" data-bid="b_gvh3l8gg" data-val="{movie_id: 341628, cinema_id:2161}">选座购票</a>
                          </td>
                        </tr>
                        <tr class="even">
                          <td>
                            <span class="begin-time">20:30</span>
                            <br>
                            <span class="end-time">22:38散场</span>
                          </td>
                          <td>
                            <span class="lang">英语3D</span>
                          </td>
                          <td>
                            <span class="hall">2号厅</span>
                          </td>
                          <td>
                            <span class="sell-price"><span class="stonefont">28</span></span>
                          </td>
                          <td>
                            <a href="/chooseSeats" class="buy-btn normal" data-tip="" data-act="show-click" data-bid="b_gvh3l8gg" data-val="{movie_id: 341628, cinema_id:2161}">选座购票</a>
                          </td>
                        </tr>
                        <tr class="">
                          <td>
                            <span class="begin-time">21:40</span>
                            <br>
                            <span class="end-time">23:48散场</span>
                          </td>
                          <td>
                            <span class="lang">英语3D</span>
                          </td>
                          <td>
                            <span class="hall">1号厅</span>
                          </td>
                          <td>
                            <span class="sell-price"><span class="stonefont">28</span></span>
                          </td>
                          <td>
                            <a href="/chooseSeats" class="buy-btn normal" data-tip="" data-act="show-click" data-bid="b_gvh3l8gg" data-val="{movie_id: 341628, cinema_id:2161}">选座购票</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
            </div>
            <div class="plist-container">
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

export default {
  components: {Logo, Adcolumn},
  head: {
    'title': 'cinema-detail',
  },
  data() {
    return {
      cinema: {},
      film: "",   //当前选中的电影对象
      filmSrc: "",    //当前选中的电影图片src
    }
  },

  async asyncData({context, route}) {
    let filmName = route.query.filmName;      //取得电影名字
    let cinemaName = route.query.cinemaName;  //取得影院名字
    let nowcinema = {};
    let nowfilm = {};
    try {
      let {data} = await axios.get('/api/getCinemaByName', {params: {cinemaName: cinemaName}})
      if(!data.errorCode) {
        nowcinema = data.data
      }
    } catch (e) {
      console.log(e)
    }
    if (filmName == '') {   //未选择电影，自动选择影院内的第一个
      let src = nowcinema.online_moive[0];
      try {
        let {data} = await axios.get('/api/getFilmByImg', {params: {src: src}})
        console.log(data)
        if(!data.errorCode) {
          nowfilm = data.data[0]
        }
      } catch (e) {
        console.log(e)
      }
    } else {      //已经选择了电影直接获取
      try {
        let {data} = await axios.get('/api/getSingleFilm', {params: {name: filmName}})
        if(!data.errorCode) {
          nowfilm = data.data[0]
        }
      } catch (e) {
        console.log(e)
      }
    }
    console.log(nowfilm)
    return {cinema: nowcinema,
            film: nowfilm,
            filmSrc: nowfilm == undefined ? "" : nowfilm.img,
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

  .banner {
      background-color: rgba(153,170,200,0.9);
      width: 100%;
      min-width: 1200px;
      top: 50px;
      /*overflow: hidden;*/
      position: relative;
  }

  /*影院信息*/
  .banner .wrapper {
      width: 1200px;
      margin: 0 auto;
      height: 320px;
      position: relative;
      top: 70px;
  }
  .clearfix:before {
      content: " ";
      display: table;
  }
  /*影院图片*/
  .cinema-left {
      float:left;
      width: 360px;
      height: 340px;
      overflow: hidden;
      z-index: 9;
  }
  /*影院图片内容*/
  .cinema-left .avatar-shadow {
      border-width:4px;
      color: white;
      border-style:solid;

      position: relative;
      margin: 0 30px;
      width: 300px;
      height: 300px;
      padding-bottom: 40px;
  }


  .avatar-num {
      position: absolute;
      bottom: 0px;
      width: 292px;
      line-height: 32px;
      background-color: rgba(0,0,0,.6);
      color: white;
      font-size: 14px;
      text-align: center;
  }

  .cinema-brief-container {
      float: left;
  }

  .banner .cinema-brief-container .name {
      margin: 0;
      font-size: 26px;
      margin-bottom: 9px;
      font-weight: 400;
  }
  .features-group {
      position: relative;
  }
  .banner .cinema-brief-container .address {
      font-size: 14px;
      margin-bottom: 6px;
  }

  .telephone {
      margin-bottom: 20px;
  }
  .banner .cinema-brief-container .features-group .group-title {
      font-size: 14px;
      margin-bottom: 5px;
      overflow: hidden;
      width: 410px;
  }



  .feature {
      font-size: 12px;
      margin-bottom: 5px;
  }

  .group-title::after {
      border-top: 1px solid;
      display: block;
      content: "";
      position: relative;
      top: -10px;
      left: 70px;
  }

  .tag {
      display: inline-block;
      border: 1px solid;
      border-radius: 2px;
      min-width: 80px;
      height: 22px;
      line-height: 23px;
      text-align: center;
      padding-left: 4px;
      padding-right: 4px;
  }

  .banner p, .banner ul {
      margin-left: 10px;
      padding: 0;
      list-style: none;
      line-height: 1;
  }

  .desc {
      display: inline-block;
      max-width: 438px;
      margin-left: 5px;
      vertical-align: middle;
  }

  .text-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;


  }

  .group-title {
      margin-bottom: 5px;
  }

  /*影院定位*/
  #cinema-map {
      border-width:4px;
      color: white;
      border-style:solid;

      width: 200px;
      height: 200px;
      float: right;
      margin-right: 40px;
  }

  .movie-container {
      top: 50px;
      position: relative;
      width: 1200px;
      margin: 0 auto;
      margin-top: 120px;
  }

  .movie-list-container {
      width: 1200px;
      margin: 0 auto;
      height: 280px;
      padding: 22px 5px;
      box-sizing: border-box;
      overflow: hidden;
      box-shadow: inset 0 0 100px 80px #ededed;
      position: relative;
  }

  .movie-list-container .movie-list {
      white-space: nowrap;
      position: relative;
      display: table;
      left: 0;
      transition: left .2s ease;
      margin: auto;
  }

  .movie {
      width: 162px;
      height: 227px;
      border: 4px solid #fff;
      box-shadow: 0 1px 3px 0 hsla(0, 0%, 66%, .5);
      display: inline-block;
      transform-origin: 50%;
      transform: scale(.82);
      transition: transform, .1s, -webkit-transform .1s;
      word-spacing: 0;
      white-space: nowrap;
  }

  .movie img {
      width: 100%;
      height: 100%;
  }
  .movie.active {
      transform: scale(1);
      border-color: #2A5CAA;
  }

  .movie-list-container .pointer {
      position: absolute;
      display: block;
      content: "";
      bottom: -32px;
      border-style: solid;
      border-width: 11px 14px;
      border-color: transparent transparent #fff;
  }

  /*movie-list翻页箭头*/
  .movie-list-container .scroll-prev {
      left: 0;
  }

  .movie-list-container .scroll-next {

  }

  /*show-list*/
  .show-list.active {
      display: block;
  }

  .show-list .movie-info {
      margin-top: 20px;
      border-bottom: 1px solid #e5e5e5;
  }

  .show-list .movie-info .movie-name {
      display: inline-block;
      margin: 0 20px 20px 0;
      font-size: 26px;
      font-weight: 400;
      color: #333;
  }

  .show-list .movie-info .score {
      display: inline-block;
      font-size: 24px;
      color: #faaf00;
  }

  .show-list .movie-info .sc:after {
      content: "\5206";
      font-size: 12px;
  }

  .show-list .movie-info .movie-desc>div {
      display: inline-block;
      font-size: 14px;
      color: #151515;
      margin-bottom: 20px;
      margin-right: 40px;
  }
  .show-list .movie-info .key {
      color: #999;
  }

  .show-list .movie-info .value {
      font-size: 14px;
      color: #151515;
  }

  .show-list .show-date {
      padding: 30px 0;
      font-size: 14px;
      color: #999;
  }

  .show-list .show-date .date-item {
      display: inline-block;
      background-color: transparent;
      border-radius: 100px;
      color: #333;
      padding: 2px 10px;
      margin-left: 12px;
      cursor: default;
  }
  .show-list .show-date .date-item.active {
      color: #fff;
      background-color: #2A5CAA;
  }

  .show-list .plist-container {
      display: none;
  }

  .show-list .plist-container.active {
      display: block;
  }

  table {
      display: table;
      border-collapse: separate;
  }
  .show-list .plist {
      width: 100%;
      border: none;
      border-spacing: 0;
  }

  thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
  }

  .show-list .plist thead {
      background-color: #f7f7f7;
      color: #333;
      font-size: 16px;
      padding: 18px 0;
  }

  th {
      font-weight: bold;
      text-align: center;
  }
  .show-list .plist thead th {
      padding: 16px 0;
  }


  tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
  }

  tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
  }

  tbody .even {
    background-color: #f9f9f9;
  }


  .show-list .plist tbody tr {
      height: 82px;
  }

  .show-list .plist tbody td {
      text-align: center;
      width: 20%;
  }

  .show-list .plist tbody .begin-time {
      font-size: 18px;
      color: #333;
      font-weight: 700;
  }

  .show-list .plist tbody .end-time {
      font-size: 12px;
      color: #999;
  }

  .show-list .plist tbody .sell-price {
      font-size: 18px;
      color: #2A5CAA;
      font-weight: 700;
  }

  .show-list .plist tbody .sell-price:before {
      content: "\FFE5";
      font-size: 12px;
  }

  .show-list .plist tbody .buy-btn.normal {
      box-shadow: 0 2px 10px -2px #2A5CAA;
  }

  .show-list .plist tbody .buy-btn {
      display: inline-block;
      width: 80px;
      height: 30px;
      color: #fff;
      background-color: #2A5CAA;
      font-size: 14px;
      line-height: 30px;
      border-radius: 100px;
      text-align: center;
  }

  .cut {
    width: 100%;
    height: 200px;
  }
</style>
