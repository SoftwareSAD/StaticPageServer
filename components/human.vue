<template>
    <div class="human">
      <img class="img-type" :src="humanItem.img_src" :alt="humanItem.name" />
      <span class="name-type">{{humanItem.name}}</span>
    </div>
</template>

<script>
    export default {
      name: "human",
      props: {
          humanItem: {
            type: Object,
            default: function() {return {}}
          },
      },

    }
</script>

<style scoped>
.human {
  width: 150px;
  height: 210px;
  padding: 7px;
  position: relative;
  display: inline-block;
}
  .img-type {
    margin: 0 auto;
    width: 130px;
    height: 170px;
   }
  .name-type {
    position: absolute;
    display: inline-block;
    width: 140px;
    overflow: hidden;
    top: 180px;
    left: 75px;
    transform: translate(-50%);
    padding: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
  }
</style>
