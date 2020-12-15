<template>
  <div class="card m-3">
    <div class="img"
         style="height:25vh;overflow:hidden;">
      <img src="~assets/img/5.jpg"
           class="card-img-top"
           alt="">
    </div>

    <div class="
         card-body">
      <div class="card-img-overlay">
        <span href="#"
              class="badge badge-danger mr-2 align-middle">
          置顶
        </span>

        <h5 class="card-title  text-white d-inline align-middle">Card title</h5>
      </div>
      <div id="description"
           class="d-flex flex-column"
           style="height:100px">
        <p class="card-text ellipsis-mul">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <div id="status">

      </div>
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.img img {
  height: 25vh;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0 0 15px skyblue;
}
.card:hover .img > img {
  transition: 0.5s;
  transform: scale(1.2);
}
</style>