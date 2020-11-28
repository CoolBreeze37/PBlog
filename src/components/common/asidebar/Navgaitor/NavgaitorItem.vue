<template>
  <div>
    <header class="list-group-item border-0 text-muted pl-1">
      <small>{{group.header}}</small>
    </header>
    <router-link :to="item.route"
                 v-for="item in group.items"
                 class="list-group-item list-group-item-action border-0 py-2">
      <span class="mr-4">
        <img :src="~assets/svg/bootstrap-icons+item.icon"
             alt=""
             width="32"
             height="32"
             title="Bootstrap">
      </span>
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Object
    }
  }
}
</script>

<style>
</style>