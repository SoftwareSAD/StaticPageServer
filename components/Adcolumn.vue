<template>
  <div class="ad">
    <b-carousel
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      :interval="4000"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <a class="Big-block-size" v-for="(ad, index) in adcolumn_list" :key="index" :href="ad.href" target="_blank">
        <b-carousel-slide  class="block-size" :img-src="ad.img_src" :img-alt="ad.img_alt"
                           img-width="100%" img-height="100%"></b-carousel-slide>
      </a>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    props: {
      adcolumn_list: {
        type: Array,
        default: function() {return []},
      },
    },
    data () {
      return {
        slide: 0,
        sliding: null,

      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
  .Big-block-size {
    width: 100%;
    height: 500px;
  }
  .block-size {
    width: 100%;
    height: 500px;
  }
</style>
