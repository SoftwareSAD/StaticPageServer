<template>
    <div class="mycontainer">
      <div class="banner">
        <div class="info">
          <img id="movie-img" :src="film.img_src" :alt="film.img_alt" />
          <div id="movie-info">
            <span class="info-font name-font">{{film.film_name}}</span><br />
            <span class="info-font">{{film.country}} / {{film.time}}分钟</span><br />
            <span class="info-font">{{film.online_time}}上映</span><br />
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
      head() {
        return {'title': '电影详情'}
      },
      data () {
        return {
          film: {
            film_name: "头号玩家",
            country: "美国",
            time: "150",
            online_time: "2018-06-08",
            score: "8.2",
            box_office: 8953,
            img_src: require("~/assets/img/film/best_player.jpg"),
            img_alt: "厕所英雄",
            href: "https://picsum.photos/1024/480/?image=55"
          }
        }
      },
    }
</script>

<style scoped>
  .mycontainer {
    width: 100%;
    margin-top: 60px;
    background-color: beige;
  }
.banner {
  width: 100%;
  height: 400px;
  background-color: #392F59;
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
  display: inline-block;
  padding-left: 30px;
  padding-top: 15px;
}
  .info-font{
    display: inline-block;
    padding: 4px 0;
}
  .name-font {
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0.2em;
  }
</style>
