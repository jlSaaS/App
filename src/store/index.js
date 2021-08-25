import { createStore } from 'vuex'
import user from '../store/modules/user'
import app from '../store/modules/app'
import exams from '../store/modules/exams'

const store = createStore({
  modules: {
    user,
    app,
    exams
  }
})

export default store
