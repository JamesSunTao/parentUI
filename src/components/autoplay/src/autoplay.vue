<template>
  <div class="vipkid-autoplay">
    <div
      class="vipkid-play"
      @click="autoPlay"
      :style="{ width: playWidth + '%' }"
    >
      <span class="vipkid-play-icon" :class="{ 'vipkid-playing-icon': isPlaying }"> </span>
      <span class="vipkid-play-duration"> {{ duration }}'' </span>
    </div>
    <audio :src="audioUrl" @canplay="getDuration" @timeupdate="updateTime" ref="au"></audio>
  </div>
</template>

<script>
export default {
  name: "Autoplay",

  props: {
    audioUrl: {
      type: String,
      default:
        "https://media.vipkidstatic.com/prt/video/tools/upload/J6XPrrQm5zg9K.mp3",
    },
  },
  data() {
    return {
      duration: 0,
      isPlaying:false
    };
  },
  computed: {
    playWidth: function () {
      return (this.duration / 60) * 100;
    },
  },
  methods: {
    getDuration() {
      this.duration = Math.ceil(this.$refs.au.duration);
      if(this.$refs.au.paused){
        this.isPlaying = false 
      }
    },
    updateTime(e) {
      this.isPlaying = e.target.currentTime !== this.$refs.au.duration
    },
    autoPlay() {
      if(!this.$refs.au.paused){
        this.$refs.au.pause()
        this.isPlaying = false 
      } else {
        this.pauseAll()
        this.$refs.au.currentTime = 0;
        this.$refs.au.play();
        this.isPlaying = true

      }
    },
    pauseAll() {
      let audios = document.getElementsByTagName("audio");
      var self = this;
      [].forEach.call(audios, function (i) {
          i !== self && i.pause();
      })
    }
  },
};
</script>

<style lang='stylus' scoped>
.vipkid-autoplay {
  .vipkid-play {
    min-width: 80px;
    width: 80px;
    height: 34px;
    background: #cef2eb;
    border: 0.5px solid #00d1a9;
    border-radius: 17px;
    text-align: left;
    position: relative;
    padding: 8px 0;
    box-sizing: border-box;

    .vipkid-play-icon {
      display: inline-block;
      width: 11px;
      height: 16px;
      background-image: url('./play.png');
      background-size: 100% 100%;
      margin-left: 16px;
    }
    .vipkid-playing-icon {
      transform:rotate(180deg);
      background-image: url('./trumpet.gif');
    }
    .vipkid-play-duration {
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      color: #00d1a9;
      vertical-align: top;
      margin: 1px 0 0 2px;
    }
  }
}
</style>