import { createStore } from 'vuex'

export default createStore({
  state: {
    isShowMask: false
  },
  mutations: {
    changeMask(state, oerload:boolean = false){
      state.isShowMask = oerload
    }
  },
  actions: {
  },
  modules: {
  }
})
