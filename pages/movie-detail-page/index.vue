<template>
    <div class="mycontainer">
      <!--电影导栏-->
      <div class="banner">
        <div class="info">
          <img id="movie-img" :src="film.img" :alt="film.movie_name" />
          <div id="movie-info">
            <span class="info-font name-font">{{film.movie_name}}</span><br />
            <span class="info-font name-font">{{film.movie_ename}}</span><br />
            <span class="info-font">{{film.movie_type}} </span><br />
            <span class="info-font">{{film.country}} / {{film.movie_time}}</span><br />
            <span class="info-font">{{film.online_time}}</span><br />
            <a :href="'/nuxt/' +href + '?filmName=' + film.movie_name" v-if="film.movie_total_price != '暂无'" class="ticket-button">购票</a>
            <a :href="'/movie-detail-page' + '?filmName=' + film.movie_name" v-if="film.movie_total_price == '暂无'" class="ticket-button">暂时无法购票</a>
            <div class="movie-review">
              <span class="some-title">{{film.movie_total_price == '暂无' ? '想看人数' : '用户评分'}}</span><br />
              <span class="some-result">{{film.movie_star}}</span><br />
              <span class="some-title">票房</span><br />
              <span class="some-result">{{film.movie_total_price}}</span><br />
            </div>
          </div>
        </div>

      </div>
      <!--介绍-->
      <div class="main">
        <!--主要信息-->
        <div class="info-tab">
          <b-tabs>
            <b-tab title="剧情介绍" active>
              <br />{{film.introduction}}
            </b-tab>
            <b-tab title="演职员" >
              <span class="info-header">导演</span><br />
              <human :humanItem="{name: film.director, img_src: film.director_src}"></human>
              <br /><span  class="info-header">部分演员</span><br />
              <human v-for="(item, index) in film.actor" :key="index" :humanItem="{name: item, img_src: film.actor_src[index]}"></human>
            </b-tab>
          </b-tabs>
        </div>
      </div>


    </div>
</template>

<script>
  import human from '~/components/human.vue'
  import bus from '~/assets/eventBus';
  import axios from '~/plugins/axios'
    export default {
      components: { human },
      head() {
        return {'title': '电影详情'}
      },
      data () {
        return {
          film: {},
          href: "/cinema", // 跳到影院处选择影院
        }
      },

      async asyncData({context, route}) {
        let nowfilm = {};
        try {
          let {data} = await axios.get('/api/getSingleFilm', {params: {name: route.query.filmName}})
          if(!data.errorCode) {
            nowfilm = data.data[0]
          }
        } catch (e) {
          console.log(e)
        }
        return {film: nowfilm}
      }
    }
</script>

<style scoped>
  .mycontainer {
    width: 100%;
    margin-top: 60px;
    background-color: beige;
    text-decoration: none;
  }
.banner {
  width: 100%;
  height: 400px;
  background-color: #4B454A;
  color: white;
  font-size: 13px;
}
.info {
  padding-left: 65px;
  padding-top: 45px;
}
#movie-img {
  display: inline-block;
  width: 232px;
  height: 322px;
  border: 3px solid white;
  float: left;
}
#movie-info {
  position: relative;
  display: inline-block;
  padding-left: 30px;
  padding-top: 15px;
}
  .info-font{
    display: inline-block;
    padding: 4px 0;
}
  .name-font {
    font-size: 24px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ticket-button {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: white;
    margin-top: 80px;
    border: none;
    background-color: #d10000;
    width: 160px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.3em;
  }
  .movie-review {
    display: inline-block;
    width: 300px;
    position: absolute;
    top: 200px;
    left: 400px;
  }
  .some-title {
    padding: 4px 0;
  }
  .some-result {
    padding: 4px 0;
    color: #FFC600;
    font-size: 20px;
  }

  .main {
    padding: 60px;
    height: auto;

  }
  .info-tab {
    width: 750px;
    padding-bottom: 60px;
    font-size: 13px;
    line-height: 24px;

  }
  .info-header {
    display: inline-block;
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
  }

</style>
