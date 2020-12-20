<template>
  <div class="leftfooter">
    <router-link v-for="(item,index) in items"
                 @mouseover.native="changeColor(index)"
                 @mouseleave.native="colorDefault(index)"
                 :to="item.to"
                 :style="curstomerStyle.getStyle()"
                 class="item"
                 data-toggle="tooltip"
                 data-placement="top"
                 data-html="true"
                 :title="item.title">
      <div>
        <svg-icon :icon-class="item.iconClass">
        </svg-icon>
        <br>
        <small>{{item.name}}</small>
      </div>

    </router-link>
  </div>
</template>

<script>
$(function () {
  // tooltip延时显示
  $('[data-toggle="tooltip"]').tooltip({ delay: { 'show': 500, 'hidden': 0 } })
})
import { FooterStyle } from '../index'
export default {
  data () {
    return {
      items: [
        { to: '/home', title: '<small>后台管理</small>', iconClass: 'tools', name: '管理' },
        { to: '/home', title: '<small>后台管理</small>', iconClass: 'journal-bookmark-fill', name: '文章' },
        { to: '/home', title: '<small>后台管理</small>', iconClass: 'chat-fill', name: '评论' }
      ]
    }
  },
  props: {
    // 期望样式
    curstomerStyle: {
      type: FooterStyle,
      default: () => {
        return new FooterStyle()
      }
    }
  },
  methods: {
    // active
    changeColor (index) {
      let emement = document.querySelectorAll('.item')
      emement[index].style.backgroundColor = this.curstomerStyle.active
    },
    colorDefault (index) {
      let emement = document.querySelectorAll('.item')
      emement[index].style.backgroundColor = this.curstomerStyle.backgroundColor
    }
  }
};
</script>

<style scoped>
.leftfooter {
  width: 100%;
  display: flex;
  align-items: center;
}
.leftfooter a {
  text-decoration: none;
}
.item {
  flex: 1;
  display: flex;
  height: 100%;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
}
.item div {
  flex: 1;
  align-self: center;
}
</style>
