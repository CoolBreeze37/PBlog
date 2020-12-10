<template>
  <div class="player row">
    <div class="player-picture my-auto offset-1 col-1 pl-0">
      <img class="rounded-circle"
           src="~assets/img/7.jpg"
           alt="" />
    </div>

    <audio id="audio"
           class="player-source"
           src="~assets/mp3/孝淑 - 高梨康治 - 五月雨 (孝淑 Bootleg).mp3"></audio>

    <div class="player-control col-8">
      <span id="musictitle"
            class="text-center block"
            style="width:117px"><small class="block">我想爱个世界</small></span>
      <div class="d-flex align-items-center">
        <span>
          <svg width="2em"
               height="1em"
               viewBox="0 0 16 16"
               class="bi bi-skip-backward"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z" />
          </svg>
        </span>
        <span class="mx-auto btn my-auto py-0"
              @click="playStop">
          <svg width="2em"
               height="1em"
               viewBox="0 0 16 16"
               class="bi bi-play"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
          </svg>
        </span>
        <span>
          <svg width="2em"
               height="1em"
               viewBox="0 0 16 16"
               class="bi bi-skip-forward"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z" />
          </svg>
        </span>
      </div>
      <div class="progress w-auto"
           style="height: 4px; border-radius:0;">
        <div class="progress-bar"
             role="progressbar"
             :style="{ width: progress + '%' }"
             aria-valuenow="25"
             aria-valuemin="0"
             aria-valuemax="100"></div>
        <div class="progress-bar bg-primary"
             role="progressbar"
             style="width: 50%;opacity:0.3;"
             aria-valuenow="-50"
             aria-valuemin="0"
             aria-valuemax="100"></div>
      </div>
    </div>
    <span class="col-1 px-0 align-self-center btn btn-link ml-3">
      <svg-icon icon-class="circle"></svg-icon>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 1,
      timer: null,
      progress: 0
    };
  },
  methods: {
    playStop () {
      if (!this.isPlaying) {
        const audio = document.querySelector("#audio");

        this.timer = setInterval(function () {
          this.currentTime = audio.currentTime;
          this.duration = audio.duration;
          console.log(this.currentTime);
          console.log(audio.duration);
          this.progress = (
            (this.currentTime * 100) /
            this.duration
          ).toString();
          console.log(this.progress);
        }, 50);
        audio.play();
        this.isPlaying = true;
      } else {
        clearInterval(this.timer);
        audio.pause();
        this.isPlaying = false;
      }
    }
    // loopText(){
    //     const title = document.querySelector("#musictitle")
    //     title.
    // }
  }
};
</script>

<style scoped>
.player-picture img {
  width: 32px;
}
.btn {
  cursor: var(--cursorUrlP), pointer !important;
}
.block {
  display: block;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.block1 {
  display: block;
}
.progress:hover {
  box-shadow: 0px 0px 5px rgb(73, 245, 73);
}
</style>
