<template>
  <div id="asidebar"
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
@import "~common/css/asidebar.css";
</style>