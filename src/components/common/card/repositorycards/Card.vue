<template>
  <div class="col-sm-6 mb-4">
    <div class="card text-center"
         :class="getClass()">
      <div class="card-body">
        <div>
          <h5 class="card-title">{{data.title}}</h5>
          <p class="card-text mb-3 ellipsis-mul-3">{{data.text}}</p>
        </div>
        <a :href="data.url"
           class="btn btn-secondary py-1">
          <svg-icon icon-class="hand"
                    class="mr-1"></svg-icon>
          <small>访问</small>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryCardData } from './index'
export default {
  data () {
    return {
      colorClass: ['text-white bg-primary', 'text-white bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'text-white bg-dark']
    }
  },
  props: {
    bg: {
      type: String,
      default: 'text-white bg-success'
    },
    data: {
      type: RepositoryCardData,
      default: () => {
        return new RepositoryCardData()
      }
    }
  },
  methods: {
    getClass () {
      return this.colorClass[Math.floor(Math.random() * this.colorClass.length)]
    }
  },
}
</script>

<style scoped>
.btn {
  opacity: 0.7;
  border-radius: 25px;
  width: 80px;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  max-height: 200px;
}
</style>