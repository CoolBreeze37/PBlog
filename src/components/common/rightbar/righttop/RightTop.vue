<template>
  <div class="RightTop">
    <div class="top"
         :style="getCurstomerStyleTop">
      <div class="item borderBottom"
           :class="{active:category=='hot'}"
           @click="show1">
        <svg-icon icon-class="hand-thumbs-up">
        </svg-icon>
      </div>
      <div class="item borderBottom"
           :class="{active:category=='comment'}"
           @click="show2">
        <svg-icon icon-class="qipao">
        </svg-icon>
      </div>
      <div class="item borderBottom"
           :class="{active:category=='random'}"
           @click="show3">
        <svg-icon icon-class="gift">
        </svg-icon>
      </div>
    </div>
    <div class="content">
      <header class="head p-3"
              :style="getHeadStyle"><small><strong>{{head[category]}}</strong></small></header>
      <ul>
        <li v-for="(item) in group[category].items">
          <SectionItem :curstomerStyle="curstomerStyleSectionItem"
                       :item="item"
                       :category="group[category].class">
          </SectionItem>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import { ContentHeadStyle, RightTopStyle, SectionItemStyle } from '../index';
import SectionItem from './sectionItem'
export default {
  data () {
    return {
      category: 'hot',
      head: { hot: '热门文章', comment: '最新评论', random: '随机文章' },
      group: {
        hot: {
          items: [{
            title: '关于邮寄养成关于邮寄养成关于邮寄养成关于邮寄养成',
            comment: 90,
            url: "/reader",
          }, {
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader"
          }],
          class: 'imgHot'
        },
        comment: {
          items: [{
            name: '蓝瘦香菇',
            comment: ' 卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽卧槽',
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
          }], class: 'imgComment'
        },
        random: {
          items: [{
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader"
          }, {
            title: '关于邮寄养成',
            comment: 90,
            url: "/reader",
          }, {
            title: '阿斯蒂芬',
            comment: 90,
            url: "/reader"
          }], class: 'imgRandom'
        }
      }
    }
  },
  props: {
    curstomerStyleTop: {
      type: RightTopStyle,
      default: () => {
        return new RightTopStyle()
      }
    },
    curstomerStyleContentHead: {
      type: ContentHeadStyle,
      default: () => {
        return new ContentHeadStyle()
      }
    },
    curstomerStyleSectionItem: {
      type: SectionItemStyle,
      default: () => {
        return new SectionItemStyle()
      }
    }
  },
  methods: {
    show1 () {
      this.category = 'hot';
    },
    show2 () {
      this.category = 'comment';
    },
    show3 () {
      this.category = 'random';
    }
  },
  components: {
    SectionItem
  },
  computed: {
    getCurstomerStyleTop () {
      return {
        '--color-top': this.curstomerStyleTop.color,
        '--backgrounColor-top': this.curstomerStyleTop.backgroundColor,
        '--bottomColor-top': this.curstomerStyleTop.bottomColor,
        '--bottomActiveColor-top': this.curstomerStyleTop.bottomActiveColor
      }
    },
    getHeadStyle () {
      return {
        '--color-head': this.curstomerStyleContentHead.color,
        '--backgrounColor-head': this.curstomerStyleContentHead.backgroundColor
      }
    }
  }
};
</script>

<style scoped>
.top {
  display: flex;
  height: 7vh;
  color: var(--color-top);
  background-color: var(--backgrounColor-top);
}
.head {
  color: var(--color-head);
  background-color: var(--backgrounColor-head);
  line-height: 100%;
}
.content {
  min-height: 315px;
  max-height: 315px;
}
.item {
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.borderBottom {
  border-bottom: 3px solid var(--bottomColor-top);
}
.active {
  border-bottom: 3px solid var(--bottomActiveColor-top);
  transition: 2s;
}
li {
  list-style: none;
}
</style>
