<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
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
        <lazy-component class="box-body" id="box-body">
          <ul class="box-office-data list-unstyled">
            <li v-for="(film, index) in hotFilms" v-if="index < 10" :key="index">
              <a class="box-list-link" :href="href + '?filmName=' + film.movie_name" target="_blank">
                <span class="rank">{{index + 1}}</span>
                <span class="rank-film-name">{{film.movie_name}}</span>
                <span class="rank-film-tickets"><span class="rank-film-tickets-num">{{film.movie_total_price}}</span></span>
              </a>
            </li>
          </ul>
        </lazy-component>
      </div>
    </div>

    <!--主内容-->
    <div class="main">
      <!--正在热映-->
      <div class="online" id="hot_online">
        <div class="box-header">
          <span>正在热映</span>
          <!--按热门排序-->
          <a href="/movies?sort_ID=1"><span class="film-more">更多></span></a>
        </div>
        <div v-for="(film, index) in hotFilms" v-if="index < 8" class="film-context" :key="index">
          <img class="index-film-picture" v-lazy="film.img" v-bind:alt="film.movie_name" :key="film.img"/>
          <span class="index-film_name">{{film.movie_name}}</span>
          <a class="ticket-link" :href="'/nuxt/' + href + '?filmName=' + film.movie_name" target="_blank"><span >详情</span></a>
        </div>
      </div>
      <!--即将上映-->
      <div class="online" id="ready_online">
        <div class="box-header">
          <span>即将上映</span>
          <!--按时间排序-->
          <a href="/movies?sort_ID=2"><span class="film-more">更多></span></a>
        </div>
        <div v-for="(film, index) in readyFilms" v-if="index < 8" class="film-context" :key="index">
          <img class="index-film-picture" v-lazy="film.img" v-bind:alt="film.movie_name" :key="film.img"/>
          <span class="index-film_name">{{film.movie_name}}</span>
          <a class="ticket-link" :href="'/nuxt/' +href + '?filmName=' + film.movie_name" target="_blank"><span >详情</span></a>
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
      readyFilms: [],
      adcolumn_list: [
        {img_alt: "First Slide", img_src:"http://p1.meituan.net/movie/b226085e2768a5379f4e6f21fe19615f416523.png@750w_1l", href:"http://maoyan.com/films/news/38723"},
        {img_alt: "Second Slide", img_src:"http://p1.meituan.net/movie/c44e3020654434e5c97a15fc236e4c16406093.png@750w_1l", href:"http://maoyan.com/films/news/38754"},
        {img_alt: "Third Slide", img_src:"http://p1.meituan.net/movie/671f86af1cb5c7cc583a4d1d830c078b332830.jpg@750w_1l", href:"http://maoyan.com/films/news/39223"},
        {img_alt: "Forth Slide", img_src:"http://p1.meituan.net/movie/e1331da3af4c6e8319e977814e65d9cf1051652.png@750w_1l", href:"http://maoyan.com/films/news/39474"},
      ],
      href: "/movie-detail-page",     //转到电影详情页面

    }
  },
  async created(){
    await this.getReadyMovies()
  },
  async beforeMount() {
    await this.getHotMovies()
  },
  methods: {
    async getHotMovies() {
      try {
        let {data} = await axios.get('/api/getHomeHotMovies')
        if(!data.errorCode) {
          this.hotFilms = data.data
        }
      } catch (e) {
        console.log(e)
      }
    },
    async getReadyMovies() {
      try {
        let {data} = await axios.get('/api/getHomeReadyMovies')
        if(!data.errorCode) {
          this.readyFilms = data.data
        }
      } catch (e) {
        console.log(e)
      }
    },
  }
}
</script>

<style>
  .mycontainer {
    top: 50px;
    position: relative;
    /*width: 1200px;*/
    width: 100%;
    margin: 0 auto;
  }
  #adcolum {
    margin-top: 0px;
    overflow: hidden;
  }
  .aside {
    width: 350px;
    float:right;
    margin-right: 30px;
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
    margin-left: 30px;
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
    text-decoration: none;
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
  .cut {
    width: 100%;
    height: 200px;
  }
</style>
