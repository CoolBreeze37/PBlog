<template>
  <div class="leftfooter col-12 py-1">
    <div class="row position-relative">
      <router-link to="/home"
                   @mouseenter.native="show1"
                   @mouseleave.native="show1"
                   class="col-4 text-center text-dark px-0">

        <span class="badge badge-dark d-block w-100 text-wrap"
              :class="{badgeshow:isShow1,badgehidden:!isShow1}">后台管理</span>
        <div>
          <svg-icon icon-class="tools">
          </svg-icon>
        </div>

        <small>管理</small>

      </router-link>
      <router-link to="/home"
                   @mouseenter.native="show2"
                   @mouseleave.native="show2"
                   class="col-4 text-center text-dark px-0">
        <span class="badge badge-dark d-block w-100 text-wrap"
              :class="{badgeshow:isShow2,badgehidden:!isShow2}">文章RSS地址</span>
        <div>
          <svg-icon icon-class="journal-bookmark-fill">
          </svg-icon>
        </div>
        <small>文章</small>
      </router-link>
      <router-link to="/home"
                   @mouseenter.native="show3"
                   @mouseleave.native="show3"
                   class="col-4 text-center text-dark px-0">
        <span class="badge badge-dark d-block text-center w-100 text-wrap"
              :class="{badgeshow:isShow3,badgehidden:!isShow3}">评论RSS地址</span>
        <div>
          <svg-icon icon-class="chat-fill">
          </svg-icon>
        </div>
        <small>评论</small>
      </router-link>
    </div>
  </div>
</template>

<script>
// {visibility:(!isShow1?'hidden':'visible'),transition:'2s'}
export default {
  data () {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false
    }
  },
  methods: {
    show1 () {
      console.log(this.isShow1)
      this.isShow1 = !this.isShow1
    },
    show2 () {
      console.log(this.isShow2)
      this.isShow2 = !this.isShow2
    },
    show3 () {
      console.log(this.isShow3)
      this.isShow3 = !this.isShow3
    }
  },
};
</script>

<style scoped>
.leftfooter {
  background-color: #ffffff;
}
.leftfooter a {
  text-decoration: none;
}
.badge {
  position: absolute;
  margin-top: -31px;
}
.badgeshow {
  opacity: 1;
  transition: 1s;
  visibility: visible;
}
.badgehidden {
  opacity: 0;
  visibility: hidden;
}
</style>
