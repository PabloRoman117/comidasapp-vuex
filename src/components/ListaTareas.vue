<template>

<div class="d-sm-flex justify-content-sm-between bg-light p-5 rounded " v-for="item in datos" :key="item.nombre"> 
<h4 class="d-flex align-content-start"> Hola! {{item.nombre}}</h4>
<p>Edad: {{item.edad}}</p>
<p>CP: {{item.cp}}</p>
<p>Sexo: {{item.sexo}}</p>

<!-- boton para salir al / y borrar el LocalStorage-->
<button class="btn btn-outline-dark" @click="deletedatos(item.id)">
 <i class="fa fa-sign-out-alt"></i> Salir
</button>
 
</div>

<div class="container bg-white p-5 shadow-lg rounded-lg mt-5">
   <FormComidas :comidas=comidas   />
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import { defineAsyncComponent } from 'vue';


export default {

    data() {
        return {
          
         comidas: [
            {
                id: '1',
                nombre: 'Pizza',
                diasSemana: 0,
                vecesDia: 0,
                vecesComida: 0
            },
            {
                id: '2',
                nombre: 'Carnes rojas',
                diasSemana: 0,
                vecesDia: 0,
                vecesComida: 0
            },
            {
                id: '3',
                nombre: 'Tortilla',
                diasSemana: 0,
                vecesDia: 0,
                vecesComida: 0
            },

            {
                id: '4',
                nombre: 'Frutas',
                diasSemana: 0,
                vecesDia: 0,
                vecesComida: 0
            },
            {
                id: '5',
                nombre: 'Verduras',
                diasSemana: 0,
                vecesDia: 0,
                vecesComida: 0
            },
            
         ],
         datoComidas: {
            id: '',
            diasSemana: '',
            dias: '',
            consumir: '',

         }

         


        }
    },

    computed: {
        ...mapState(['datos']),
    },
    methods: {
        ...mapActions(['deletedatos']),
        
    },

    components: {
      FormComidas: defineAsyncComponent(() => import('../views/FormComidas.vue')),
    }

    
}
</script>

