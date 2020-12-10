<template>
  <div>
    <mavon-editor v-model="content"
                  ref="md"
                  style="min-height:600px"></mavon-editor>
    <button @click="">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',//输入的文本
      html: '',//及时转的html
    }
  },
  methonds: {

  }
}
</script>

<style>
</style>