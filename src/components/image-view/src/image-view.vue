<template >
  <img
    v-if="!loading && !error && src && download && !showLoading && !showError"
    :src="src"
    :alt="alt"
    class="vk-image-view-img"
    :style="style"
  />
  <div
    v-else
    class="vk-image-view-img-div"
    :style="style"
  ><slot name="loading" v-if="loading || showLoading"><div class="vk-image-view-loading"></div></slot>
    <slot name="error"  v-if="error || showError"><div class="vk-image-view-error">加载错误</div></slot>
  </div>
</template>
<script>
import Emitter from "../../../mixins/emitter.js";
import { addUnit } from "../../../utils/_format.js";

const ImageFit = ["contain", "cover", "fill", "none"];

export default {
  name: "image-view",
  mixins: [Emitter],
  props: {
    src: String,
    alt: String,
    fit: {
      type: String,
      default: "fill",
    },
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    download: {
      //是否支持长按保存
      type: Boolean,
      default: true,
    },
    showError: {
      type: Boolean,
      default: false,
    },
    showLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: false,
      loading: false,
      imgWidth: 0,
      imgHeight: 0,
    };
  },
  watch: {
    src(val) {
      this.renderImage(val);
    },
  },
  computed: {
    style() {
      let props = {};

      if (this.width) {
        props.width = addUnit(this.width);
      }
      if (this.height) {
        props.height = addUnit(this.height);
      }
      if (this.radius) {
        props.overflow = "hidden";
        props.borderRadius = addUnit(this.radius);
      }
      if (this.download) {
        props.objectFit = this.fit;
      } else {
        this.src && (props.backgroundImage = `url(${this.src})`);
        if (this.fit === "fill") {
          props.backgroundSize = " 100% 100%";
        }
        if (this.fit === "none") {
          props.backgroundSize = "auto";
        }
        if (this.fit === "cover" || this.fit === "contain") {
          props.backgroundSize = this.fit;
        }
        //未设置宽高，则按原始大小显示图片
        if (!props.width && !props.height) {
          props.width = addUnit(this.imgWidth);
          props.height = addUnit(this.imgHeight);
        }
        //只设置宽或高，按原图等比缩放
        if (props.width && !props.height) {
          props.height = addUnit((this.imgHeight / this.imgWidth) * this.width);
        }
        if (props.height && !props.width) {
          props.width = addUnit((this.imgWidth / this.imgHeight) * this.height);
        }
      }
      return props;
    },
  },
  methods: {
    renderImage(src) {
      if(this.showLoading || this.showError){
        return
      }

      this.error = false;
      this.loading = false;
      if (!src) {
        this.error = true;
        this.$emit("error");
        return
      }

      this.loading = true;
      let image = new Image();
      image.onload = () => {
        this.loading = false;
        this.imgWidth = image.width;
        this.imgHeight = image.height;
        this.$emit("load", image);
      };
      image.onerror = () => {
        this.loading = false;
        this.error = true;
        this.$emit("error");
      };
      image.src = src;
    },
  },
  mounted() {
    this.renderImage(this.src);
  },
};
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl';

.vk-image-view-img-div
  position: relative
  display: inline-block
  background-position: center
  background-repeat: no-repeat
  .vk-image-view-loading
    width 32px
    height 32px
    animation: rotation 1s steps(1,end) infinite
    position absolute
    left 50%
    margin-left -16px
    top 50%
    margin-top -16px
    background-image: url(../img/loading-icon.png)
    background-size: 100% 100%

  .vk-image-view-error
    display: flex
    height: 100%
    justify-content: center
    align-items: center
    font-size: 12px
    color: #666

@keyframes rotation {
  0%      {transform: rotateZ(0deg)}
  8.333%  {transform: rotateZ(30deg)}
  16.666% {transform: rotateZ(60deg)}
  25%     {transform: rotateZ(90deg)}
  33.333% {transform: rotateZ(120deg)}
  41.666% {transform: rotateZ(150deg)}
  50%     {transform: rotateZ(180deg)}
  58.333% {transform: rotateZ(210deg)}
  66.666% {transform: rotateZ(240deg)}
  75%     {transform: rotateZ(270deg)}
  83.333% {transform: rotateZ(300deg)}
  91.666% {transform: rotateZ(330deg)}
  100%    {transform: rotateZ(360deg)}
}
</style>