<template>
  <div id="wrapper"
       class="">
    <div>
      <div class="imgbox d-flex justify-content-center pt-3">
        <img class="rounded-circle img-fluid"
             src="~assets/img/1.jpg"
             alt="" />
      </div>
      <a href=""></a>
      <span class="block"
            @click="showMessage()">
        <span class="d-flex justify-content-center m-t-sm-1 h6 text-muted"><b>月色真美
            <svg width="0.5em"
                 height="0.5em"
                 viewBox="0 0 16 16"
                 class="bi bi-caret-down-fill"
                 fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg></b></span>
        <span class="d-flex justify-content-center text-muted"><small>只要心还跳。</small></span>
      </span>
    </div>

    <div id="say"
         class="position-absolute"
         v-bind:class="{ rightmove: isActive, rightmovecancle: !isActive }">
      <div class="sanjiao_down m-auto"></div>
      <div class="shortmessage m-auto px-2">
        <div>
          <p class="text-left">
            <span>{{ msg }}</span>
          </p>
        </div>
        <div class="progress m-auto"
             data-container="body"
             data-toggle="popover"
             data-placement="top"
             data-content="时间已经过去了45%。"
             style="height:10px">
          <div class="progress-bar bg-success"
               role="progressbar"
               style="width: 45%"
               aria-valuenow="25"
               aria-valuemin="0"
               aria-valuemax="80"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});
export default {
  data () {
    return {
      msg: "早上好，永远年轻，永远热泪盈眶",
      isActive: true
    };
  },
  methods: {
    showMessage () {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
#wrapper {
  display: block;
}
.imgbox img {
  width: 96px;
}
.block {
  display: block;
  cursor: var(--cursorUrlP), pointer;
}
.shortmessage {
  color: #dcf2f8;
  width: 85%;
  background-color: #23b7e5;
  padding: 10px 0;
}
.progress {
  width: 90%;
  height: 10px;
  cursor: pointer;
}
.sanjiao_down {
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: #23b7e5;
}
.rightmove {
  opacity: 0;
  transform: translateX(125%);
  visibility: hidden;
}
.rightmovecancle {
  visibility: visible;
  transform: translateX(0);
  transition: 1s;
  opacity: 1;
}
#say {
  z-index: 100;
}
</style>
