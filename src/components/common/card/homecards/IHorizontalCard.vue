<template>
  <div class="card mb-3"
       :style="getStyle">
    <div class="row no-gutters">
      <div class="col-md-5">
        <img :src="getUrl"
             class="card-img"
             alt="...">
      </div>
      <div class="col-md-7 box">
        <div class="card-body">
          <div><span v-if="data.status"
                  class="badge badge-danger mr-2">
              置顶
            </span>

            <h5 class="title">{{data.title}}</h5>
          </div>
          <p class="card-text ellipsis-mul">{{data.text}}</p>
          <p class="info card-text">
            <small class="mx-1">
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
    </div>
  </div>
</template>

<script>
import { HomeCardData, CardStyle, IHorizontalCardStyle } from './index'
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
        return new IHorizontalCardStyle()
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
  background-color: #343a40;
}
.title {
  display: inline;
  color: var(--title-color);
  vertical-align: text-top;
}
.badge {
  vertical-align: middle;
}
.box {
  display: flex;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--info-color);
}
.card-text {
  color: white;
}
.info {
  color: var(--info-color);
}
</style>