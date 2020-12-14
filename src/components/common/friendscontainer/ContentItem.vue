<template>
  <a class="col-md-6 text-muted"
     style="display:inline-block"
     :href="url">
    <div class="box2 col py-2 mb-3">
      <img class="mr-2"
           :src="getImgUrl()"
           alt="">
      <div class="box">
        <h5>{{name}}</h5>
        <div class="wrap">你是王八蛋你是王八蛋你是王八蛋你是王八蛋你是王八蛋你是王八蛋你是王八蛋你是王八蛋你是王八蛋你是王八蛋</div>
      </div>
    </div>

  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    },
    imgUrl: {
      type: String
    },
    name: {
      type: String
    },
    word: {
      type: String
    }
  },
  methods: {
    getImgUrl () {
      return require('@/' + this.imgUrl)
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.wrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 75%;
}
.box {
  flex: 1;
  overflow: hidden;
}
.box2 {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 3px #ececec;
}
.box2:hover {
  background-color: #ddd;
}
img {
  width: 40px;
  border-radius: 10px;
  box-shadow: 0 0 3px #ddd;
}
p {
  margin: 0px;
}
</style>