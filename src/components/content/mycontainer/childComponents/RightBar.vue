<template>
  <div class="h-100">
    <RightTop></RightTop>
    <BlogInfo></BlogInfo>
    <Content v-if="true"></Content>
  </div>
</template>

<script>
import RightTop from 'components/common/rightbar/righttop/RightTop'
import BlogInfo from 'components/common/rightbar/bloginfo/BlogInfo'
import Content from 'components/common/rightbar/content/Content'
export default {
  components: {
    RightTop,
    BlogInfo,
    Content
  }
}
</script>

<style scoped>
</style>