<template>
  <div class="backtop">
    <button class="backtop-button"
            :class="isShow?'show':''"
            :style="getStyle()"
            data-toggle="tooltip"
            data-placement="auto"
            data-html="true"
            container="true"
            title="<small>返回顶部</small>"
            @click="backTop({},curstomerStyle.time)">
      <svg-icon :icon-class="curstomerStyle.iconClass"></svg-icon>
    </button>
  </div>
</template>

<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip({ delay: { "show": 500, "hide": 0 } })
})
import { BackTopStyle } from './index.js'
export default {
  data () {
    return {
      isShow: false,
      timer: null
    }
  },
  props: {
    curstomerStyle: {
      type: BackTopStyle,
      default: () => {
        return new BackTopStyle()
      }
    }
  }
  ,
  methods: {
    listenScrool () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isShow = scrollTop > 100
    },
    backTop (args, time) {
      const speed = Math.floor(document.documentElement.scrollTop / (time / 30))
      console.log(this.curstomerStyle.time)
      this.timer = setInterval(() => {
        document.documentElement.scrollTop = document.documentElement.scrollTop - speed
        if (document.documentElement.scrollTop <= 0) {
          document.documentElement.scrollTop = 0;
          clearInterval(this.timer)
          $('[data-toggle="tooltip"]').tooltip('hide')
        }
      }, 30)
    },
    getStyle () {
      return {
        '--background-color': this.curstomerStyle.backgroundColor,
        '--color': this.curstomerStyle.iconColor,
        '--top': this.curstomerStyle.top,
        '--right': this.curstomerStyle.right,
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.listenScrool)
  },
}
</script>

<style scoped>
.backtop {
  position: relative;
}
.backtop-button {
  position: fixed;
  visibility: hidden;
  /* 可控样式 */
  top: var(--top);
  right: var(--right);
  color: var(--color);
  background-color: var(--background-color);

  height: 30px;
  width: 40px;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  outline: none;
  line-height: 30px;
  box-shadow: 0 0 10px #e4e4e4;
}
.show {
  visibility: visible;
  transition: 0.5s;
}
</style>