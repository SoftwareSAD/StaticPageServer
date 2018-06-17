<template>
  <div class="container all-news-container">
    <!--全部资讯栏-->
    <h4 class="latest-header">全部资讯</h4>
    <div class="news-cell-group">
      <div class="news-cell clearfix" v-for="item in allnewsdata" :key="item.id">
        <div class="news-cell-img float-left">
          <a :href="item.newsLink" :title="item.newsTitle" target="_blank">
            <img :src="item.imgUrl"/>
          </a>
        </div>
        <div class="news-cell-detail float-left">
          <a :href="item.newsLink" title="item.newsTitle" target="_blank">
            <h5 class="news-cell-title two-line-text">{{item.newsTitle}}</h5>
          </a>
          <article class="news-cell-article three-line-text">{{item.newsArticle}}</article>
        </div>
        <small class="news-cell-info float-right">STAR MOVIES<span class="news-date text-muted">{{item.newsDate}}</span></small>
      </div>
    </div>
    <!--分页栏--每页10项，共50页-->
    <div class="pag-nav">
      <b-pagination align="center" :total-rows="500" v-model="currentPage" :per-page="10">
      </b-pagination>
    </div>
  </div>
</template>
<script scoped>
  export default {
    head() {
      return{'title': '全部资讯'}
    },
    data () {
      return {}
    },
    asyncData (context) {
      return {
        project: 'nuxt',
        currentPage: 1,
        allnewsdata: [
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
        ],
      }
    }
  }
</script>
<style>
  .all-news-container{
    margin: 140px auto 50px auto;
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
  .news-cell:hover{
    width: 86%;
    height: 115px;
  }

  .news-cell {
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
  .news-cell a {
    color: ghostwhite;
  }
  .news-cell-img {
    width: 19%;
    height: 100%;
    overflow: hidden;
  }
  .news-cell-img img {
    width: 100%;
    height: 100%;
  }
  .news-cell-detail {
    width: 68%;
    height: 100%;
    padding: 5px 20px 10px 10px;
    overflow: hidden;
  }
  .news-date {
    padding-bottom: 5px;
  }
  .news-cell-info {
    width: 13%;
    height: 100%;
    padding-top: 5px;
  }
</style>
