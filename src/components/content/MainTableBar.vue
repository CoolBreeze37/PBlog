<template>
  <!-- 监听tablebar子组件showEvent事件 -->
  <tab-bar @showEvent="showAside">
    <!-- 顶部导航栏左 brand-->
    <tab-bar-item slot="left">
      <img class="align-self-center"
           src="~assets/img/1.jpg"
           alt="" />
    </tab-bar-item>
    <!-- 顶部导航栏左中 搜索框-->
    <tab-bar-item slot="centerleft">
      <li class="nav-item">
        <search-bar></search-bar>
      </li>
    </tab-bar-item>
    <!-- 顶部导航栏右中 音乐播放器-->
    <tab-bar-item slot="centerright">
      <li class="nav-item">
        <player></player>
      </li>
    </tab-bar-item>
    <!-- 顶部导航栏右 菜单-->
    <tab-bar-item slot="right">
      <li class="nav-item">
        <router-link to="/home"
                     class="nav-link">主页</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/home"
                     class="nav-link">主页</router-link>
      </li>
      <!-- 下拉菜单 -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"
           role="button"
           data-toggle="dropdown">
          主页
        </a>
        <!-- 下拉菜单右照齐 -->
        <div class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item"
             href="#">Action</a>
          <a class="dropdown-item"
             href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item"
             href="#">Something else here</a>
        </div>
      </li>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TableBar";
import TabBarItem from "components/common/tabbar/TableBarItem";
import SearchBar from "components/common/searchbar/SearchBar";
import Player from "components/common/player/Player";

export default {
  components: {
    TabBar,
    TabBarItem,
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

<style scoped></style>
