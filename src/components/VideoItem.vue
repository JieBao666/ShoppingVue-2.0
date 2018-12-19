<template>
  <li class="list-group-item media" @click="onVideOSelect">
    <img class="mr3" :src="thumbnailUrl" />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl () {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    onVideOSelect () {
      this.$emit('videoSelect', this.video)
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }
  li:hover {
    background-color: #eee;
  }
  .media-body {
    margin-left: 1%;
  }
</style>
