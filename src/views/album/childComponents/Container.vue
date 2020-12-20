<template>
  <div class="col px-0">
    <div class="header row">
      <div class="col">
        <Banner :title="'相册图片'"
                :msg="'美好时光~'">
          <svg-icon icon-class="link"></svg-icon>
        </Banner>
      </div>
    </div>
    <div class="box">
      <router-link to="/picture">
        <Card />
      </router-link>
      <router-link to="">
        <Card />
      </router-link>
      <router-link to="">
        <Card />
      </router-link>
      <router-link to="">
        <Card />
      </router-link>
    </div>

  </div>

</template>

<script>
import Banner from 'components/common/banner/Banner'
import Card from 'components/common/card/photocards/Card'
import { FriendCardData } from 'components/common/card/friendcards/index'
export default {

  components: {
    Banner,
    Card
  },
  methods: {
    change (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
.box {
  background-color: #f9f9f9;
  min-height: 400px;
  margin-top: 15px;
}
.header {
  background-color: #f9f9f9;
}
</style>