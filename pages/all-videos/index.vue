<template>
  <div class="container all-video-container">
    <!--全部资讯栏-->
    <h4 class="latest-header">全部视频</h4>
    <div class="video-cell-group">
      <div class="video-cell card img-fluid" v-for="item in allvideodata" :key="item.id">
        <a :href="item.videoLink" :title="item.videoTitle" target="_blank">
          <img class="video-cell-img card-img-top" :src="item.imgUrl" alt="video image">
          <div class="video-cell-detail card-img-overlay">
            <p class="video-cell-title card-title two-line-text">{{item.videoTitle}}</p>
            <small class="view-count float-right"><span class="fa fa-play fa-lg"></span>{{item.viewCount}}</small>
          </div>
        </a>
      </div>
    </div>
    <!--分页栏-->
    <div class="pag-nav">
      <b-pagination align="center" :total-rows="5000" v-model="currentPage" :per-page="10">
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
            imgUrl:  require('~/assets/img/7.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/7.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            videoLink: 'http://baidu.com',
            videoTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            videoDate: '04-13',
            viewCount: '200',
            videoArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
        ],
      }
    }
  }
</script>
<style>
  .all-video-container{
    margin: 140px auto 50px auto;
    text-align: center;
    height: 2400px;
    position: relative;
  }
  .pag-nav {
    text-align: center;
    position: absolute;
    width: 280px;
    height: 20px;
    left: 50%;
    margin-left: -140px;
    bottom: 0;
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
