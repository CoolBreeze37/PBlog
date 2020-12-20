<template>
  <div class="col px-0">
    <div class="header row">
      <div class="col">
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
        <Card v-for="(friend,index) in items[activeIndex].friends"
              :key="index"></Card>
      </div>
    </div>
  </div>

</template>

<script>
import Banner from 'components/common/banner/Banner'
import Card from 'components/common/card/friendcards/Card'
import { FriendCardData } from 'components/common/card/friendcards/index'
export default {
  data () {
    return {
      activeIndex: 0,
      items: [
        {
          text: '好友链接',
          friends: []
        },
        {
          text: '好友链接2',
          friends: []
        }
      ]
    }
  },
  components: {
    Banner,
    Card
  },
  methods: {
    change (index) {
      this.activeIndex = index
    }
  },
  mounted () {
    this.items[0].friends.push(new FriendCardData())
    this.items[1].friends.push(new FriendCardData())
    this.items[1].friends.push(new FriendCardData())
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
.header {
  background-color: #f9f9f9;
}
</style>