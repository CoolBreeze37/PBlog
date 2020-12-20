<template>
  <div class="picture col px-0">
    <div class="header row">
      <div class="col">
        <Banner>
        </Banner>
      </div>
    </div>
    <div class="box">
      <ImgShowBox></ImgShowBox>
      <div style="height:100px;margin-top:30px;"></div>
      <div class="surport-author text-center">
        <div class="btn btn-danger px-3 mb-3"
             data-toggle="modal"
             data-target="#PictureModal">
          <svg-icon icon-class="wallet"></svg-icon>
          赞赏
        </div>
        <p><small>如果觉得我的文章对你有用，请随意赞赏!</small></p>
        <!-- Modal -->
        <PictureModal id="PictureModal"
                      :isShow="isShow"></PictureModal>
      </div>
    </div>
  </div>
</template>

<script>

import ImgShowBox from 'components/common/card/photocards/ImgShowBox'
import Banner from 'components/common/banner/Banner'
import PictureModal from './PictureModal'
export default {
  data () {
    return {
      isShow: true,
      img: null
    }
  },
  components: {
    Banner,
    PictureModal,
    ImgShowBox
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
.surport-author {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
}

p {
  margin-bottom: 0px;
}
</style>