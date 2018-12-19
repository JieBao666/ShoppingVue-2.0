<template>
  <div class="hero">
    <h8 class="vue-title">Search for videos</h8>
    <p>Shopping website AD please search 'zokcOgMx8mg'</p>
    <SearchBar @termChange="onTermChange"/>
    <div class="row">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <VideoList @videoSelect="onInitiateVideo" :videos="videos"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/SearchBar'
import VideoList from '@/components/List'
import VideoDetail from '@/components/Detail'
// Specify your API Key
const API_KEY = 'AIzaSyAy6z4Qmzja4qf8jZeh_cC3h96HDgXBFgo'
export default {
  name: 'App',
  data () {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  methods: {
    onTermChange (searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      })
        .then(response => {
          this.videos = response.data.items
        })
    },
    onInitiateVideo (video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style scoped>

</style>
