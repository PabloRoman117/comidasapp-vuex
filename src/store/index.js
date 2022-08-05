import { createStore } from 'vuex'
import router from '../router'
export default createStore({
  state: {
    datos: [],
    dato: {
      id: '',
      nombre: '',
      edad: 1,
      sexo: '',
      cp : '0'
     }
  },
  getters: {
  },
  mutations: {
    set(state, payload){
      state.datos.push(payload)
      router.push('/datos')
      localStorage.setItem('datos', JSON.stringify(state.datos))
    },
    eliminar(state){
     state.datos = []
     router.push('/')
     localStorage.removeItem('datos')
    },
    dato(state, payload){
      if(!state.datos.find(item => item.id === payload)){
        router.push('/')
        return
      }
      state.dato = state.datos.find(item => item.id === payload)
    },


    cargar(state, payload){
      state.datos = payload
    }
  },
  actions: {
    setdatos({commit}, dato) {
      commit('set', dato)
    },

    deletedatos({commit}, id) {
      commit('eliminar', id)
    },

    setdato({commit}, id) {
      commit('dato', id)
    },



   

    cargarLocalStorage({commit}) {
      if(localStorage.getItem('datos')){
        const datos = JSON.parse(localStorage.getItem('datos'))
        commit('cargar', datos )
        return
      }

      localStorage.setItem('datos', JSON.stringify([]))


    }
  },
  modules: {
  }
})
