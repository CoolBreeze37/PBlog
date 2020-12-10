<template>
  <div id="MainAsideBar"
       class="d-flex flex-column"
       style="height:92.5vh;background-color:#f9f9f9;position:sticky;top:7vh">
    <div class="scrool">
      <div>
        <Wrapper />
      </div>
      <div>
        <Navgaitor />
      </div>
    </div>

    <footer style="height:7vh;"
            class="align-content-center mt-auto sticky-bottom">
      <LeftFooter />
    </footer>
  </div>
</template>

<script>
import Wrapper from "components/common/asidebar/Wrapper";
import Navgaitor from "components/common/asidebar/Navgaitor/Navgaitor";
import LeftFooter from "components/common/asidebar/LeftFooter";
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
