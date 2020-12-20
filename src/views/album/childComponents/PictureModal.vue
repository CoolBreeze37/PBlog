<template>
  <Modal>
    <h5 class="modal-title"
        slot="header">打赏作者</h5>

    <div class="col"
         slot="body">
      <img v-show="isShow"
           src="~assets/img/surport/zhifubao.jpg"
           alt="">
      <img class="hide"
           v-show="!isShow"
           src="~assets/img/surport/weixin.png"
           alt="">
    </div>
    <div slot="footer">
      <button class="btn btn-light"
              @click="show1">
        <svg-icon icon-class="zhifubao"></svg-icon>
        支付宝支付
      </button>
      <button class="btn btn-light"
              @click="show2">
        <svg-icon icon-class="weixin"></svg-icon>微信支付
      </button>
    </div>
  </Modal>
  </div>

</template>

<script>
import Modal from 'components/common/modal/Modal'
export default {
  components: {
    Modal
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show1 () {
      this.isShow = true
    },
    show2 () {
      this.isShow = false
    }
  },
}
</script>

<style scoped>
.picture {
  border-radius: 3px;
}

.btn {
  border-radius: 30px;
  font-size: 15px;
}
.col img {
  width: 70%;
}
</style>