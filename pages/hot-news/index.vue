<template>
  <div class="container hot-container clearfix">
    <!--最新资讯-->
    <div class="latest-box-container">
      <div class="header">
        <h4>最新资讯</h4>
      </div>
      <div class="news-box-container clearfix" id="vue-app1">
        <div class="news-box" v-for="item in newsdata" :key="item.id">
          <a  :href="item.url" target="_blank" :title="item.title">
            <img class="news-box-img" :src="item.cover_img_scr" alt="news img">
          </a>
          <a  :href="item.url" target="_blank" :title="item.title">
            <p class="news-box-title two-line-text text-center">
              {{item.title}}
            </p>
          </a>
          <div class="news-box-info">
            <small class="update-time text-muted float-left">STAR MOVIES</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>{{item.view_count}}</small>
          </div>
        </div>
      </div>
      <a href="/all-news" class="all-news-ref float-right">更多<span class="fa fa-arrow-right fa-lg"></span></a>
    </div>
    <!--最新视频-->
    <div class="latest-box-container">
      <div class="header">
        <h4>最新视频</h4>
      </div>
      <div class="video-box-container clearfix" id="vue-app2">
        <div class="video-box card img-fluid" v-for="item in videodata" :key="item.id">
          <a :href="item.url" :title="item.title" target="_blank">
            <img class="video-box-img card-img-top" :src="item.cover_img_src" alt="video image">
            <div class="video-box-detail card-img-overlay">
              <p class="video-box-title card-title two-line-text">{{item.title}}</p>
              <small class="view-count float-right"><span class="fa fa-play fa-lg"></span>{{item.view_count}}</small>
            </div>
          </a>
        </div>
      </div>
      <a href="/all-videos" class="all-video-ref float-right">更多<span class="fa fa-arrow-right fa-lg"></span></a>
    </div>
  </div>
</template>

<script scoped>
  import axios from '~/plugins/axios'
  export default {
    head() {
      return {'title': '热点资讯'}
    },
    data() {
      return {
        newsdata: [],
        videodata: []
      }
    },
    created(){
      this.getHotNews()
      this.getHotVideos()
    },
    methods: {
      async getHotNews() {
        try {
          let {data} = await axios.get('/api/getHotNews')
          if(data.errorCode == 0) {
            this.newsdata = data.data
          }
        } catch (e) {
          console.log(e)
        }
      },
      async getHotVideos() {
        try {
          let {data} = await axios.get('/api/getHotVideos')
          if(data.errorCode == 0) {
            this.videodata = data.data
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
  //   async asyncData() {
  //     try {
  //       let {data} = await axios.get('/api/getHotNews')
  //       // let {video} = await axios.get('/api/getHotVideos')
  //       return {
  //         newsdata: data.data
  //       }
  //     } catch(e) {
  //     console.log(e)
  //     }
  // }

    // asyncData (context) {
    //   return {
    //     project: 'nuxt',
    //     newsdata: [
    //       {
    //         cover_img_scr:  require('~/assets/img/7.jpg'),
    //         url: 'http://baidu.com',
    //         title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_scr:  require('~/assets/img/7.jpg'),
    //         url: 'http://baidu.com',
    //         title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_scr:  require('~/assets/img/7.jpg'),
    //         url: 'http://baidu.com',
    //         title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_scr:  require('~/assets/img/7.jpg'),
    //         url: 'http://baidu.com',
    //         title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_scr:  require('~/assets/img/7.jpg'),
    //         url: 'http://baidu.com',
    //         title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_scr:  require('~/assets/img/7.jpg'),
    //         url: 'http://baidu.com',
    //         title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
    //         view_count: '200'
    //       },
    //     ],
    //     videodata:[
    //       {
    //         cover_img_src:  require('~/assets/img/2.jpg'),
    //         url: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
    //         title: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_src:  require('~/assets/img/2.jpg'),
    //         url: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
    //         title: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_src:  require('~/assets/img/2.jpg'),
    //         url: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
    //         title: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_src:  require('~/assets/img/2.jpg'),
    //         url: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
    //         title: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_src:  require('~/assets/img/2.jpg'),
    //         url: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
    //         title: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
    //         view_count: '200'
    //       },
    //       {
    //         cover_img_src:  require('~/assets/img/2.jpg'),
    //         url: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
    //         title: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
    //         view_count: '200'
    //       },
    //     ]
    //   }
    // }
  }
</script>

<style>
  .hot-container {
    margin-top: 140px;
    min-height: 300px;
  }
  .latest-box-container {
    text-align: center;
    margin: 50px 0 100px 0;
  }
  .news-box {
    display: inline-block;
    width: 300px;
    height: 240px;
    margin: 20px 20px 20px 20px;
    padding: 0;
    overflow: hidden;
    border-radius: 5px;
    background-color: #eeeeee;
    color: #2E294E;
  }
  .news-box-img {
    width: 300px;
    height: 70%;
  }
  .news-box-title {
    width: 100%;
    height: 20%;
    margin: 0;
    color: #2E294E;
  }
  .news-box-info {
    width: 100%;
    height: 10%;
    vertical-align: bottom;
    padding: 0px 10px 10px 10px;
  }

  span.fa{
    line-height: 3px;
    margin: 0px 3px 0px 3px;
  }

  .video-box {
    display: inline-block;
    width: 300px;
    height: 220px;
    margin: 20px 20px 20px 20px;
    overflow: hidden;
    padding: 0;
  }
  .video-box-img {
    width: 100%;
    height: 100%;
  }
  .video-box-detail:hover {
    background-color:  rgba(0,0,0,0.5);
    color: antiquewhite;
    font-size: 16px;
  }
  .video-box-detail{
    background-color:  rgba(0,0,0,0.1);
    color: white;
    text-shadow: 1px 1px 1px #5D6D7E;
    font-size: 16px;
  }
</style>
