<template>
  <div id="app"
       class="container-lg position-relative p-0" v-cloak>

    <!-- 导航栏 -->
    <main-tab-bar @showEvent="showAside"></main-tab-bar>
    <div id="mycontainer"
         class="row mx-auto"
         :class="{ asideBarHidden: !isShow, asideBarShow: isShow }">

      <!-- 左边栏 -->
      <div class="col-sm-4 col-md-4 col-lg-2 p-0 mycontainer-size-7">
        <main-aside-bar />
      </div>

      <!-- 内容 -->
      <div class="col-sm-8 mycontainer-size-10"
           style="background-color:#f1f3f4;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>

      <!-- 右边栏 -->
      <div class="col-lg-2 px-0 rightBar"
           style="background-color: #f9f9f9;">
        <main-right-bar></main-right-bar>
      </div>
    </div>
    <back-top />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTableBar";
import MainAsideBar from "components/content/MainAsideBar";
import MainRightBar from "components/content/MainRightBar"
import BackTop from 'components/common/backtop/BackTop.vue';
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
    MainRightBar,
    BackTop
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
  box-shadow: 0 0 10px 0 #e4e4e4;
}
body {
  overflow-x: hidden;
  overflow-y: auto;
}
@media screen and (min-width: 576px) {
  /* 滚动条整体样式 */
  body::-webkit-scrollbar {
    width: 10px;
    height: 1px;
  }

  body::-webkit-scrollbar-thumb {
    /* 滚动条里小方块 */
    border-radius: 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }

  body::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
  [v-cloak]{
    display: none;
  }
}
</style>
