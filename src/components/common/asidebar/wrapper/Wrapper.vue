<template>
  <div class="wrapper">
    <div class="imgbox">
      <img :src="getUrl()"
           alt="头像" />
    </div>
    <Title @click.native="showMessage()"
           :name="wrapper.title.name"
           :word="wrapper.title.word"
           :curstomerStyle="wrapper.title.curstomerStyle"></Title>
    <Say :class="{rightmove:isActive,rightmovecancle:!isActive}"
         :word="wrapper.say.word"
         :curstomerStyle="wrapper.say.curstomerStyle">
    </Say>
  </div>
</template>
<script>

import Title from './Title'
import Say from './Say'
import { SayStyle, TitleStyle } from '..';
export default {
  data () {
    return {
      wrapper: {
        headUrl: "assets/img/1.jpg",
        // 组件say所需参数
        say: {
          word: "早上好，永远年轻，永远热泪盈眶",
          curstomerStyle: new SayStyle()
        },
        // 组件title所需参数
        title: {
          name: "如山间清风",
          word: "你在哪里啊",
          curstomerStyle: new TitleStyle()
        },
      },
      isActive: true
    }
  },
  components: {
    Title,
    Say
  },
  methods: {
    showMessage () {
      this.isActive = !this.isActive;
    },
    getUrl () {
      return require('@/' + this.wrapper.headUrl)
    }
  }

};
</script>

<style>
.imgbox {
  text-align: center;
  margin: 10px;
}
.imgbox img {
  width: 96px;
  border-radius: 50%;
}
/* 右移隐藏 */
.rightmove {
  opacity: 0;
  transform: translateX(100%);
  visibility: hidden;
}
/* 左移显现 */
.rightmovecancle {
  visibility: visible;
  transform: translateX(0);
  transition: 1s;
  opacity: 1;
}
</style>
