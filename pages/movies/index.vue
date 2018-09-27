<template>
  <!--电影筛选栏-->
  <div class="container" id="app">
    <div class="movies-channel">
      <div class="tags-panel">
        <ul class="tags-lines">
          <li class="tags-line">
            <div class="tags-title">类型 ：</div>
            <ul class="tags">
              <li v-for="(type, index) in type_list" v-if="index < 9" :key="index">
                <button @click="changeLimit(type.type_name, Distriction, onlineTime)" target="_self">{{type.type_name}}</button>
              </li>
            </ul>
          </li>
          <li class="tags-line tags-line-border">
            <div class="tags-title">区域 ：</div>
            <ul class="tags">
              <li v-for="(position, index) in position_list" v-if="index < 10" :key="index">
                <button @click="changeLimit(MovieType, position.position_name, onlineTime)" target="_self">{{position.position_name}}</button>
              </li>
            </ul>
          </li>
          <li class="tags-line tags-line-border">
            <div class="tags-title">年代 ：</div>
            <ul class="tags">
              <li v-for="(age, index) in age_list" v-if="index < 8" :key="index">
                <button :href="age.href" @click="changeLimit(MovieType, Distriction, age.age_name)" target="_self">{{age.age_name}}</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="movies-panel">
        <div class="movies-sorter">
          <div class="cat-sorter">
            <ul>
              <li v-for="(sort, index) in sort_choice" v-if="index < 3" :key="index">
                <span class="sort-control-group">
                  <span class="sort-control sort-radio"></span>
                  <!--<span class="sort-control sort-radio sort-radio-checked"></span>-->
                  <button class="sort-control-label" v-on:click="sortMovie(sort.sort_type)" target="_self">{{sort.sort_type}}</button>
                </span>
              </li>
            </ul>
          </div>

        </div>
        <div class="movies-list">
          <dl class="movie-list">
            <dd v-for="(movie, index) in movie_list" v-if="index < 30" :key="index">
              <div class="movie-item">
                <a :href="href + '?filmName=' + movie.movie_name"  target="_blank">
                  <div class="movie-poster">
                    <img v-lazy="movie.img" :title="movie.movie_name" :data-val="movie.id" :key="movie.img">
                  </div>
                </a>
                <div class="channel-action channel-action-sale">
                  <a>购票</a>
                </div>
              </div>
              <div class="channel-detail movie-item-title" :title="movie.movie_name">
                <a :href="href + '?filmName=' + movie.movie_name" :title="movie.movie_name" target="_blank" :data-val="movie.id">{{movie.movie_name}}</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">{{movie.movie_star}}</i>
              </div>
            </dd>
          </dl>
        </div>
        <div class="movies-pager">
          <!--<b-pagination align="center" :total-rows="900" v-model="currentPage" :per-page="30" @click.native="changeLimit(MovieType, Distriction, onlineTime)"></b-pagination>-->
          <b-pagination align="center" :total-rows="900" v-model="currentPage" :per-page="30" @click.native="getMoviesByPage()"></b-pagination>
          <div>currentPage: {{currentPage}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
  import axios from '~/plugins/axios'
  export default {
    head() {
      return {'title': '正在热映'}
    },
    data () {
      return {
        href: "/nuxt/movie-detail-page",
        movie_list: [],
        MovieType: '全部',
        Distriction: '全部',
        onlineTime: '全部',
        currentPage: 1,
        sortType: "",
        type_list: [
          {type_name: "全部"},
          {type_name: "爱情"},
          {type_name: "喜剧"},
          {type_name: "剧情"},
          {type_name: "惊悚"},
          {type_name: "动作"},
          {type_name: "悬疑"},
          {type_name: "科幻"},
          {type_name: "纪录片"}
        ],
        position_list: [
          {position_name: "全部"},
          {position_name: "大陆"},
          {position_name: "美国"},
          {position_name: "英国"},
          {position_name: "日韩"},
          {position_name: "香港"},
          {position_name: "台湾"},
          {position_name: "印度"},
          {position_name: "欧洲"},
          {position_name: "其他"}
        ],
        age_list: [
          {age_name: "全部"},
          {age_name: "2018"},
          {age_name: "2011-2017"},
          {age_name: "2000-2010"},
          {age_name: "90年代"},
          {age_name: "80年代"},
          {age_name: "70年代"},
          {age_name: "更早"}
        ],
        sort_choice: [
          {sort_type: "按热门排序", href: '/movies'},
          {sort_type: "按时间排序", href: '/movies'},
          {sort_type: "按评价排序", href: '/movies'}
        ],

      }
    },

    async asyncData({context, route}) {
      // 根据sortID值（排序方法）获取电影列表，默认1：热度排序
      let sortID = route.query.sort_ID == null ? 1 : route.query.sort_ID;
      let movieList = [];
      try {
        // getFilmList未实现
        let {data} = await axios.get('/api/getFilmList', {params: {sortID: sortID}});
        if(!data.errorCode) {
          movieList = data.data
        }
      } catch (e) {
        console.log(e)
      }
      // 连上数据库后用这个return
       return {movie_list: movieList}
    },
    methods: {
      async changeLimit(type_name, country, age) {
        this.MovieType = type_name;
        this.Distriction = country;
        this.onlineTime = age;
        let nowfilm = [];
        try {
          if(this.Distriction=="全部" && this.onlineTime=="全部"){
            let {data} = await axios.get('/api/getMoviesByType', {params: {type: this.MovieType, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else if(this.MovieType=="全部" && this.onlineTime=="全部"){
            let {data} = await axios.get('/api/getMoviesByCountry', {params: {country: this.Distriction, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else if(this.MovieType=="全部" && this.Distriction=="全部"){
            let {data} = await axios.get('/api/getMoviesByDate', {params: {online_time: this.onlineTime, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else{
            let {data} = await axios.get('/api/getMoviesByAll', {params: {type: this.MovieType, country: this.Distriction, online_time: this.onlineTime, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
        } catch (e) {
          console.log(e)
        }
        this.movie_list = nowfilm;
      },
      async sortMovie(type){
        this.sortType = type;
        console.log()
        let nowfilm = [];
        try {
          // console.log(currentPage)
          if(this.sortType == "按热门排序"){
            let {data} = await axios.get('/api/getHotSortedMovies', {params: {currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else if(this.sortType == "按时间排序"){
            let {data} = await axios.get('/api/getOnlineSortedMovies', {params: {currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else if(this.sortType == "按评价排序"){
            let {data} = await axios.get('/api/getEvalSortedMovies', {params: {currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
        } catch (e) {
          // console.log(e)
        }
        this.movie_list = nowfilm;
      },
      async getMoviesByPage() {
        let nowfilm = [];
        try {
          if(this.sortType == "按热门排序"){
            let {data} = await axios.get('/api/getHotSortedMovies', {params: {currentPage: this.currentPage}})
            if(!data.errorCode) {
             nowfilm = data.data
            }
          }
          else if(this.sortType == "按时间排序"){
           let {data} = await axios.get('/api/getOnlineSortedMovies', {params: {currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
             }
           }
          else if(this.sortType == "按评价排序"){
            let {data} = await axios.get('/api/getEvalSortedMovies', {params: {currentPage: this.currentPage}})
             if(!data.errorCode) {
              nowfilm = data.data
             }
           }
          else if(this.Distriction=="全部" && this.onlineTime=="全部"){
            let {data} = await axios.get('/api/getMoviesByType', {params: {type: this.MovieType, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else if(this.MovieType=="全部" && this.onlineTime=="全部"){
            let {data} = await axios.get('/api/getMoviesByCountry', {params: {country: this.Distriction, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else if(this.MovieType=="全部" && this.Distriction=="全部"){
            let {data} = await axios.get('/api/getMoviesByDate', {params: {online_time: this.onlineTime, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
          else{
            let {data} = await axios.get('/api/getMoviesByAll', {params: {type: this.MovieType, country: this.Distriction, online_time: this.onlineTime, currentPage: this.currentPage}})
            if(!data.errorCode) {
              nowfilm = data.data
            }
          }
        } catch (e) {
        // console.log(e)
        }
          this.movie_list = nowfilm;
      },
    }
  }
</script>

<style>
  div{
    display: block;
  }
  body {
    background: none;
    background-size: cover;
  }
  img{
    border-style: none;
  }
  i, cite, em, var, address, dfn{
    font-style: italic;
  }
  button{
    background: transparent;
    border: none;
    color: #dbe1ec;
    padding: 0.5px;
    margin: 0;
    cursor: pointer;
  }
  .movie-subnav{
    background-color: #23272b;
    height: 60px;
    width: 100%;
    min-width: 1200px;
    text-align: center;
  }
  .movie-subnav .movie-navbar{
    display: inline-block;
    overflow: hidden;
  }
  .movie-subnav .movie-navbar li{
    display: inline-block;
    float: left;
  }
  .movie-subnav li, .movie-subnav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .movie-subnav .movie-navbar li .active{
    color: #c82333;
    position: relative;
    cursor: default;
  }
  .movie-subnav .movie-navbar li a{
    display: block;
    font-size: 16px;
    color: #adb5bd;
    height: 60px;
    line-height: 60px;
    padding: 0 40px;
    float: left;
  }
  a{
    text-decoration: none;
  }
  a{
    background-color: transparent;
  }
  a:link {
    color:#dbe1ec;
    cursor: pointer;
  }
  a:visited{
    color: darksalmon;
  }
  a:hover{
    color: darkred ;
  }
  li{
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .container{
    width:1200px;
    margin-top: 60px;
  }
  .movies-channel{
    width: 1120px;
    margin: auto;
    overflow: hidden;
  }
  .tags-panel{
    border: 1px solid #d3d9df;
    padding: 0 20px;
    margin-top: 40px;
  }
  .tags-panel li, .tags-panel ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .tags-line{
    padding: 10px 0!important;
  }
  .tags-title{
    height: 24px;
    line-height: 24px;
    float: left;
    color: #f7f8fb;
    font-size: 14px;
  }
  .tags{
    margin-left: 40px!important;
  }
  .tags li.active{
    background: #c82333;
    color: #f7f8fb;
  }
  .tags li{
    border-radius: 14px;
    padding: 3px 9px;
    display: inline-block;
    margin-left: 12px;
  }

  .tag li a{
    color: #fff;
    font-size: 14px;
  }
  .tags-line-border{
    border-top: 1px dotted #d3d9df;
  }
  .movies-panel{
    margin-top: 40px;
  }
  .movies-sorter{
    overflow: hidden;
  }
  .movies-sorter .cat-sorter{
    float: left;
    padding-left: 2px;
  }
  .movies-sorter .play-sorter{
    text-align: right;
    padding-right: 10px;
    display: none;
  }
  .movies-sorter ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .movies-sorter li{
    display: inline-block;
    height: 16px;
    line-height: 18px;
    margin-right: 30px;
  }
  .sort-control-group{
    cursor: pointer;
    line-height: 16px;
  }
  .sort-control{
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
  .sort-radio{
    background: url("../../assets/img/radiobutton/up.png") no-repeat;
  }
  .sort-radio-checked{
    background: url("../../assets/img/radiobutton/down.png") no-repeat;
  }
  .sort-control-label{
    font-size: 14px;
    vertical-align: top;
    color: #dbe1ec;
  }
  .movies-list{
    overflow: hidden;
    margin-top: 20px;
  }
  .movie-list{
    margin: -29px 0 20px -20px;
  }
  dl{
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
  .movies-list dd{
    margin: 30px 0 0 25px;
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  dd{
    display: block;
    -webkit-margin-start: 40px;
  }
  .movie-item{
    position: relative;
    border: 1px solid #e2e3e5;
    margin: -1px;
  }
  .movie-poster{
    background-color: #fcfcfc;
    width: 160px;
    height: 220px;
    overflow: hidden;
    position: relative;
  }
  .movie-poster .poster-default{
    top: 50%;
    left: 50%;
    width: 68px;
    height: 62px;
    margin-top: -31px;
    margin-left: -34px;
  }
  .movie-poster .movie-overlay, .movie-poster img{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .channel-action-sale{
    background-color: #e4606d;
  }
  .channel-action{
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 0 3px;
    height: 18px;
    line-height: 18px;
    border-radius: 1px;
  }
  .channel-action a{
    color: #dae0e5;
    font-size: 12px;
    vertical-align: top;
  }
  .movie-ver{
    position: absolute;
    top: 4px;
    left: -2px;
    font-size: 12px;
    color: #dbe1ec;
  }
  .movie-ver i.imax3d{
    width: 69px;
    height: 25px;
    background-image: url("");
  }
  .movie-ver i{
    display: inline-block;
  }
  .channel-detail{
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 16px;
    color: #f7f8fb;
    margin-top: 10px;
  }
  .channel-detail a{
    color: #f7f8fb;
  }
  .channel-detail{
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 16px;
    color: #eeeeee;
    margin-top: 10px;
  }
  .channel-detail-orange{
    color: darksalmon;
  }
  .channel-detail-orange .integer{
    font-size: 18px;
  }
  .channel-detail-orange .fraction{
    font-size: 14px;
  }
  .movies-pager{
    text-align: center;
  }
  .list-pager{
    list-style: none;
  }
  .list-pager li.active{
    border-color: #e4606d;
    background-color: #e4606d;
  }
  .list-pager li{
    display: inline-block;
    height: 32px;
    margin: 0 4px;
    border: 1px solid #d8d8d8;
    line-height: 30px;
    text-align: center;
    color: #999999;
    background-color: #dbe1ec;
  }
  .list-pager a{
    display: block;
    padding: 0 12px;
    color: #333;
  }
  .list-pager li.active a{
    color: #dbe1ec;
  }
  .list-pager li.sep{
    padding: 0 12px;
  }
</style>

