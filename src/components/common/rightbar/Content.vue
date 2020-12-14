<template>
  <div class="content"
       style="position:sticky;top:7vh;"
       v-if="isShow">
    <header class="p-2"><small><strong>文章目录</strong></small></header>
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
export default {

  data () {
    return {
      items: [],
      isShow: false,
      activeIndex: 0,
      timer:null
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route (to, from) {
      this.isShow = to.path.indexOf("reader") >= 0
      if(this.isShow)
      {
        this.timer = setInterval(()=>{
        this.items = document.querySelectorAll(".v-show-content>h2")

      },0)
      }else{
        this.activeIndex=0
      }
    }
  },
  methods: {
    anchor (id, index) {
      var element = document.getElementById(id)
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      this.activeIndex = index
    },
    listenScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop)
      this.items.forEach((element,index) => {
        console.log(index)
       
        // console.log(element.offsetTop - scrollTop)
        this.activeIndex = element.offsetTop - scrollTop <=350?index:this.activeIndex
        console.log(this.activeIndex)
      }); 
    }
  },
  mounted() {
    window.addEventListener("scroll",this.listenScroll)
  },
}
</script>

<style scoped>
.content {
  position: sticky;
  top: 7vh;
}
.box {
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0 0 2px #e5e5e5;
}
.content li {
  list-style: none;
}
.content li:hover {
  background-color: #efefef;
  cursor: pointer;
}
.active {
  background-color: #efefef;
}

.item {
  text-align: center;
}
</style>