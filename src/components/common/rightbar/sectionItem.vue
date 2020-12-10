<template>
  <li>
    <router-link class="myA row  py-1"
                 :to="item.url">
      <img class="px-0 mx-3 myimg"
           :src="getImgUrl(fenlei)" />
      <div v-if="fenlei!='imgPingLun'"
           class="w-50 px-0 text-muted">
        <p class="m-0 "><small>{{item.title}}</small></p>
        <svg-icon icon-class="pinglun"></svg-icon>
        <small> {{item.commont}}</small>
      </div>
      <div v-else
           class="w-50 px-0 text-muted">
        <p class="m-0 "><small><strong>{{item.name}}</strong></small></p>
        <small class="ellipsis"> {{item.comment}}</small>
      </div>
    </router-link>

  </li>
</template>

<script>
import SvgIcon from '../SvgIcon.vue'
export default {
  data () {
    return {
      imgReMen: ['assets/img/10.jpg', 'assets/img/8.jpg', 'assets/img/13.jpg', 'assets/img/12.jpg', 'assets/img/11.jpg', 'assets/img/14.jpg', 'assets/img/15.jpg', 'assets/img/16.jpg', 'assets/img/17.jpg', 'assets/img/18.jpg'],
      imgSuiJi: ['assets/img/10.jpg', 'assets/img/8.jpg', 'assets/img/13.jpg', 'assets/img/12.jpg', 'assets/img/11.jpg', 'assets/img/14.jpg', 'assets/img/15.jpg', 'assets/img/16.jpg', 'assets/img/17.jpg', 'assets/img/18.jpg'],
      imgPingLun: ['assets/img/19.png', 'assets/img/20.png', 'assets/img/21.png', 'assets/img/22.jpeg', 'assets/img/23.png']
    }
  },
  components: { SvgIcon },
  props: {
    item: {
      type: Object
    },
    fenlei: {
      type: String
    }
  },
  methods: {
    getImgUrl (fenlei) {
      // src的值是你绝对路径下图片的地址
      let src = Math.floor(Math.random() * (this[fenlei].length - 1) + 1);
      return require('@/' + this[fenlei][src])
    }
  },
}
</script>

<style scoped>
li {
  list-style: none;
}
.myA {
  text-decoration: none;
}
.myA:hover {
  background-color: #f1f3f4;
}
.myimg {
  width: 37px;
  height: 37px;
  border: solid 3px white;
  border-radius: 10px;
  border-right-width: 4px;
  box-shadow: 1px 1px 5px #e5e5e5;
}
</style>