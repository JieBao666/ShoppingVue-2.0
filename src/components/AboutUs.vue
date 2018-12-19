<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <table align="center">
      <tr>
        <td>
          <p>This is Web App Development Signment 2!</p>
          <p>Just click <a href ="/#">here</a> to go to</p>
          <p>the Homepage</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      messagetitle: ' About Us '
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
