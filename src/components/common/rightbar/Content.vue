<template>
  <div class="content pb-5"
       style="position:sticky;top:7vh;">
    <header class="p-2"><small><strong>文章目录</strong></small></header>
    <ul class="box m-2 ">
      <li v-for="item in items"
          class="item p-1">{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['步骤1', '步骤1', '步骤1', '步骤1', '步骤1']
    }
  }
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

.item {
  text-align: center;
}
</style>