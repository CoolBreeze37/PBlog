<template>
  <div id="MainHomeContainer"
       class="row">
    <div class="col">
      <container />
    </div>

  </div>
</template>

<script>
import Container from 'components/common/homecontainer/Container'
export default {
  components: {
    Container
  }
};
</script>

<style scoped>
#MainHomeContainer {
  background-color: rgba(238, 231, 231, 0.397);
}
</style>
