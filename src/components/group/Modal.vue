<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" :open="open" draggable @drop.prevent.stop="stopDrop" @dragover.prevent="dragOverHandler">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <NewExam v-if="modalType === 'newExamInfo'" :dragging="dragging" @draggingStopped="dragging = false" />
        <NewExamConfirmation v-if="modalType === 'newExamConf'" />
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import NewExam from './NewExam.vue'
import NewExamConfirmation from './NewExamConfirmation.vue'

import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    NewExam,
    NewExamConfirmation
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dragging: false
    }
  },
  computed: {
    modalType () {
      return this.$store.state.app.modalType
    }
  },
  methods: {
    stopDrop (ev) {
      this.dragging = false
    },
    dragOverHandler (ev) {
      this.dragging = true
    }
  }
}
</script>
