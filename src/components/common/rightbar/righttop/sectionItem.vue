<template>
  <router-link class="section-item py-1"
               :to="item.url"
               :style="getActiveStyle">
    <img class="px-0 mx-3"
         :src="getImgUrl(category)" />

    <!-- 非imgComment显示 -->
    <div v-if="category!='imgComment'"
         class="box"
         :style="{'color':curstomerStyle.color}">
      <p class="m-0 ellipsis">
        <strong>{{item.title}}</strong>
      </p>
      <svg-icon icon-class="pinglun"></svg-icon>
      <small> {{item.comment}}</small>
    </div>

    <!-- imgComment显示 -->
    <div v-else
         class="box"
         :style="{'color':curstomerStyle.color}">
      <p class="m-0 ellipsis"><strong>{{item.name}}</strong></p>
      <small class="ellipsis"> {{item.comment}}</small>
    </div>
  </router-link>
</template>

<script>
import { CategoryUrl, SectionItemStyle } from '../index'
export default {
  props: {
    item: {
      type: Object
    },
    category: {
      type: String
    },
    // 图片分类地址
    categoryUrl: {
      type: CategoryUrl,
      default: () => {
        return new CategoryUrl()
      }
    },
    curstomerStyle: {
      type: SectionItemStyle,
      default: () => {
        return new SectionItemStyle()
      }
    }
  },
  methods: {
    getImgUrl (categoryName) {
      // src的值是你绝对路径下图片的地址
      let src = Math.floor(Math.random() * (this.categoryUrl[categoryName].length - 1) + 1);
      return require('@/' + this.categoryUrl[categoryName][src])
    }
  },
  computed: {
    getActiveStyle () {
      return {
        '--section-item-active': this.curstomerStyle.active
      }
    }
  }

}
</script>

<style scoped>
.section-item {
  text-decoration: none;
  display: flex;
}
.section-item:hover {
  background-color: var(--section-item-active);
}
.box {
  flex: 1;
  overflow: hidden;
}
.section-item img {
  width: 37px;
  height: 37px;
  border: solid 3px white;
  border-radius: 10px;
  border-right-width: 4px;
  box-shadow: 1px 1px 5px #e5e5e5;
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 75%;
}
</style>