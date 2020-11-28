<template>
  <div id="app"
       class="container-lg position-relative p-0">

    <!-- 导航栏 -->
    <main-tab-bar @showEvent="showAside"></main-tab-bar>
    <div class="row mx-auto scrool scrool-customer"
         :class="{ asideBarHidden: !isShow, asideBarShow: isShow }">

      <!-- 左边栏 -->
      <div class="col-sm-4 col-md-4 col-lg-2 p-0 mycontainer-size-7 position-sticky"
           style="top:0px">
        <main-aside-bar />
      </div>

      <!-- 内容 -->
      <div id="mycontainer"
           class="col-sm-8 mycontainer-size-10"
           style="height:93vh;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>

      <!-- 右边栏 -->
      <div class="col-lg-2 rightBar"
           style="height:93vh;background-color:yellow">
      </div>
    </div>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTableBar";
import MainAsideBar from "components/content/MainAsideBar";
export default {
  name: "App",
  data () {
    return {
      isShow: false
    };
  },
  components: {
    MainTabBar,
    MainAsideBar,
  },
  methods: {
    showAside (args) {
      console.log(args);
      this.isShow = args;
    }
  }
};
</script>

<style coped>
@import "common/css/necessary.css";

.container-lg {
  padding: 0;
  box-shadow: 0 0 10px 0 rgb(170, 184, 169);
}
body {
  height: 100vh;
}
#app {
  height: 100%;
  overflow-x: hidden;
}
</style>
