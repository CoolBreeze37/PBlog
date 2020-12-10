<template>
  <div class="text-muted h-100">
    <RightTop></RightTop>
    <BlogInfo></BlogInfo>
    <Content></Content>
  </div>
</template>

<script>
import RightTop from 'components/common/rightbar/RightTop'
import BlogInfo from 'components/common/rightbar/BlogInfo.vue'
import Content from 'components/common/rightbar/Content.vue'
export default {
  components: {
    RightTop,
    BlogInfo,
    Content
  }
}
</script>

<style>
</style>