<template>
  <NavgaitorItem :group="group">
  </NavgaitorItem>
</template>

<script>
import NavgaitorItem from './NavgaitorItem'
export default {
  components: {
    NavgaitorItem
  },
  props: {
    group: {
      type: Object
    }
  }
}
</script>

<style>
</style>