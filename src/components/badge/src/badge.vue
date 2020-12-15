<template>
  <div class="vipkid-badge">
    <slot></slot>
    <transition>
      <sup
        v-show="content || content === 0 || isDot"
        v-text="content"
        class="vipkid-badge__content"
        :style="{
          right: isDot ? '5px' : rightDistance + 'px',
          top: !!topDistance ? topDistance  + 'px' : 0,
          backgroundColor: badgeBgColor,
          color: badgeColor,
        }"
        :class="[
          {
            'is-fixed': $slots.default,
            'is-dot': isDot,
          },
        ]"
      >
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Badge",

  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    rightDistance: {
      type: Number,
      default: 10,
    },
    topDistance: {
      type: Number,
      default: 0,
    },
    badgeBgColor: {
      type: String,
      default: "#FF6422",
    },
    badgeColor: {
      type: String,
      default: "#fff",
    },
  },

  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    },
  },
};
</script>

<style lang='stylus' scoped>
.vipkid-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}

.vipkid-badge__content {
  background-color: #FF6422;
  border-radius: 10px;
  color: #FFF;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #FFF;
}

.vipkid-badge__content.is-fixed {
  position: absolute;
  top: 0;
  right: 10px;
  -webkit-transform: translateY(-50%) translateX(100%);
  transform: translateY(-50%) translateX(100%);
}

.vipkid-badge__content.is-fixed.is-dot {
  right: 5px;
}

.vipkid-badge__content.is-dot {
  height: 8px;
  width: 8px;
  padding: 0;
  right: 0;
  border-radius: 50%;
}
</style>