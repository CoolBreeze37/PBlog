<template>
  <div class="blogInfo text-muted"
       v-if="isShow">
    <header class="p-2"><small><strong>博客信息</strong></small></header>
    <ul class="box mx-2">
      <li class="item">
        <svg-icon icon-class="huizhang">
        </svg-icon><small> 文章数目</small>
        <div style="float:right;"><span class="huizhang">244</span></div>
      </li>
      <li class="item">
        <svg-icon icon-class="pinglun"></svg-icon>
        <small> 评论数目</small>
        <div style="float:right;"><span class="huizhang">244</span></div>
      </li>
      <li class="item">
        <svg-icon icon-class="rili"></svg-icon>
        <small> 运行天数</small>
        <div style="float:right;"><span class="huizhang">一年三个月</span></div>
      </li>
      <li class="item">
        <svg-icon icon-class="dianbo"></svg-icon>
        <small> 最后活动</small>
        <div style="float:right;"><span class="huizhang">一星期前</span></div>
      </li>
    </ul>

  </div>
</template>

<script>
import SvgIcon from '../SvgIcon.vue'
export default {
  data () {
    return {
      isShow: false
    }
  },
  components: { SvgIcon },
  watch: {
    $route (to, from) {
      this.isShow = !(to.path.indexOf("reader") >= 0)
    }
  }

}
</script>

<style scoped>
.blogInfo li {
  list-style: none;
}
.box {
  background-color: #fefefe;
  box-shadow: 0 0 2px #e5e5e5;
  border-radius: 3px;
}
.item {
  margin: 0px 8px;
  padding: 8px 0px;
}
.huizhang {
  background-color: #d7e0e3;
  color: #fbfcfc;
  font-size: 75%;
  border-radius: 25px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>