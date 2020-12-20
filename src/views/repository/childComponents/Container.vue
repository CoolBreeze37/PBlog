<template>
  <div class="col px-0">
    <div class="header row">
      <div class="col">
        <Banner :title="title"
                :msg="msg">
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
            <Card v-for="(item,index) in items"
                  :key="index"
                  :data="items[0]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from 'components/common/card/repositorycards/Card'
import Banner from 'components/common/banner/Banner'
import { RepositoryCardData } from 'components/common/card/repositorycards/index'
export default {
  data () {
    return {
      title: '项目展示',
      msg: 'github的一些项目展示',
      items: []
    }
  },
  components: {
    Card,
    Banner
  },
  mounted () {
    this.items.push(new RepositoryCardData({}, '你好啊', '我是xxx我我是我是我是我是是x我是xxx我是x我是xxx我是x我是xxx我是x我是xxx我是xxx我是xxx我是xxx我是xxx我是xxx我是xxx我是xxx'))
  },
}
</script>

<style scoped>
.header {
  background-color: #f9f9f9;
}
.card-img-top {
  height: 300px;
}
</style>