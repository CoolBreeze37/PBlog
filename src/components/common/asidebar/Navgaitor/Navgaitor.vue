<template>
  <ul id="Navgaitor"
      class="list-group border-0">
    <NavgaitorGroup :group="groups[0]"
                    :curstomerStyle="curstomerStyle[0]">
    </NavgaitorGroup>
    <NavgaitorGroup :group="groups[1]"
                    :curstomerStyle="curstomerStyle[1]">
    </NavgaitorGroup>
  </ul>
</template>

<script>
import { NavStyle } from '../index';
import NavgaitorGroup from './NavgaitorGroup.vue'

export default {
  components: {
    NavgaitorGroup
  },
  data () {
    return {
      curstomerStyle: [new NavStyle(), new NavStyle()],
      groups: [
        {

          header: '导航',
          items: [{
            route: '/home',
            name: '首页',
            icon: 'house-fill'
          },
          {
            route: '/repository',
            name: '仓库',
            icon: 'github'
          },
          {
            route: '/friends',
            name: '朋友',
            icon: 'people-fill'
          },
          {
            route: '/album',
            name: '相册',
            icon: 'camera-fill'
          },
          {
            route: '/repository',
            name: '日记',
            icon: 'pen-fill'
          },
          {
            route: '/repository',
            name: '归档',
            icon: 'archive-fill'
          },
          {
            route: '/repository',
            name: '关于',
            icon: 'cup-fill'
          }]
        },
        {
          header: '组成',
          items: [{
            route: '/home',
            name: '分类',
            icon: 'grid-fill'
          }, {
            route: '/home',
            name: '页面',
            icon: 'file-earmark-fill'
          },
          {
            route: '/friend',
            name: '友链',
            icon: 'signpost-split-fill'
          }]
        }]
    }
  }
}
</script>

<style scoped>
</style>
