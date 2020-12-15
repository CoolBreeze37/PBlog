<template>
  <div id="aside-bar"
       class="d-flex flex-column">
    <!-- scroll over-flow:auto-->
    <div class="scroll">
      <Wrapper />
      <Navgaitor />
    </div>
    <!-- 左侧底部 -->
    <footer class="footer">
      <LeftFooter />
    </footer>
  </div>
</template>

<script>
import Wrapper from "components/common/asidebar/wrapper/Wrapper";
import Navgaitor from "components/common/asidebar/navgaitor/Navgaitor";
import LeftFooter from "components/common/asidebar/leftfooter/LeftFooter";
export default {
  components: {
    Wrapper,
    Navgaitor,
    LeftFooter
  }
};
</script>

<style scoped>
#aside-bar {
  height: 93vh;
  top: 7vh;
  background-color: #f9f9f9;
  position: sticky;
}
.footer {
  height: 7vh;
  display: flex;
  margin-top: auto;
}
</style>
