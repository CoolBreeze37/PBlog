<template>
  <div>
    <header class="list-group-item border-0 pl-1 "
            style="background-color:#f9f9f9">
      <small>{{group.header}}</small>
    </header>
    <router-link :to="item.route"
                 v-for="item in group.items"
                 class="a list-group-item list-group-item-action border-0 py-2">
      <span class="mr-4">
        <svg-icon :icon-class="item.icon"></svg-icon>
      </span>
      <span class="text-muted">{{item.name}}</span>
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

<style scoped>
.list-group-item {
  background-color: #f9f9f9;
}
.list-group-item:hover {
  background: #e4e4e4;
}
</style>