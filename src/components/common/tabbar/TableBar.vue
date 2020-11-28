<template>
  <!-- 顶部导航栏 
      stictk-top固定至顶端
      栅格系统row
      屏幕小于992px搜索框、音乐、右侧菜单将被右折叠菜单折叠
      屏幕小于576pxbrand将被左折叠菜单折叠
  -->
  <div id="tab-bar"
       class="row navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <!-- 左折叠菜单-->
    <div class="navbar-expand-sm"
         @click="showClick(!isShow)">
      <button class="btn border-0 navbar-toggler"
              style="height:50px"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="btn"><svg width="1em"
               height="1em"
               viewBox="0 0 16 16"
               class="bi bi-tools"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z" />
            <path fill-rule="evenodd"
                  d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
          </svg>
        </span>
      </button>
    </div>
    <!-- brand -->
    <!-- col-6 -->
    <!-- col-sm-1 -->
    <!-- col-md-2 -->
    <a href="#"
       class="navbar-brand col-5 col-sm-1 col-md-2"
       style="margin-top:-2px">
      <slot name="left"></slot>
    </a>
    <!-- 右折叠菜单 -->
    <!-- col-2 -->
    <!-- sm-11 -->
    <!-- md-10 -->
    <button class="btn col-2 col-sm-11 col-md-10 navbar-toggler text-sm-right border-0"
            style="height:50px"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="btn"><svg width="1em"
             height="1em"
             viewBox="0 0 16 16"
             class="bi bi-tools"
             fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z" />
          <path fill-rule="evenodd"
                d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
        </svg>
      </span>
    </button>
    <!-- 右插槽、右中插槽、左中插槽 -->
    <!-- col-12 -->
    <!-- sm-11 -->
    <!-- md-10 -->
    <div class="col-12 col-sm-11 col-md-10 my-auto">
      <div class="row collapse navbar-collapse justify-content-end"
           id="navbarSupportedContent">
        <!-- 屏幕大于992px每部分占四份 垂直居中 插槽水平居中（右插槽右对齐）-->
        <!-- 屏幕小于992px元素叠在一起 -->
        <div class="col-lg-4 align-self-center">
          <div class="row justify-content-center">
            <slot name="centerleft"></slot>
          </div>
        </div>
        <div class="col-lg-4 align-self-center">
          <div class="row justify-content-center">
            <slot name="centerright"></slot>
          </div>
        </div>
        <div class="col-lg-4 align-self-center">
          <div class="row justify-content-lg-end">
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
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
@import "~common/css/necessary.css";

#tab-bar {
  height: 7vh;
  margin: 0 0 0 0;
  padding: 0;

  border-radius: 3px;
}
/* .navbar{
  padding: 0;
}*/
.navbar-brand {
  margin: 0;
  padding: 0;
}

.navbarSupportedContent {
  width: 100%;
}
</style>
