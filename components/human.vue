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
    display: inline-block;
    text-align: center;

    width: 140px;
    overflow: hidden;
    padding: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
  }
</style>
