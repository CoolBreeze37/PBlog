<template>
  <div id="container"
       class="col">
    <div class="row py-2">
      <div class="col p-0">
        <Header :title="title"
                :msg="msg">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="40px"
               height="28px"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
               class="feather feather-github">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Header>
      </div>
    </div>
    <div class="dropdown-divider"></div>
    <div class="row">
      <div class="col p-0">
        <div class="card"
             style="width: 100%;">
          <img src="~assets/img/6.jpg"
               class="card-img-top"
               alt="...">
          <div class="m-3"></div>
          <div class="row px-3">
            <ContentItem :bg="'text-white bg-success'" />
            <ContentItem :bg="'text-white bg-info'" />
            <ContentItem :bg="'text-white bg-primary'" />
            <ContentItem :bg="'text-white bg-danger'" />
            <ContentItem :bg="'text-white bg-dark'" />
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ContentItem from 'components/common/repositorycontainer/ContentItem'
import Header from 'components/common/header/Header'
export default {
  data () {
    return {
      title: '项目展示',
      msg: 'github的一些项目展示'
    }
  },
  components: {
    ContentItem,
    Header
  }

}
</script>

<style scoped>
#container {
  background-color: red;
}
</style>