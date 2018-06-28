<template>
  <div class="mycontainer">
    <div id="adcolum" class="carousel slide" data-ride="carousel">
      <Adcolumn :adcolumn_list="adcolumn_list"></Adcolumn>
    </div>
    <!--侧边框: 票房-->
    <div class="aside">
      <div class="box-office">
        <div class="box-header">
          <span>票房排行</span>
        </div>
        <div class="box-body" id="box-body">
          <ul class="box-office-data list-unstyled">
            <li v-for="(film, index) in hotFilms" v-if="index < 10" :key="index">
              <a class="box-list-link" v-bind:href="href" target="_blank">
                <span class="rank">{{index + 1}}</span>
                <span class="rank-film-name">{{film.film_name}}</span>
                <span class="rank-film-tickets"><span class="rank-film-tickets-num">{{film.box_office}}</span>万</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--主内容-->
    <div class="main">
      <!--正在热映-->
      <div class="online" id="hot_online">
        <div class="box-header">
          <span>正在热映</span>
          <a href=""><span class="film-more">更多></span></a>
        </div>
        <div v-for="(film, index) in hotFilms" v-if="index < 8" class="film-context" :key="index">
          <img class="index-film-picture" v-bind:src="film.img_src" v-bind:alt="film.img_alt" />
          <span class="index-film_name">{{film.film_name}}</span>
          <a class="ticket-link" :href="href" target="_blank"><span >购票</span></a>
        </div>
      </div>
      <!--即将上映-->
      <div class="online" id="ready_online">
        <div class="box-header">
          <span>即将上映</span>
          <a href=""><span class="film-more">更多></span></a>
        </div>
        <div v-for="(film, index) in ready_film_list" v-if="index < 8" class="film-context" :key="index">
          <img class="index-film-picture" v-bind:src="film.img_src" v-bind:alt="film.img_alt" />
          <span class="index-film_name">{{film.film_name}}</span>
          <a class="ticket-link" :href="href" target="_blank"><span >购票</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Adcolumn from '~/components/Adcolumn.vue'
import axios from '~/plugins/axios'
//import Vue from 'vue';

export default {
  components: {Logo, Adcolumn},
  head: {
    'title': '首页',
  },
  data() {
    return {
      currentPage: 1,
      numEachPage: 10,
      hotFilms: [],
      adcolumn_list: [
        {img_alt: "First Slide", img_src:"http://p1.meituan.net/movie/b226085e2768a5379f4e6f21fe19615f416523.png@750w_1l", href:"http://maoyan.com/films/news/38723"},
        {img_alt: "Second Slide", img_src:"http://p1.meituan.net/movie/c44e3020654434e5c97a15fc236e4c16406093.png@750w_1l", href:"http://maoyan.com/films/news/38754"},
        {img_alt: "Third Slide", img_src:"http://p1.meituan.net/movie/671f86af1cb5c7cc583a4d1d830c078b332830.jpg@750w_1l", href:"http://maoyan.com/films/news/39223"},
        {img_alt: "Forth Slide", img_src:"http://p1.meituan.net/movie/e1331da3af4c6e8319e977814e65d9cf1051652.png@750w_1l", href:"http://maoyan.com/films/news/39474"},
      ],
      online_film_list: [
        {film_name: "头号玩家", box_office: 1510.11, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "/movie-detail-page"},
        {film_name: "厉害了，我的国", box_office: 307.48, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "环太平洋：雷霆再起", box_office: 153.74, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "通勤营救", box_office: 101.76, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "遇见你真好", box_office: 74.68, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "红海行动", box_office: 64.17, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "花滑女王", box_office: 50.27, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "我说的都是真的", box_office: 41.29, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", box_office: 41.29, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "我超爱易烊千玺的", box_office: 39.42, img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"}
      ],
      ready_film_list: [
        {film_name: "一号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "二号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "三号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "四号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "五号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "六号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "七号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
        {film_name: "八号玩家", img_src: require("~/assets/img/film/best_player.jpg"), img_alt: "头号玩家", href: "https://picsum.photos/1024/480/?image=55"},
      ],
      href: "/movie-detail-page",     //转到电影详情页面

    }
  },
  async asyncData() {
    try {
      let {data} = await axios.get('/api/getHomeHotFilms');
      return {hotFilms: data.data}
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style>
  .mycontainer {
    margin-top: 50px;
    width: 100%;
  }
  #adcolum {
    margin-top: 0px;
    overflow: hidden;
  }
  .aside {
    width: 350px;
    float:right;
    margin-right: 60px;
    overflow: hidden;

  }
  .box-header {
    color: #8fc5ae;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 0.2em;
    margin: 40px 0;
    height: 30px;
    line-height: 30px;
  }
  .box-office-data > li {
    padding: 0 0 5px 0;
  }
  .box-list-link:link {
    text-decoration: none;
    cursor: pointer;
    color: #443737;
    font-size: 18px;
  }
  .rank {
    font-style: italic;
    color: #8fc5ae;
    font-weight: 700;
    display: inline-block;
    margin: 0 10px 0 5px;
  }
  .rank-film-name {
    display: inline-block;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
    white-space: nowrap;
    color: white;
  }

  .rank-film-tickets {
    display: inline-block;
    float: right;
    padding-right: 5px;
    color: white;
  }
  .main {
    width: 850px;
    height: auto;
    margin-left: 60px;
  }
  .film-context {
    display: inline-block;
    overflow: hidden;
    margin: 0px 30px 30px 0px;
    padding: 0 0 35px 0;

    position: relative;
  }
  .index-film-picture {
    width: 160px;
    height: 220px;
  }
  .index-film_name {
    position: absolute;
    top: 195px;
    left: 5px;
    color: white;
    font-size: 14px;
  }
  .ticket-link {
    display: inline-block;
    width: 160px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    position: absolute;
    top: 220px;
    left: 0;
    background-color: #343A40;
  }
  .ticket-link>span {
    color: #8fc5ae;
  }
  .film-more {
    font-weight: 500;
    font-size: 14px;
    color: #e30000;
  }
</style>
