<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/mevnnav.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Shopping Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/goods"><i class="fa fa-list" style="padding: 5px"> Manage Goods</i></b-nav-item>
          <b-nav-item to="/good"><i class="fa fa-money" style="padding: 5px"> Add Good</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
          <b-nav-item to="/video"><i class="fa fa-youtube-play" style="padding: 5px"> Video</i></b-nav-item>
          <b-nav-item to="/customers"><i class="fa fa-list" style="padding: 5px"> Manage Customers</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/auth"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item>
          <div v-if="user">
          <img :src="user.photoURL" width="30">
          <h8>{{user.displayName}}</h8>
         </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
  background: url("./assets/timg-2.jpeg") repeat center top ;
  background-size: 120%;
}
.VueTables__sortable {
  cursor: pointer;
}
</style>
