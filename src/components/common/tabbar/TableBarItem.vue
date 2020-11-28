<template>
  <ul class="tab-bar-item navbar-nav"
      :class="itemClass">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    itemClass: {
      type: String
    }
  }
};
</script>

<style scoped>
.tab-bar-item img {
  height: 7vh;
  width: 7vh;
}
</style>
