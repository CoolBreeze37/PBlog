<template>
  <div class="col p-0">
    <div class="header row">
      <div class="col">
        <Banner :title="title"
                :msg="msg">
        </Banner>
      </div>
    </div>
    <div class="content my-3">
      <router-link to="reader"
                   tag="div"
                   class="col p-1 pointer">
        <Card :type="getType()"></Card>
      </router-link>
      <router-link to="reader"
                   tag="div"
                   class="col p-1 pointer">
        <Card :type="getType()"></Card>
      </router-link>
      <router-link to="reader"
                   tag="div"
                   class="col p-1 pointer">
        <Card :type="getType()"></Card>
      </router-link>
    </div>
  </div>
</template>

<script>
import Banner from 'components/common/banner/Banner'
import Card from './Card'
export default {
  data () {
    return {
      title: "有人c",
      msg: '烟笼寒水月笼沙',
      types: [0, 1, 2]
    }
  },
  components: {
    Banner,
    Card,
  },
  methods: {
    getType () {
      return this.types[Math.floor(Math.random() * this.types.length) + 0]
    }
  },
}
</script>

<style scoped>
.header {
  background-color: #f9f9f9;
}
.pointer:hover {
  cursor: pointer;
}
</style>
