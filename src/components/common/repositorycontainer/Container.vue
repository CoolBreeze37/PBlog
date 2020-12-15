<template>
  <div class="col px-0">
    <div class="row">
      <div class="col"
           style="background-color:#f9f9f9;">
        <Banner :title="title"
                :msg="msg">
          <svg-icon icon-class="github2"></svg-icon>
        </Banner>
      </div>
    </div>
    <div class="row">
      <div class="col p-3">
        <div class="card">
          <img src="~assets/img/6.jpg"
               class="card-img-top"
               alt="...">
          <div class="m-3"></div>
          <div class="row px-3">
            <ContentItem :bg="'text-white bg-success'" />
            <ContentItem :bg="'text-white bg-info'" />
            <ContentItem :bg="'text-white bg-primary'" />
            <ContentItem :bg="'text-white bg-danger'" />
            <ContentItem :bg="'text-white bg-dark'" />
            <ContentItem :bg="'text-white bg-dark'" />
            <ContentItem :bg="'text-white bg-dark'" />
            <ContentItem :bg="'text-white bg-dark'" />
            <ContentItem :bg="'text-white bg-dark'" />
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ContentItem from 'components/common/repositorycontainer/ContentItem'
import Banner from 'components/common/banner/Banner'
export default {
  data () {
    return {
      title: '项目展示',
      msg: 'github的一些项目展示'
    }
  },
  components: {
    ContentItem,
    Banner
  },
}
</script>

<style scoped>
</style>