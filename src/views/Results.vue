import { defineAsyncComponent } from 'vue';
<template>
  <div class="abs-center">
<div class="jumbotron  shadow-lg">
  <h1 class="text-center display-4">Resultados:</h1>
  <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid inventore dignissimos, eius corporis quaerat dolorum suscipit autem placeat saepe. Exercitationem, minima neque! Explicabo dolor voluptate omnis sequi expedita eius excepturi.</p>
  <hr class="my-4">

    <button class="btn btn-outline-dark" @click="salirApp()">
        <i class="fa fa-sign-out-alt"></i> Salir
    </button>
</div>
   
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue';
import router from '@/router';


export default {

    methods: {
        salirApp() {
            //Poner arreglo del state vacio 
            this.$store.state.datos = [];
            router.push('/');
            localStorage.removeItem('datos');
        }
    },



components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
}
}
</script>

<style scoped>
.abs-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
