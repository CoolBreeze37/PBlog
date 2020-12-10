<template>
  <div class="RightTop col-12">
    <div class="row">
      <div class="item col-4 text-center text-dark px-0 py-3 borderBottom"
           :class="{active:index==1}"
           @click="show1">
        <svg-icon icon-class="hand-thumbs-up">
        </svg-icon>
      </div>
      <div class="item col-4 text-center text-dark px-0 py-3 borderBottom"
           :class="{active:index==2}"
           @click="show2">
        <svg-icon icon-class="qipao">
        </svg-icon>
      </div>
      <div class="item col-4 text-center text-dark px-0 py-3 borderBottom"
           :class="{active:index==3}"
           @click="show3">
        <svg-icon icon-class="gift">
        </svg-icon>
      </div>
    </div>
    <div class="row">
      <header class="p-2 col-12"><small><strong>{{head[index-1]}}</strong></small></header>
      <ul class="col">
        <sectionItem v-for="(item) in group[index-1].items"
                     :item="item"
                     :fenlei="group[index-1].class"></sectionItem>
      </ul>
    </div>
  </div>
</template>

<script>
// {visibility:(!isShow1?'hidden':'visible'),transition:'2s'}
import sectionItem from './sectionItem'
export default {
  data () {
    return {
      index: 1,
      head: ['热门文章', '最新评论', '随机文章'],
      group: [
        {
          items: [{
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader",
          }, {
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader"
          }],
          class: 'imgReMen'
        }, {
          items: [{
            name: '蓝瘦香菇',
            comment: ' 卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽',
            url: "/reader"
          }, {
            name: '蓝瘦香菇',
            comment: '卧槽',
            url: "/reader"
          }, {
            name: '蓝瘦香菇',
            comment: '卧槽',
            url: "/reader"
          }, {
            name: '蓝瘦香菇',
            comment: '卧槽',
            url: "/reader"
          }, {
            name: '蓝瘦香菇',
            comment: '卧槽',
            url: "/reader"
          }], class: 'imgPingLun'
        }
        ,
        {
          items: [{
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            commont: 90,
            url: "/reader",
          }, {
            title: '阿斯蒂芬',
            commont: 90,
            url: "/reader"
          }], class: 'imgSuiJi'
        }]
    }
  },
  methods: {
    show1 () {
      this.index = 1;
    },
    show2 () {
      this.index = 2;
    },
    show3 () {
      this.index = 3;
    }
  },
  components: {
    sectionItem
  }
};
</script>

<style scoped>
.item {
  cursor: pointer;
}
/* .section {
  animation: mymove 2s;
  -webkit-animation: mymove 2s;
}
@keyframes mymove {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
} */
.borderBottom {
  border-bottom: 3px solid #f4f4f4;
}
.active {
  border-bottom: 3px solid #000;
  transition: 2s;
}

.RightTop a {
  text-decoration: none;
}
.badge {
  position: absolute;
  margin-top: -21px;
  margin-left: -17px;
}
.badgeshow {
  opacity: 1;
  transition: 1s;
  visibility: visible;
}
.badgehidden {
  opacity: 0;
  visibility: hidden;
}
</style>
