<template>
  <a class="col-md-6"
     style="display:inline-block"
     :style="getStyle"
     :href="data.url">
    <div class="box2 col py-2 mb-3">
      <img class="mr-2"
           :src="data.imgUrl"
           alt="">
      <div class="box">
        <h5 class="title">{{data.title}}</h5>
        <div class="text ellipsis">{{data.text}}</div>
      </div>
    </div>
  </a>
</template>

<script>
import { FriendCardData, FriendCardStyle } from './index'
export default {
  props: {
    data: {
      type: FriendCardData,
      default: () => {
        return new FriendCardData()
      }
    },
    curstomerStyle: {
      type: FriendCardStyle,
      default: () => {
        return new FriendCardStyle()
      }
    }
  },
  methods: {
    getImgUrl () {
      return require('@/' + this.imgUrl)
    }
  },
  computed: {
    getStyle () {
      return {
        '--title-color': this.curstomerStyle.titleColor,
        '--text-color': this.curstomerStyle.textColor,
        '--background-color': this.curstomerStyle.backgroundColor,
        '--shadow-color': this.curstomerStyle.shadow,
        '--active-color': this.curstomerStyle.active,
        '--img-shadow': this.curstomerStyle.imgShadow
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.box {
  flex: 1;
  overflow: hidden;
}
.box2 {
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px var(--shadow-color);
}
.box2:hover {
  background-color: var(--active-color);
}
img {
  width: 35px;
  border-radius: 10px;
  box-shadow: 0 0 3px var(--img-shadow);
}
.title {
  color: var(--title-color);
  font-size: 95%;
}
.text {
  color: var(--text-color);
}
</style>