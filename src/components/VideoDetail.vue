<template>
  <div class="videoDetail">
    <h2> {{ video.name }} </h2>
    <div class="video-wrapper">
      <video-player class="vjs-big-play-centered"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @ended="onPlayerEnded($event)"
                    @loadeddata="onPlayerLoadeddata($event)"
                    @waiting="onPlayerWaiting($event)"
                    @playing="onPlayerPlaying($event)"
                    @timeupdate="onPlayerTimeupdate($event)"
                    @canplay="onPlayerCanplay($event)"
                    @canplaythrough="onPlayerCanplaythrough($event)"
                    @ready="playerReadied"
                    @statechanged="playerStateChanged($event)">
      </video-player>
    </div>
    <div class="video-info">
      <div>播放量：{{ video.playAmount }}</div>
      <div>简介：{{ video.introduction}}</div>
    </div>
    <comment v-bind:videoId="videoId"></comment>
  </div>
</template>

<script>
  import base from '../mixins/base';
  import comment from '../components/Comment.vue';
  // videojs
  import videojs from 'video.js';
  window.videojs = videojs;

  require('videojs-contrib-hls/dist/videojs-contrib-hls.js');
  // hls plugin for videojs6

  export default {
    name: 'videoDetail',
    mixins: [base],
    components: {
      comment
    },
    data() {
      return {
        videoId: 0,
        video: {},
        playerOptions: {
          height: '600',
          width: '900',
          autoplay: false,
          loop: false,
          preload: 'auto',
          muted: true,
//          language: 'zh',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
//            type: '',
//            type: "application/x-mpegURL",
            type: '',
            // mp4
            src: '',
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: '',
        }
      }
    },
    computed: {
      player() {
//        return this.$refs.videoPlayer.player
      }
    },
    created() {
      // 取到路由带过来的参数
      this.videoId = this.$route.params.videoId;
      console.log(this.videoId);
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.getVideoById()
    },
    watch: {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    },
    methods: {
      getVideoById() {
        let param = {
          videoId: this.videoId
        };
        this.request({act: 'getVideoById', method: 'post', body: param}).then(res => {
          if (res.code == 0) {
            this.video = res.data;
            this.playerOptions.sources[0].src = this.video.vedioUrl;
            this.playerOptions.sources[0].type = this.video.format;
            this.playerOptions.poster = this.video.vedioImg
          } else {
            this.$message({message: res.msg, type: 'error'})
          }
        }, response => {
          this.$message({message: '错误', type: 'error'})
        });
      },

      // listen event
      onPlayerPlay(player) {
//         console.log('player play!', player)
      },
      onPlayerPause(player) {
//         console.log('player pause!', player)
      },
      onPlayerEnded(player) {
//         console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
//         console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
//         console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
//         console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
//         console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
//         console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
//         console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
//         console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
//        console.log('example player 1 readied', player);
//        player.currentTime(10)
//         console.log('example 01: the player is readied', player)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
  .video-wrapper {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center; /* 让子元素水平居中 */
    /*align-items: center; !* 让子元素垂直居中 *!*/
  }
  .video-info {
    margin: 30px;
  }
</style>
