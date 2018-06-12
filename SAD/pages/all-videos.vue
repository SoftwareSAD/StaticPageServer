<template>
  <div class="container all-video-container">
    <!--全部资讯栏-->
    <h4 class="latest-header">全部视频</h4>
    <div class="video-cell-group">
      <div class="video-cell clearfix" v-for="item in allvideodata" :key="item.id">
        <div class="video-cell-img float-left">
          <a :href="item.videoLink" :title="item.videoTitle" target="_blank">
            <img :src="item.imgUrl"/>
          </a>
        </div>
        <div class="video-cell-detail float-left">
          <a :href="item.videoLink" title="item.videoTitle" target="_blank">
            <h5 class="video-cell-title two-line-text">{{item.videoTitle}}</h5>
          </a>
          <article class="video-cell-article three-line-text">{{item.videoArticle}}</article>
        </div>
        <small class="video-cell-info float-right">STAR MOVIES<span class="video-date text-muted">{{item.videoDate}}</span></small>
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
    head: {
      'title': '全部资讯',
    },
    data () {
      return {
        project: 'default',
        currentPage: 1,
        allvideodata: [
          {
            imgUrl:  require('~/assets/img/5.jpg'),
            videoLink: 'javascript:viod 0',
            videoTitle: '...',
            videoDate: '00-00',
            viewCount: '0',
            videoArticle: '...',
          },
        ]
      }
    },
    asyncData (context) {
      return {
        project: 'nuxt',
        allvideodata: [
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
    margin: 150px auto 50px auto;
    text-align: center;
    height: 1400px;
    position: relative;
  }
  .pag-nav {
    text-align: center;
    position: absolute;
    width: 280px;
    height: 50px;
    left: 50%;
    margin-left: -140px;
    bottom: 0;
  }
  .latest-header {
    text-align: center;
    margin: 10px;
  }
  .video-cell:hover{
    width: 86%;
    height: 115px;
  }

  .video-cell {
    width: 85%;
    height: 110px;
    transition:width .5s ease-out;
    -moz-transition:width .5s ease-out; /* Firefox 4 */
    -webkit-transition:width .5s ease-out; /* Safari and Chrome */
    -o-transition:width .5s ease-out; /* Opera */
    margin: 10px auto 10px auto;
    padding: 5px 5px 5px 5px;
    text-align: left;
    background-color: #2E294E;
    color: lightgrey;
  }
  .video-cell a {
    color: ghostwhite;
  }
  .video-cell-img {
    width: 19%;
    height: 100%;
    overflow: hidden;
  }
  .video-cell-img img {
    width: 100%;
    height: 100%;
  }
  .video-cell-detail {
    width: 68%;
    height: 100%;
    padding: 5px 20px 10px 10px;
    overflow: hidden;
  }
  .video-date {
    padding: 0px 0px 0px 5px;
  }
  .video-cell-info {
    width: 13%;
    height: 100%;
    padding: 5px 0px 0px 0px;
  }
</style>
