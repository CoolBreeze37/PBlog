<template>
  <div id="MainAsideBar"
       class="d-flex flex-column"
       style="height:93vh;">
    <div class="scrool">
      <div>
        <Wrapper />
      </div>
      <div>
        <Navgaitor />
      </div>
    </div>

    <footer style="height:7vh;"
            class="align-content-center mt-auto">
      <LeftFooter />
    </footer>
  </div>
</template>

<script>
import Wrapper from "components/common/asidebar/Wrapper";
import Navgaitor from "components/common/asidebar/Navgaitor";
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
.LeftFooter {
  position: fixed;
}
</style>
