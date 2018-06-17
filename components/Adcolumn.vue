<template>
  <div class="ad">
    <b-carousel
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                :interval="4000"
                img-width="1024"
                img-height="450"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <a v-for="(ad, index) in adcolumn_list" :key="index" :href="ad.href" target="_blank">
        <b-carousel-slide  :img-src="ad.imgSrc" :img-alt="ad.alt"></b-carousel-slide>
      </a>


    </b-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null,
        adcolumn_list: [
          {alt: "First Slide", imgSrc:"https://picsum.photos/1024/480/?image=55", href:"https://picsum.photos/1024/480/?image=55"},
          {alt: "Second Slide", imgSrc:"https://picsum.photos/1024/480/?image=58", href:"https://picsum.photos/1024/480/?image=58"},
          {alt: "Third Slide", imgSrc:"https://picsum.photos/1024/480/?image=54", href:"https://picsum.photos/1024/480/?image=54"},
          {alt: "Forth Slide", imgSrc:"https://picsum.photos/1024/480/?image=52", href:"https://picsum.photos/1024/480/?image=52"},

        ],
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
</style>
