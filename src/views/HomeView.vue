
<template>
  <form @submit.prevent="procesarFormulario"  class="bg-white p-5 shadow-lg mb-5 rounded-lg  ">
    <Input :dato="dato"/>
  </form>

</template>

<script>
import {defineAsyncComponent} from 'vue';
import {mapActions} from 'vuex';
const shortid = require('shortid');
export default {
    name: 'HomeView',
    data() {
        return {
           dato: {
            id: '',
            nombre: '',
            edad: 1,
            sexo: '',
            cp : '0'
           }
            
        }
    },

    methods: {
      ...mapActions(['setdatos']),


      procesarFormulario() {
        console.log(this.dato);
        if(this.dato.nombre.trim() === '') {
          alert('El nombre tiene que ser obligatorio');
          return;
        }

        console.log('Procesando formulario');

        //generar id
        this.dato.id = shortid.generate();

        this.setdatos(this.dato);

        this.dato = {
          id: '',
          nombre: '',
          sexo: '',
          cp : 0
        }


      }
    },



    components: {
      Input: defineAsyncComponent(() => import('../components/Input.vue')),
      ListaTareas: defineAsyncComponent(() => import('../components/ListaTareas.vue'))
    },
  }
</script>

<style>

</style>