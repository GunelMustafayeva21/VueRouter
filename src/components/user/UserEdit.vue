<template>
  
  <div class="container">
    <h3>User {{ this.$route.params.id }} Edit Component </h3>
    <hr>
    <p>Name: {{ $route.query.name }}</p>
    <p>Surname: {{ $route.query.surname  }}</p>
    <button class="btn btn-danger" @click="saved = true">Confirm</button> <br> <br>
    <div style="height: 800px; background-color: bisque;"></div>
    <br>
    <p id="data">When you will add #data to url it will scroll page and come to see me</p>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        saved:false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.saved){
        next();
      }
      else{
       if(confirm("Are you sure? All entered data will be deleted")){
        next();
       }
       else{
        next(false);
       }
      }
       
     }
  }
</script>
