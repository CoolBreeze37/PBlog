<template>
  <div class="blogInfo"
       v-if="isShow"
       :style="getStyle">
    <header class="header p-3 mb-1"><small><strong>博客信息</strong></small></header>
    <ul class="box mx-2">
      <li class="item"
          v-for="(item,index) in items">
        <svg-icon :icon-class="item.iconClass">
        </svg-icon><small>{{item.text}}</small>
        <div style="float:right;"><span class="badge">{{blogInfo[index][item.dataFrom]}}</span></div>
      </li>
    </ul>

  </div>
</template>

<script>
import { BlogInfoStyle } from '../index'
export default {
  data () {
    return {
      isShow: false,
      items: [{ text: '文章数目', iconClass: 'huizhang', dataFrom: 'articleCount' },
      { text: '评论数目', iconClass: 'pinglun', dataFrom: 'commentsCount' },
      { text: '运行天数', iconClass: 'rili', dataFrom: 'runTime' },
      { text: '最后活动', iconClass: 'dianbo', dataFrom: 'lastActive' }]
      ,
      blogInfo: [
        { articleCount: 244, },
        { commentsCount: 265 },
        { runTime: '一年三个月' },
        { lastActive: '一星期前' }
      ]
    }
  },
  props: {
    curstomerStyle: {
      type: BlogInfoStyle,
      default: () => {
        return new BlogInfoStyle()
      }
    }
  },
  watch: {
    $route (to, from) {
      this.isShow = !(to.path.indexOf("reader") >= 0)
    }
  },
  computed: {
    getStyle () {
      return {

        '--head-color': this.curstomerStyle.headColor,
        '--head-background-color': this.curstomerStyle.headBackgroundColor,
        '--color': this.curstomerStyle.color,
        '--background-color': this.curstomerStyle.backgroundColor,
        '--badge-color': this.curstomerStyle.badgeColor,
        '--badge-backgrounColor': this.curstomerStyle.badgeBackGroundColor,

      }
    }
  }

}
</script>

<style scoped>
.blogInfo li {
  list-style: none;
}
.header {
  color: var(--head-color);
  background-color: var(--head-background-color);
  line-height: 100%;
}
.box {
  color: var(--color);
  background-color: var(--background-color);
  box-shadow: 0 0 2px #e5e5e5;
  border-radius: 3px;
}
.item {
  margin: 0px 8px;
  padding: 8px 0px;
}
.badge {
  background-color: var(--badge-backgrounColor);
  color: var(--badge-color);
  font-size: 75%;
  border-radius: 25px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>