<template>
  <div class="col px-0">
    <div class="row pt-0">
      <div class="col"
           style="background-color:#f9f9f9;">
        <Header :title="title"
                :msg="msg">

        </Header>
      </div>
    </div>
    <div class="dropdown-divider"></div>
    <div class="row">
      <router-link to="reader"
                   tag="div"
                   class="col p-1 pointer">
        <ContentItem />

      </router-link>
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

<style>
.pointer:hover {
  cursor: pointer;
}
</style>
