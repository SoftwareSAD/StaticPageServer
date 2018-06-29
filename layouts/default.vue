<template>
  <div>
    <div class="header">
      <top-nav/>
      <!--end of navbar-->
    </div>

    <nuxt class="main-contnt"/>

    <div class="footer">
      <bottom-footer/>
    </div>
  </div>
</template>

<script>
  import TopNav from '~/components/TopNav.vue'
  import BottomFooter from '~/components/BottomFooter.vue'
  export default {
    components: {
      TopNav,
      BottomFooter
    },
  }
</script>

<style>
  .header {
    flex: 0 0 auto;
  }
  .main-contnt {
    flex: 1 0 auto;
  }
  .footer {
    flex: 0 0 auto;
  }
</style>
