<template>
  <header style="height:14vh;">
    <h2 class="mt-2">
      <span class="d-inline mb-2">
        <slot>
        </slot>
      </span>
      {{title}}
    </h2>
    <h6 class="my-auto text-muted"><small>{{msg}}</small></h6>

  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '无标题'
    },
    msg: {
      type: String,
      default: '还没有添加描述哦~'
    }
  }
}
</script>

<style>
</style>