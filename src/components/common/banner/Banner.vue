<template>
  <header class="banner"
          :style="getStyle">
    <h2 class="title mt-2">
      <span class="d-inline mb-2">
        <slot>
        </slot>
      </span>
      {{title}}
    </h2>
    <h6 class="content my-auto"><small>{{msg}}</small></h6>
  </header>
</template>

<script>
import { BannerStyle } from './index'
export default {
  props: {
    title: {
      type: String,
      default: '无标题'
    },
    msg: {
      type: String,
      default: '还没有添加描述哦~'
    },
    curstomerStyle: {
      type: BannerStyle,
      default: () => {
        return new BannerStyle()
      }
    }
  },
  computed: {
    getStyle () {
      return {
        '--title-color': this.curstomerStyle.titleColor,
        '--color': this.curstomerStyle.color,
        '--background-color': this.curstomerStyle.backgroundColor
      }
    }
  }
}
</script>

<style scoped>
.banner {
  background-color: var(--background-color);
  height: 14vh;
}
.title {
  color: var(--title-color);
}
.content {
  color: var(--color);
}
</style>