<template>
  <div class="col px-0">
    <div class="row">
      <div class="col"
           style="background-color:#f9f9f9">
        <Banner :title="'友情连接'"
                :msg="'我的小伙伴们~'">
          <svg-icon icon-class="link"></svg-icon>
        </Banner>
      </div>
    </div>
    <div class="box">
      <ul>
        <li v-for="(item,index) in items"
            class="p-2"
            :class="activeIndex==index?'active':''"
            @click="change(index)"><small>{{item.text}}</small></li>
      </ul>
      <div class="section px-3">
        <ContentItem v-for="(friend) in items[activeIndex].friends"
                     :imgUrl="friend.img"
                     :url="friend.url"
                     :name="friend.name"
                     :word="friend.word"></ContentItem>
      </div>
    </div>
  </div>

</template>

<script>
import Banner from 'components/common/banner/Banner'
import ContentItem from 'components/common/friendscontainer/ContentItem'
export default {
  data () {
    return {
      activeIndex: 0,
      items: [
        {
          text: '好友链接',
          friends: [{ img: 'assets/img/11.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/12.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }]
        },
        {
          text: '好友链接2',
          friends: [{ img: 'assets/img/13.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/14.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }, { img: 'assets/img/15.jpg', name: 'wocao', word: '你是王八蛋', url: 'https://www.ihewro.com' }]
        }
      ]
    }
  },
  components: {
    Banner,
    ContentItem
  },

  methods: {
    change (index) {
      this.activeIndex = index
    }
  },
}
</script>

<style scoped>
ul {
  height: 45px;
  border-bottom: 3px solid #f4f6f7;
}
li {
  float: left;
  list-style: none;
  cursor: pointer;
}
.active {
  border-bottom: 3px solid black;
  transition: 0.2s;
}
.box {
  background-color: #f9f9f9;
  min-height: 400px;
  margin-top: 15px;
}
</style>