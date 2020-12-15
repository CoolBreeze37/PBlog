<template>
  <div class="p-0">
    <div class="header row">
      <div class="col">
        <Banner :title="title"
                :msg="msg">
        </Banner>
      </div>
    </div>
    <div class="content row">
      <router-link to="reader"
                   tag="div"
                   class="col p-1 pointer">
        <ContentItem />

      </router-link>
    </div>
  </div>
</template>

<script>
import Banner from 'components/common/banner/Banner'
import ContentItem from 'components/common/homecontainer/ContentItem'
export default {
  data () {
    return {
      title: "有人c",
      msg: '烟笼寒水月笼沙'
    }
  },
  components: {
    Banner,
    ContentItem
  }
}
</script>

<style scoped>
.header {
  background-color: #f9f9f9;
}
.content {
}
.pointer:hover {
  cursor: pointer;
}
</style>
