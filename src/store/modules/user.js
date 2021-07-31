class User { // eslint-disable-line
  constructor (newUserData) {
    this.id = uuid()
    this.clientId = newUserData.clientId
    this.firstName = newUserData.firstName
    this.lastName = newUserData.lastName
    this.email = newUserData.email
    this.phone = newUserData.phone
    this.role = newUserData.role
  }
}

export default {
  state: () => ({
    user: {
      id: '40db1fe9-35b6-4116-8104-4bac186a9253',
      clientId: 'c6316bc1-42f5-47c8-8b8e-c440436ba205',
      firstName: 'Greg',
      lastName: 'Webber',
      email: 'greg.webber@academymortgage.com',
      phone: 8011234567,
      role: 'manager'
    }
  }),
  getters: {},
  mutation: {
    SET_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    saveUser({ commit }, data) {
      commit('SET_USER', data)
    }
  }
}
