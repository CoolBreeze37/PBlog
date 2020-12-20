<template>
  <div id="app"
       class="container-lg position-relative p-0"
       v-cloak>

    <!-- 导航栏 -->
    <!-- 监听tablebar发出的显示事件 -->
    <TableBar @showEvent="showAside"></TableBar>
    <!-- 内容 -->
    <!-- 显示状态传入MyContainer -->
    <MyContainer :showAsideBar="showAsideBar"></MyContainer>
    <!-- 返回顶部 -->
    <BackTop />
  </div>
</template>

<script>
import TableBar from "components/content/tablebar/TableBar"
import BackTop from 'components/common/backtop/BackTop'
import MyContainer from 'components/content/mycontainer/MyContainer'
export default {
  name: "App",
  data () {
    return {
      showAsideBar: false
    };
  },
  components: {
    TableBar,
    BackTop,
    MyContainer
  },
  methods: {
    // 显示侧边栏
    showAside (args) {
      this.showAsideBar = args;
    }
  }
};
</script>

<style scoped>
@import "~common/css/necessary.css";

.container-lg {
  padding: 0;
  box-shadow: 0 0 10px 0 #e4e4e4;
}
[v-cloak] {
  display: none;
}
</style>
