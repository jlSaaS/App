export default {
  state: () => ({
    modalType: null
  }),
  getter: {},
  mutations: {
    SET_MODAL_TYPE(state, payload) {
      state.modalType = payload
    }
  },
  actions: {
    setModalType({ commit }, data) {
      commit('SET_MODAL_TYPE', data)
    }
  }
}
