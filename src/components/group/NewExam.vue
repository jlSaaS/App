<template>
  <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
    <div class="inline-block align-bottom bg-white rounded-lg px-4 py-5 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
      <div class="text-left">
        <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 flex justify-between">
          <div>New Exam</div>
          <button @click="close(null)">
            <XIcon class="h-6 w-6" />
          </button>
        </DialogTitle>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            Just send us the exam notice and documents. We'll take care of the rest.
          </p>
        </div>
      </div>
      <div class="mt-4 text-left">
        <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
          Exam Notice and Documents
        </label>
        <div
          id="drop-zone"
          class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md transition duration-300 ease-in-out"
          :class="{ 'bg-red-100 border-red-500': dropzoneStatus === 'hovered-not-over', 'bg-green-100 border-green-500': dropzoneStatus === 'hovered-over' }"
          draggable
          @drop.prevent.stop="dropHandler"
          @dragover.prevent="dragOverHandler"
          @dragleave.prevent="dragLeaveHandler"
          @dragenter.prevent="dragEnterHandler"
        >
          <div class="space-y-1 text-center pointer-events-none">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary focus-within:outline-none">
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  multiple accept="text/csv, image/jpeg, image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  class="sr-only"
                  @input="toSystem()"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">
              Word Docs, PDF's, or images
            </p>
          </div>
        </div>
        <div v-if="newExam.docs.length > 0" class="mt-1">
          <!-- <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Documents Already Attached
          </label> -->
          <div class="mt-1 flex justify-center border border-gray-300 rounded-md overflow-hidden">
            <ul class="w-full divide-y divide-gray-200">
              <li v-for="(d, i) in newExam.docs" :key="i" class="px-4 py-3 flex items-center">
                <DocumentIcon v-if="d.type === 'application/pdf'" class="h-10 w-10 pt-0.5 -ml-2" alt="" />
                <DocumentTextIcon v-if="d.type === ('application/msword' || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')" class="h-10 w-10 pt-0.5 -ml-2" alt="" />
                <DocumentReportIcon v-if="d.type === ('text/csv' || 'application/vnd.ms-excel' || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')" class="h-10 w-10 pt-0.5 -ml-2" alt="" />
                <PhotographIcon v-if="d.type.startsWith('image/')" class="h-10 w-10 pt-0.5 -ml-2" alt="" />
                <div class="ml-3 flex-grow">
                  <p class="text-sm font-medium text-gray-900">{{ d.name }}</p>
                  <p class="text-sm text-gray-500">Type: {{ d.type }}</p>
                </div>
                <div class="ml-3 flex-shrink-0 flex">
                  <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none" @click="deleteDoc(i)">
                    <span class="sr-only">Delete Document</span>
                    <TrashIcon class="h-6 w-6 -mr-1" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:flex">
        <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary hover:bg-opacity-90 focus:outline-none sm:w-auto sm:text-sm sm:mr-3" @click="save()">
          Send Docs
        </button>
        <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:w-auto sm:text-sm mt-3 sm:mt-0" @click="close(null)" ref="cancelButtonRef">
          Don't Send Docs
        </button>
      </div>
    </div>
  </TransitionChild>
</template>

<script>
import { TransitionChild, DialogTitle } from '@headlessui/vue'
import { DocumentIcon, DocumentTextIcon, DocumentReportIcon, PhotographIcon, TrashIcon, XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    TransitionChild,
    DialogTitle,
    DocumentIcon,
    DocumentTextIcon,
    DocumentReportIcon,
    PhotographIcon,
    TrashIcon,
    XIcon
  },
  data () {
    return {
      newExam: {
        docs: []
      },
      dropzoneStatus: null,
      uploadPercentage: 0
    }
  },
  computed: {
    user () {
      return this.$store.state.user.user
    }
  },
  methods: {
    close () {
      this.$store.commit('SET_MODAL_TYPE', null)
    },
    toSystem () {
      const docs = Array.from(document.querySelector('#file-upload').files)
      docs.forEach((d) => {
        this.newExam.docs.push(d)
      })
    },
    stopDrop (ev) {
      console.log('Not dropped in drop zone. Ignore.')
      this.dropzoneStatus = null
    },
    dragOverHandler (ev) {
      if (ev.target.id === 'drop-zone') {
        this.dropzoneStatus = 'hovered-over'
      } else {
        this.dropzoneStatus = 'hovered-not-over'
      }
    },
    dropHandler (ev) {
      console.log('Files dropped.')
      if (ev.dataTransfer.files) {
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
          var file = ev.dataTransfer.files[i]
          console.log(`File ${i} is: ${file.name}`)
          this.newExam.docs.push(file)
        }
      } else {
        console.log('No files to drop...')
      }
      this.removeDragData(ev)
      this.dropzoneStatus = null
    },
    dragLeaveHandler (ev) {
      console.log('Leave drag...')
    },
    dragEnterHandler (ev) {
      console.log('Enter drag...')
    },
    removeDragData (ev) {
      console.log('Removing drag data...')
      ev.dataTransfer.clearData()
    },
    deleteDoc (i) {
      this.newExam.docs.splice(i, 1)
    },
    save () {
      this.newExam.clientId = this.user.clientId
      this.newExam.createdBy = this.user.id
      this.$store.dispatch('createNewExam', this.newExam)
      this.$store.commit('SET_MODAL_TYPE', 'newExamConf')
    }
  }
}
</script>
