<template>
  <NavgaitorItem :group="group"
                 :curstomerStyle="curstomerStyle">
  </NavgaitorItem>
</template>

<script>
import { NavStyle } from '../index'
import NavgaitorItem from './NavgaitorItem'
export default {
  components: {
    NavgaitorItem
  },
  props: {
    group: {
      type: Object
    },
    // 期望样式
    curstomerStyle: {
      type: NavStyle,
      default: () => {
        return new NavStyle()
      }
    }
  }
}
</script>

<style>
</style>