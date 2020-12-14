<template>
  <div id="MainAsideBar"
       class="d-flex flex-column"
       style="height:93vh;background-color:#f9f9f9;position:sticky;top:7vh">
    <!-- scroll over-flow:auto-->
    <div class="scroll">
      <Wrapper />
      <Navgaitor />
    </div>
    <!-- 左侧底部 -->
    <footer style="height:7vh;display:flex"
            class="mt-auto">
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
</style>
