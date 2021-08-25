<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    <div class="py-6 sm:py-10">
      <header>
        <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {{ $route.name }}
              </h2>
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none" @click="openNewExam()">
                New Exam
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
          <router-view class="px-4 py-8 sm:px-0" />
        </div>
      </main>
    </div>
    <Modal :show="!!modalType" @close="showNewExam = false" />
  </div>
</template>

<script>
import Modal from './components/group/Modal.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      showNewExam: false
    }
  },
  computed: {
    modalType () {
      return this.$store.state.app.modalType
    }
  },
  methods: {
    openNewExam () {
      this.$store.commit('SET_MODAL_TYPE', 'newExamInfo')
    }
  }
}
</script>
