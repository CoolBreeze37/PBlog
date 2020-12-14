<template>
  <div class="backtop">
    <button 
            class="backtop-button"
            :class="isShow?'show':''"
            data-toggle="tooltip"
            data-placement="left"
            data-html="true"
            container="true"
            title="<small>返回顶部</small>"
            @click="backTop">
      <svg-icon icon-class="upcircle"></svg-icon>
    </button>
  </div>
</template>

<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip({ delay: { "show": 500, "hide": 0 } })

})
export default {
  data () {
    return {
      isShow: false,
      timer: null
    }

  },
  methods: {
    listenScrool () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isShow = scrollTop > 100
    },
    backTop (args, time = 500) {
      const speed = Math.floor(document.documentElement.scrollTop / (time / 30))
      this.timer = setInterval(() => {
        document.documentElement.scrollTop = document.documentElement.scrollTop - speed
        if (document.documentElement.scrollTop <= 0) {
          document.documentElement.scrollTop = 0;
          clearInterval(this.timer)
          $('[data-toggle="tooltip"]').tooltip('hide')
        }
      }, 30)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.listenScrool)
  },
}
</script>

<style scoped>
.backtop {
  position: relative;
}

.backtop-button {
  position: fixed;
  right: 0px;
  top: 30%;
  right:-40px;
  background-color: #f9f9f9;
  height: 30px;
  width: 40px;
  border: none;
  box-shadow: 0 0 10px #e4e4e4;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  line-height: 30px;
}
.show{
  right:0px;
  transition: 0.5s;
}
</style>