<template>
  <div class="img-show-box row p-3">
    <div class="topbox col-sm-6 col-md-4 p-3"
         v-for="(item,index) in imgUrls"
         :key="index">
      <div class="wrap">
        <img :src="getImgUrl(index)">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      imgUrls: ['assets/img/5.jpg', 'assets/img/3.jpg', 'assets/img/6.jpg', 'assets/img/6.jpg']
    }
  },
  methods: {
    getImgUrl (index) {
      // src的值是你绝对路径下图片的地址
      return require('@/' + this.imgUrls[index])
    }
  },
}
</script>

<style scoped>
.img-show-box {
  overflow: hidden;
}
.topbox {
  max-height: 200px;
}
.img-show-box img {
  border-radius: 5px;
}
.img-show-box img {
  max-width: 100%;
  max-height: 100%;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>