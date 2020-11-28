<template>
  <div class="col">
    <div class="row py-2">
      <div class="col p-0">
        <Header :title="title"
                :msg="msg">

        </Header>
      </div>
    </div>
    <div class="dropdown-divider"></div>
    <div class="row">
      <div class="col p-0">
        <ContentItem />
      </div>
    </div>
    <div class="row">
      <div class="col p-0">
        <ContentItem />
      </div>
    </div>
    <div class="row">
      <div class="col p-0">
        <ContentItem />
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/common/header/Header'
import ContentItem from 'components/common/homecontainer/ContentItem'
export default {
  data () {
    return {
      title: "有人c",
      msg: '烟笼寒水月笼沙'
    }
  },
  components: {
    Header,
    ContentItem
  }
}
</script>

<style></style>
