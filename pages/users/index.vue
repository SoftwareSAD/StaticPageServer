<template>
  <section class="container">
    <!--<img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />-->
    <h1 class="title">
      Welcome
    </h1>
    <div v-if="$store.state.authUser">
      <h3>Now you're logged in</h3>
      <ul class="users">
        <li v-for="(user, index) in users" :key="index" class="user">
          <nuxt-link :to="{ params: { id: index }, path : '/users/'+ index}" target="_blank">
          {{ user.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <h3>Sorry. You're not logged in.</h3>
    </div>

  </section>
</template>

<script>

import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },

  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 150px;
    height: 400px;
    color: white;
  }

.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
