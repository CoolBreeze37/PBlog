<template>
  <div class="card box mb-3"
       :style="getStyle">
    <img class="card-img"
         :src="getUrl"
         alt="...">
    <div class="card-img-overlay">
      <div>
        <span v-if="data.status"
              class="badge badge-danger mr-2">
          置顶
        </span>
        <h5 class="title">{{data.title}}</h5>
      </div>
      <p class="card-text ellipsis-mul">{{data.text}}</p>
      <p class="info mb-0"><small class="mx-1">
          <svg-icon icon-class="timer"></svg-icon>
          {{data.createTime}}
        </small>
        <small class="mx-1">
          <svg-icon icon-class="qipao"></svg-icon>
          {{data.commentCount}}
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import { HomeCardData, CardStyle, IOverLaysCardStyle } from './index'
export default {
  props: {
    data: {
      type: HomeCardData,
      default: () => {
        return new HomeCardData()
      }
    },
    curstomerStyle: {
      type: CardStyle,
      default: () => {
        return new IOverLaysCardStyle()
      }
    }
  },
  computed: {
    getUrl () {
      return require('@/' + this.data.imgUrl)
    },
    getStyle () {
      return {
        '--title-color': this.curstomerStyle.titleColor,
        '--info-color': this.curstomerStyle.infoColor,
        '--text-color': this.curstomerStyle.textColor,
        '--background-color': this.curstomerStyle.backgroundColor,
        '--card-shadow-color': this.curstomerStyle.shadowColor,
        '--card-shadow-active-color': this.curstomerStyle.shadowActiveColor,
      }
    }
  }
}
</script>

<style scoped>
.box {
  height: 28vh;
  border-radius: 3px;
  overflow: hidden;
}
.card-img {
  height: 28vh;
}
.card {
  background-color: var(--background-color);
  border: none;
  box-shadow: 0 0 10px var(--card-shadow-color);
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0 0 10px var(--card-shadow-active-color);
}
.card:hover img {
  transition: 0.5s;
  transform: scale(1.2);
}
.title {
  display: inline;
  color: var(--title-color);
  vertical-align: text-top;
}
.badge {
  vertical-align: middle;
}
.card-img-overlay {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--info-color);
}
.card-text {
  color: var(--text-color);
}
</style>