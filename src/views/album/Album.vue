<template>
  <div>
    <Container />
    <router-view></router-view>
  </div>

</template>

<script>
import Container from './childComponents/Container'
export default {
  components: {
    Container
  }
}
</script>

<style>
</style>