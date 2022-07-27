<template>
<label for="exampleInputEmail1" class="form-label">Ingreza tu nombre:</label>
  <input type="text" v-model="dato.nombre" class="form-control my-2"  />

<label for="exampleInputEmail2" class="form-label">Ingreza su edad:</label>
  <input type="number" v-model="dato.edad" class="form-control my-2"  />
<div class="mt-2">
<label for="exampleInputEmail1" class="form-label">Sexo:</label> 
    <div class=" form-check form-check-inline ml-5">

  <input v-model="dato.sexo" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Masculino">
  <label class="form-check-label" for="inlineRadio1">Masculino</label>
</div>

    <div class=" form-check form-check-inline">
  <input v-model="dato.sexo" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Femenino">
  <label class="form-check-label" for="inlineRadio2">Femenino</label>
</div>
</div>

<div class="mt-2">
<label for="exampleInputEmail1" class="form-label">Codigo Postal: </label>
    <input class="form-control" type="text" v-model="dato.cp"/>
</div>


 <button type="submit" :disabled="bloquear" class="btn btn-dark btn-block mt-3">Enviar Datos</button>
</template>

<script>
export default {

    props: {
        dato: {
            type: Array,
           
        }
    },

        computed: {
       bloquear() {
        return this.dato.nombre.trim() === '' ? true : false;
    }
    },
    
}
</script>

