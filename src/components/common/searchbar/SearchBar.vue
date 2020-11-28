<template>
  <form class="input-group form-inline">
    <input class="form-control roundinput"
           style="height:35px;font-size:10px"
           type="search"
           placeholder="输入关键词搜索..."
           aria-label="Search" />
    <button class="btn btn-success input-group-append input-group-text roundbutton"
            type="submit">
      <svg width="1em"
           height="1em"
           viewBox="0 0 16 16"
           class="bi bi-search"
           fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
        <path fill-rule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
      </svg>
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
}
.roundbutton {
  border-radius: 0 25px 25px 0;
}
</style>
