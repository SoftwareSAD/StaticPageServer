<template>
    <div class="mycontainer">
      <!--电影导栏-->
      <div class="banner">
        <div class="info">
          <img id="movie-img" :src="film.img_src" :alt="film.img_alt" />
          <div id="movie-info">
            <span class="info-font name-font">{{film.film_name}}</span><br />
            <span class="info-font" v-for="(tag, index) in film.tags" v-if="index+1 < film.tags.length" :key="index">{{tag}} , </span>
            <span class="info-font" v-for="(tag, index) in film.tags" v-if="index+1 == film.tags.length" :key="index">{{tag}}</span><br />
            <span class="info-font">{{film.country}} / {{film.time}}分钟</span><br />
            <span class="info-font">{{film.online_time}}上映</span><br />
            <button class="ticket-button">购票</button>
            <div class="movie-review">
              <span class="some-title">用户评分</span><br />
              <span class="some-result">{{film.score}}</span><br />
              <span class="some-title">票房</span><br />
              <span class="some-result">{{film.box_office}}万</span><br />
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
              <human v-for="(item, index) in film.director" :key="index" :humanItem="item"></human>
              <br /><span  class="info-header">部分演员</span><br />
              <human v-for="(item, index) in film.actors" :key="index" :humanItem="item"></human>
            </b-tab>
          </b-tabs>
        </div>
      </div>


    </div>
</template>

<script>
  import human from '~/components/human.vue'
    export default {
      components: { human },
      head() {
        return {'title': '电影详情'}
      },
      data () {
        return {
          film: {
            film_name: "头号玩家",
            country: "美国",
            director: [
              {
                name: "胡安·安东尼奥·巴亚纳",
                img_src: require("~/assets/img/human/胡安·安东尼奥·巴亚纳.jpg"),
              },
            ],
            actors: [
              {
                name: "克里斯·帕拉特",
                img_src: require("~/assets/img/human/克里斯·帕拉特.jpg"),
              },
              {
                name: "布莱斯·达拉斯·霍华德",
                img_src: require("~/assets/img/human/布莱斯·达拉斯·霍华德.jpg"),
              },
              {
                name: "拉菲·斯波",
                img_src: require("~/assets/img/human/拉菲·斯波.jpg"),
              },

            ],
            time: "150",
            online_time: "2018-06-08",
            score: "8.2",
            box_office: "8953",
            img_src: require("~/assets/img/film/best_player.jpg"),
            img_alt: "头号玩家",
            tags: ["动作", "冒险", "科幻"],
            introduction: "侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有三年。如今，纳布拉尔岛已经被人类遗弃，岛上幸存的恐龙们在丛林中自给自足。当岛上的休眠火山开始活跃以后，欧文（克里斯·帕拉特 饰）与克莱尔（布莱丝·达拉斯·霍华德 饰）发起了一场运动，想要保护岛上幸存的恐龙们免于灭绝。欧文一心想要找到自己依然失踪在野外的迅猛龙首领布鲁，克莱尔如今也尊重起这些生物，以保护它们为己任。两人在熔岩开始喷发时来到了危险的小岛，他们的冒险也揭开了一个可能让地球回到史前时代般混乱秩序的阴谋。",

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
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0.2em;
  }
  .ticket-button {
    color: white;
    margin-top: 80px;
    border: none;
    background-color: #d10000;
    width: 160px;
    height: 40px;
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
