<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p> User Id: {{ $route.params.id }}</p>
    <br>
    <!-- :to="'/user/'+$route.params.id+'/edit'" -->
    <router-link
    :to="{
      name:'UserEditPage',
      params: {id: $route.params.id},
      query:{name : 'Gunel', surname:'Mustafa'},
      hash: '#data'}"
     tag="button"
     class="btn btn-primary"
    >Edit User</router-link>
  </div>
</template>
<script>
  export default {
     beforeRouteEnter(to, from, next){
      console.log("Before Route Enter - route controling in companent level");
       next();
     }
  }
</script>
