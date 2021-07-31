import { createStore } from 'vuex'
import user from '../store/modules/user'
import exams from '../store/modules/exams'

const store = createStore({
  modules: {
    user,
    exams
  }
})

export default store
