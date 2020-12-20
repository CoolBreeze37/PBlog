<template>
  <!-- 监听tablebar子组件showEvent事件 -->
  <tab-bar @showEvent="showAside">
    <!-- 顶部导航栏左 brand-->

    <svg-icon slot="left"
              icon-class="logo"
              style="width: 130px;height: 34px;"></svg-icon>

    <!-- 顶部导航栏左中 搜索框-->
    <search-bar slot="centerleft"></search-bar>
    <!-- 顶部导航栏右中 音乐播放器-->

    <player slot="centerright"></player>

    <!-- 顶部导航栏右 菜单-->
    <div slot="right">
      <button class="btn px-0">
        <a href=""
           class="nav-link">
          <svg-icon icon-class="feather">
          </svg-icon>
        </a>

      </button>
      <!-- 下拉菜单 -->
      <button class="btn dropdown px-0">
        <a class="nav-link dropdown-toggle"
           role="button"
           data-toggle="dropdown">
          <svg-icon icon-class="yaoshi">
          </svg-icon>
        </a>
        <!-- 下拉菜单右照齐 -->
        <div class="dropdown-menu dropdown-menu-left">
          <a class="dropdown-item"
             href="#">Action</a>
          <a class="dropdown-item"
             href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item"
             href="#">Something else here</a>
        </div>
      </button>
    </div>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TableBar";
import SearchBar from "components/common/searchbar/SearchBar";
import Player from "components/common/player/Player";

export default {
  components: {
    TabBar,
    SearchBar,
    Player
  },
  methods: {
    // 显示侧边栏
    showAside (args) {
      // 自定义showEvent事件由App组件捕获
      this.$emit("showEvent", args);
    }
  }
};
</script>

<style></style>
