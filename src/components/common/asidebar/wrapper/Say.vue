<template>
  <div class="say">
    <div class="sanjiao_up"
         :style="getStyleOfSA()"></div>
    <div class="shortmessage"
         :style="curstomerStyle.getStyle()">
      <p>
        <span>{{ word }}</span>
      </p>
      <!-- 进度条 -->
      <div class="progress"
           tabindex="0"
           data-toggle="popover"
           data-trigger="focus"
           data-placement="top"
           :data-content="'时间已经过去了'+percent"
           style="height:7px;cursor:pointer;">
        <div class="progress-bar"
             role="progressbar"
             :style="getStyleOfPr()">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
});
import { SayStyle } from '../index'
export default {
  data () {
    return {
      percent: '20%'
    }
  },
  props: {
    word: {
      type: String,
      default: '你好啊'
    },
    // 期望样式
    curstomerStyle: {
      type: SayStyle,
      default: () => {
        return new SayStyle()
      }
    }
  },
  methods: {
    // 获取小三角期望样式
    getStyleOfSA () {
      return {
        'border-bottom-color': this.curstomerStyle.backgroundColor
      }
    },
    getStyleOfPr () {
      return {
        'width': this.percent,
        'background-color': this.curstomerStyle.bgProgress,
      }
    }
  },
  mounted () {
    let now = new Date();
    this.percent = parseInt(now.getHours() / 24 * 100).toString() + '%'
    setInterval(() => { this.percent = parseInt(now.getHours() / 24 * 100).toString() + '%' },
      1000 * 60 * 30)
  },
}
</script>

<style scoped>
.say {
  z-index: 100;
  width: 100%;
  position: absolute;
}
/* 小三角 */
.sanjiao_up {
  width: 0;
  height: 0;
  border: 10px solid transparent;

  margin: 0 auto;
}
.shortmessage {
  width: 85%;
  padding: 10px 0;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
}
.progress {
  outline: none !important;
}
</style>