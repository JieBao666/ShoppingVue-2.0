<template>
  <div class="hero" v-if="user">
    <h1>Hello!</h1>
    <img :src="user.photoURL" width="100">
    <h3>{{user.displayName}}</h3>
    <p>{{user.email}}</p>
    <button @click="logOut">Log out</button>
    <br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br>
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  name: 'auth-success',
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  },
  methods: {
    logOut () {
      auth.logout()
    }
  }
}
</script>

<style scoped>
  img {
    border-radius: 50px;
  }

  h3 {
    margin-bottom: 50px;
  }

  p {
    margin-top: 0px;
  }
</style>
