<template>
  <div class="container">
    <router-view></router-view>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Home Component</button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        id: this.$route.params.id
      }
    },
    methods:{
      navigateToHome(){
        // this.$router.push("/");
        // this.$router.push({path:"/"});
        this.$router.push({name:"Main Page"});
      }
    
    }
    //,
    // If we dont watch id prop id which comes from url does not change value of id property
    // watch:{
    //    "$route"(to, from){
    //       this.id=to.params.id
    //    }
    // }
  }
</script>
