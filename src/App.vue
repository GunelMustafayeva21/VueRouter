<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <br>
                <!-- <app-header></app-header>
                <hr> -->
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                <router-view></router-view>
                </transition>
                <br>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// import Header from './components/Header.vue'
// export default {
//     components:{
//         appHeader:Header
//     }
// }
</script>

<style>
.slide-enter{
 opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
/* .slide-leave{

} */
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  opacity: 0;
  transition: opacity 3s;
  position: absolute;
  /* Element silinende digerleri onun yerine atlamasin deye */
}
@keyframes slide-in{
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
}
@keyframes slide-out{
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}
</style>
