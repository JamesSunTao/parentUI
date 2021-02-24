<template>
  <button
    :class="[
      'vk-button',
      `vk-button__${type}`,
      `vk-button__${size}`,
      {
        'vk-button__plain': plain,
        'vk-button__disabled': disabled || loading,
        'vk-button__weak': weak,
        'vk-button__color': color
      },
    ]"
    :style="getStyle()"
    :disabled="disabled"
    @click.capture="onClick"
    ref="button"
  >
    <div class="vk-button__content">
      <div v-if="loading" class="vk-loading vk-button__loading"></div>
      <span v-if="loadingText" class="vk-button__text">
        {{ loadingText }}
      </span>
      <span v-else class="vk-button__text">
        <slot></slot>
      </span>
    </div>
  </button>
</template>
<script>

export default {
  name: "vbutton",
  props: {
    color: String,
    plain: Boolean,
    loading: Boolean,
    disabled: Boolean,
    weak: Boolean,
    loadingText: String,
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClick(evt) {
      if (!this.loading && !this.disabled) {
        this.$emit("click", evt);
      }
    },
    getStyle() {
      if (this.color) {
        const style = {};
        style.color = this.plain ? this.color : "white";
        if (!this.plain) {
          style.background = this.color;
        }
        if (this.color.indexOf("gradient") !== -1) {
          style.border = 0;
        } else {
          style.borderColor = this.color;
        }

        return style;
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl'
@keyframes myrotate
  0%
    -webkit-transform: rotate(0deg)
  100%
    -webkit-transform: rotate(360deg)
.vk-button
  position: relative
  display: inline-block
  box-sizing: border-box
  min-width: 72px
  height: 44px
  line-height: 1.2
  text-align: center
  border-radius: 22px
  margin: 0
  border: 0
  outline: none
  // cursor pointer
  &::before
    position: absolute
    top: 50%
    left: 50%
    width: 100%
    height: 100%
    background-color: #000000
    border-radius: inherit
    transform: translate(-50%, -50%)
    opacity: 0
    content: ' '
  &__color
    &:active::before
      opacity: 0.1;
  &__primary
    color: #ffffff
    background-color: $vk-main-color
    border: 1px solid $vk-main-color
    &:active
      background-color: $vk-button-primary-press-back-color
      border: 1px solid $vk-button-primary-press-back-color
  &__content
    display: flex
    justify-content: center
    align-items: center
  &__primary&__weak
    color: $vk-font-color-2
    background-color: $vk-button-weak-back-color
    border: 1px solid $vk-button-weak-back-color
  &__primary&__disabled
    color: $vk-button-disabled-text-color
    background-color: $vk-bgc-divider
    border: 1px solid $vk-bgc-divider
  &__plain
    color: $vk-main-color
    background-color: #fff
    border: 1px solid $vk-main-color
    &:active
      background-color: $vk-button-plain-press-back-color
      border: 1px solid $vk-button-plain-press-back-color
  &__plain&__weak
    color: $vk-font-color-2
    background-color: #fff
    border: 1px solid $vk-button-plain-weak-border-color
  &__plain&__disabled
    color: $vk-button-disabled-text-color
    background-color: #fff
    border: 1px solid $vk-bgc-divider
  &__weak
    &:active
      opacity: 0.5
  &__large
    width: 100%
    height: 44px
    font-size: $vk-font-size-md
    border-radius: 22px
  &__normal
    height: 32px
    padding: 0 15px
    font-size: $vk-font-size-sm
    border-radius: 16px
  &__small
    height: 28px
    padding: 0 8px
    font-size: $vk-font-size-xxs
    border-radius: 14px
  &__loading
    width: 20px
    height: 20px
    background: url('../img/loading.png') center / 100% 100% no-repeat
    animation: myrotate 1.5s linear infinite
    transform-origin: 50% 50%
  &__content
    margin: 0 15px
  &__loading
    margin-right: 5px
</style>