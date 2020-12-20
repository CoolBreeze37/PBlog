<template>
  <div class=""
       :class="itemClass">
    <slot></slot>
  </div>
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
