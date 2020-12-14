<template>
  <div class="title"
       :style="getStyle()">
    <div class="head">
      <b>{{name}}
        <small>
          <svg-icon icon-class="bi-caret-down-fill">
          </svg-icon>
        </small>
      </b>
    </div>
    <span>
      <small>{{word}}</small>
    </span>
  </div>
</template>

<script>
import { TitleStyle } from '../index'
export default {
  props: {
    name: {
      type: String,
      default: '你的名字'
    },
    word: {
      type: String,
      default: '一句简短的话'
    },
    // 期望样式
    curstomerStyle: {
      type: TitleStyle,
      default: () => {
        return new TitleStyle()
      }
    }
  },
  methods: {
    // 获取期望样式
    getStyle () {
      return {
        'color': this.curstomerStyle.color,
        'background-color': this.curstomerStyle.backgroundColor
      }
    }
  },
}
</script>

<style scoped>
.title {
  cursor: pointer;
}
.title {
  text-align: center;
}
</style>