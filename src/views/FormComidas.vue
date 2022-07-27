<template>
  <div class="px-5">
    <label >Comida: {{comidas[index].nombre}}</label>

    <div class="mt-3 form-floating mb-3">
      <label for="floatingSelectGrid"
        >¿Cuántos días de la semana consume?</label
      >
      <select v-model="val1"  class="form-control" id="floatingSelectGrid">
        <option v-for="item in diaSemana" :key="item">{{ item }}</option>
      </select>
    </div>

    <label for="floatingSelectGrid">¿Cuantas veces al día consume?</label>
    <select v-model="val2" class="form-control mb-3"  id="floatingSelectGrid">
      <option v-for="item in dia" :key="item">{{ item }}</option>
    </select>

    <label for="exampleInputEmail2" class="form-label"
      >¿Cuantas veces consume el alimento por comida?</label
    >
    <input v-model="val3" type="number"  min="1" class="form-control" />
  </div>
  <button @click.prevent="goNext" class="btn btn-dark btn-block mt-3">
    {{ buttonText }}
  </button>
</template>

<script>
import router from '../router';
import Swal from 'sweetalert2';
export default {
  data() {
    return{
        diaSemana : ['0','1', '2', '3', '4', '5', '6', '7'],
         dia : ['0','1', '2', '3', '4', '5'],
         index : 0,
         val1 : 0,
         val2 : 0,
         val3 : 0,
         string : '',
    } 
  },

  props:{
    comidas: {
      type: Array,
      required: true
    }
  },

  computed: {
    buttonText(){
      if (this.index < this.comidas.length - 1) {
        return 'Siguiente';
      } else {
        return 'Finalizar';
      }
    }
  },

  mounted(){
    this.val1 = this.comidas[this.index].diasSemana;
    this.val2 = this.comidas[this.index].vecesDia;
    this.val3 = this.comidas[this.index].vecesComida;
  },

  methods: {
    goNext: function (){
      console.log(this)
      let chunk = this.comidas[this.index].nombre + '|' + this.val1 + '|' + this.val2 + '|' + this.val3 + '|';
      this.addToString(chunk);
      if (this.index < this.$props.comidas.length - 1) {
        this.index++;
        this.val1 = this.comidas[this.index].diasSemana;
        this.val2 = this.comidas[this.index].vecesDia;
        this.val3 = this.comidas[this.index].vecesComida;
      } else {
        this.finalizar();
      }
    },

    addToString: function (val){
      this.string += val;
    },

    finalizar : function (){

      Swal.fire(
      'Listo!',
      '¡Gracias por completar el formulario!',
      'success'
    )

    router.push({ name: 'resultado' });
    },

    
  }

}
  

</script>

<style></style>
