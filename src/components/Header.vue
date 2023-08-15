<template>
    <ul  class="nav nav-pills">
        <!-- exact deyir ki link adresini bütöv şəkilde yoxla 
        yoxsa her iki linkdə / var deyə aktiv klasını her iki linkə verir -->
        <router-link tag="li" to="/" active-class="active" exact> <a>Home</a>  </router-link>
        <router-link tag="li" to="/user" active-class="active" > <a>User</a>  </router-link> 
        <!-- <router-link tag="li" to="/user/1" active-class="active" exact> <a>User 1</a>  </router-link>
        <router-link tag="li" to="/user/2" active-class="active" exact> <a>User 2</a>  </router-link> -->
    </ul>
</template>