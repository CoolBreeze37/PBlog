<template>
  <div>
    <header class="list-group-item border-0 pl-1 "
            :style="{'background-color':curstomerStyle.HbackgroundColor}">
      <small :style="{color:curstomerStyle.Hcolor}">{{group.header}}</small>
    </header>
    <router-link v-for="(item,index) in group.items"
                 :to="item.route"
                 :style="activeStyle"
                 class="list-group-item border-0 py-2">
      <span class="mr-4">
        <svg-icon :icon-class="item.icon"></svg-icon>
      </span>
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
import { NavStyle } from '../index'
export default {
  props: {
    group: {
      type: Object
    },
    // 期望样式
    curstomerStyle: {
      type: NavStyle,
      default: () => {
        return new NavStyle()
      }
    }
  },
  computed: {
    activeStyle () {
      return {
        '--background-color': this.curstomerStyle.backgroundColor,
        '--background-color-hover': this.curstomerStyle.active,
        '--color': this.curstomerStyle.color,
      }
    }
  }
}
</script>

<style scoped>
.list-group-item {
  background: var(--background-color);
  text-decoration: none;
  color: var(--color);
}
.list-group-item:hover {
  background: var(--background-color-hover);
}
</style>