<template>
  <nav id="tab-bar"
       class="row navbar navbar-expand-sm">
    <!-- 左折叠菜单-->

    <button class="btn navbar-toggler navbar-expand-sm"
            @click="showClick(!isShow)">
      <span class="navbar-toggler ">
        <svg-icon icon-class="menu"></svg-icon>
      </span>
    </button>

    <a href="#"
       id="brand"
       class="navbar-brand pl-sm-3">
      <slot name="left"></slot>
    </a>

    <button class="btn navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarSupportedContent">
      <span class="btn">
        <svg-icon icon-class="search"></svg-icon>
      </span>
    </button>

    <div class="collapse navbar-collapse"
         id="navbarContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link mx-auto"
             href="#">
            <slot name="centerleft"></slot>
          </a>
        </li>
      </ul>
      <slot name="right"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TabBar",
  data () {
    return {
      isShow: false
    };
  },

  methods: {
    // 通过点击事件展开左侧边栏
    showClick (isShow) {
      this.isShow = isShow;
      // 自定义事件由MainTableBar父组件捕获
      this.$emit("showEvent", isShow);
    }
  }
};
</script>

<style scoped>
@import "~common/css/tablebar.css";
#tab-bar {
  background-color: #f9f9f9;
  position: fixed;
  top: 0;
  z-index: 1030;
  margin: 0 auto;
  padding: 0;
  box-shadow: 1px 1px 5px #e5e5e5;
}

.nav-link {
  width: 90%;
}
</style>
