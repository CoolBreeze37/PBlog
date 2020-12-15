<template>
  <div class="content"
       v-if="isShow"
       :style="getStyle">
    <header class="p-2 header"><small><strong>文章目录</strong></small></header>
    <ul class="box m-2">
      <li v-for="(item,index) in items"
          :key="index"
          class="item p-1"
          :class="activeIndex==index?'active':''"
          @click="anchor(item.children[0].id,index)"><small>{{item.innerText}}</small>
      </li>
    </ul>

  </div>
</template>

<script>
import { BlogInfoStyle, ContentStyle } from '../index'
export default {

  data () {
    return {
      items: [],
      isShow: false,
      activeIndex: 0,
      timer: null
    }
  },
  props: {
    curstomerStyle: {
      type: ContentStyle,
      default: () => {
        return new ContentStyle()
      }
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route (to, from) {
      this.isShow = to.path.indexOf("reader") >= 0
      if (this.isShow) {
        // 有时会获取不到标题，所以加了定时器，目前没有找到更好的办法。。。
        this.timer = setInterval(() => {
          this.items = document.querySelectorAll(".v-show-content>h2")
        }, 0)
      } else {
        this.activeIndex = 0
      }
    }
  },
  methods: {
    // 电梯导航
    anchor (id, index) {
      var element = document.getElementById(id)
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      this.activeIndex = index
    },
    listenScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop)
      this.items.forEach((element, index) => {
        this.activeIndex = element.offsetTop - scrollTop <= 350 ? index : this.activeIndex
        console.log(this.activeIndex)
      });
    }
  },
  computed: {
    getStyle () {
      return {
        '--head-color': this.curstomerStyle.headColor,
        '--head-background-color': this.curstomerStyle.headBackgroundColor,
        '--color': this.curstomerStyle.color,
        '--background-color': this.curstomerStyle.backgroundColor,
        '--active': this.curstomerStyle.active
      }
    }
  },
  mounted () {
    window.addEventListener("scroll", this.listenScroll)
  },
}
</script>

<style scoped>
.content {
  position: sticky;
  top: 7vh;
}
.header {
  color: var(--head-color);
  background-color: var(--head-background-color);
}
.box {
  background-color: var(--background-color);
  border-radius: 5px;
  color: var(--color);
  box-shadow: 0 0 2px #e5e5e5;
}
.content li {
  list-style: none;
}
.content li:hover {
  background-color: var(--active);
  cursor: pointer;
}
.active {
  background-color: var(--active);
}

.item {
  text-align: center;
}
</style>