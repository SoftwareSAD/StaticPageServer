<template>
  <div class="container all-video-container">
    <!--全部资讯栏-->
    <h4 class="latest-header">全部视频</h4>
    <div class="video-cell-group">
      <div class="video-cell card img-fluid" v-for="item in allvideodata" :key="item.id">
        <a :href="item.url" :title="item.title" target="_blank">
          <img class="video-cell-img card-img-top" :src="item.cover_img_src" alt="video image">
          <div class="video-cell-detail card-img-overlay">
            <p class="video-cell-title card-title two-line-text">{{item.title}}</p>
            <small class="view-count float-right"><span class="fa fa-play fa-lg"></span>{{item.view_count}}</small>
          </div>
        </a>
      </div>
    </div>
    <!--分页栏-->
    <div class="pag-nav">
      <b-pagination align="center" :total-rows="300" v-model="currentPage" :per-page="15">
      </b-pagination>
    </div>
  </div>
</template>
<script scoped>
  export default {
    head() {
      return {'title': '全部资讯'}
    },
    data () {
      return {
        currentPage: 1,
        allvideodata:{},
      }
    },
    asyncData (context) {
      return {
        currentPage: 1,
        allvideodata: [//30个/页
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
          {
            cover_img_src:  require('~/assets/img/7.jpg'),
            url: 'http://baidu.com',
            title: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            view_count: '200'
          },
        ],

      }
    }
  }
</script>
<style>
  .all-video-container{
    margin: 150px auto 50px auto;
    text-align: center;
    bottom: 50px;
    min-height: 300px;
    position: relative;
  }
  .pag-nav {
    position: relative;
    bottom: -50px;
  }
  .latest-header {
    text-align: center;
    margin: 10px;
  }
  span.fa{
    line-height: 3px;
    margin: 0px 3px 0px 3px;
  }
  .video-cell {
    display: inline-block;
    width: 250px;
    height: 180px;
    margin: 20px 20px 20px 20px;
    overflow: hidden;
    padding: 0;
  }
  .video-cell-img {
    width: 100%;
    height: 100%;
  }
  .video-cell-detail:hover {
    background-color:  rgba(0,0,0,0.5);
    color: antiquewhite;
    font-size: 16px;
  }
  .video-cell-detail{
    background-color:  rgba(0,0,0,0.1);
    text-shadow: 1px 1px 1px #5D6D7E;
    color: white;
    font-size: 16px;
  }
</style>
