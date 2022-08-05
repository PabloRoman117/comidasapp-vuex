<template>
  <Navbar/>
  <div class="container mt-4">
    <router-view/>
  </div>
  
</template>

<script>
import {mapActions} from 'vuex'
  import {defineAsyncComponent} from 'vue'
  export default {
    name: 'App',
    components: {
     Navbar: defineAsyncComponent(() => import('@/components/Navbar.vue'))
    },

    methods: {
      ...mapActions(['cargarLocalStorage']),
    },

    created() {
      this.cargarLocalStorage();
    },
  }

</script>


