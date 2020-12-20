<template>
  <form class="input-group form-inline mr-0">
    <input class="form-control roundinput pr-0"
           style="height:32px;font-size:10px"
           type="search"
           placeholder="输入关键词搜索..."
           aria-label="Search" />
    <button class="btn btn-success input-group-append input-group-text roundbutton"
            type="submit">
      <svg-icon icon-class="search"></svg-icon>
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
/* 圆角 */
.roundinput {
  border-radius: 25px 25px;
  border-right: none;
}
.roundinput:focus {
  box-shadow: none;
  border-color: #ced4da;
  outline: none !important;
}
.roundbutton {
  border-radius: 0 25px 25px 0;
  background: white;
}
</style>
