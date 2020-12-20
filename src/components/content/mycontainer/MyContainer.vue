<template>
  <div id="mycontainer"
       class="row mx-auto">
    <!-- 加载样式 -->
    <div class="loader">
      <span class="loaderbar"></span>
    </div>
    <!-- 左边栏 -->
    <div class="col-sm-4 col-lg-2 p-0 mycontainer-size-7"
         :class="{ asideBarHidden: !showAsideBar, asideBarShow: showAsideBar}">
      <AsideBar />
    </div>

    <!-- 内容 -->
    <div class="col-sm-8 mycontainer-size-10"
         style="background-color:#f1f3f4;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- 右边栏 -->
    <div class="col-lg-2 px-0 rightbar"
         style="background-color: #f9f9f9;">
      <RightBar />
    </div>
  </div>

</template>

<script>
import AsideBar from "./childComponents/AsideBar"
import RightBar from "./childComponents/RightBar"

export default {
  components: {
    AsideBar,
    RightBar
  },
  props: {
    showAsideBar: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@import "~common/css/mycontainer.css";
@import "~common/css/rightbar.css";
</style>