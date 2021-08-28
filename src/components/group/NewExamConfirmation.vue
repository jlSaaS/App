<template>
  <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
            <div>Docs received</div>
          </DialogTitle>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              <!-- Based on current weather conditions and forecasting, the exam should be created by...<br><br>
              carry the 2...<br>
              divide by 12...<br>
              multiply by the reciprocal...<br><br>
              Just kidding.  -->
              We'll have the exam created by tomorrow.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary hover:bg-opacity-90 focus:outline-nonesm:text-sm" @click="close(null)">
          Done
        </button>
      </div>
    </div>
  </TransitionChild>
</template>

<script>
import { TransitionChild, DialogTitle } from '@headlessui/vue'
import { CheckIcon, XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    TransitionChild,
    DialogTitle,
    CheckIcon,
    XIcon
  },
  methods: {
    close (name) {
      this.$store.commit('SET_MODAL_TYPE', null)
    }
  }
}
</script>
