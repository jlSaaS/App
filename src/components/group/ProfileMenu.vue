<template>
  <div class="ml-3 relative">
    <div>
      <button type="button" id="mobile-menu-button" class="flex justify-center items-center text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white p-1 rounded-full focus:outline-none" @click.stop="toggle('profile-menu-button')">
        <span class="sr-only">Open Mobile Menu</span>
        <div class="relative h-6 w-6">
          <transition
            enter-active-class="transition-all transform duration-100 ease-out"
            leave-active-class="transition-all transform duration-100 ease-in"
            enter-from-class="transition rotate-45 opacity-50"
            enter-to-class="transition rotate-0 opacity-100"
            leave-from-class="transition rotate-0 opacity-100"
            leave-to-class="transition -rotate-45 opacity-50"
            mode="out-in"
          >
            <svg v-if="!showProfile" key="on" class="absolute top-0 left-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else key="off" class="absolute h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </transition>
        </div>
      </button>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      leave-active-class="transition ease-in duration-75"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="showProfile" id="profile-menu" class="px-2 py-2 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 border border-transparent dark:border-gray-100 transition duration-200 ease-out ring-1 ring-black ring-opacity-5 focus:outline-none divide-y md:divide-y-0 space-y-1 md:space-y-0" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
        <div class="space-y-1 block md:hidden">
          <router-link
            to="/"
            role="menuitem"
            class="block px-3 py-2 text-sm rounded-md"
            :class="[$route.path === '/' ? 'text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900' : 'text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            Home
          </router-link>
          <router-link
            to="/exams"
            role="menuitem"
            class="block px-3 py-2 text-sm rounded-md"
            :class="[$route.path === '/exams' ? 'text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900' : 'text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            Exams
          </router-link>
          <router-link
            to="/remediations"
            role="menuitem"
            class="block px-3 py-2 text-sm rounded-md"
            :class="[$route.path === '/remediations' ? 'text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900' : 'text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            Remediations
          </router-link>
          <router-link
            to="/reports"
            role="menuitem"
            class="block px-3 py-2 text-sm rounded-md"
            :class="[$route.path === '/reports' ? 'text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900' : 'text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            Reports
          </router-link>
        </div>
        <div class="space-y-1 md:space-y-0 pt-1 md:pt-0">
          <router-link
            to="/profile"
            role="menuitem"
            class="block px-3 py-2 text-sm rounded-md"
            :class="[$route.path === '/profile' ? 'text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900' : 'text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            Profile
          </router-link>
          <router-link
            to="/settings"
            role="menuitem"
            class="block px-3 py-2 text-sm rounded-md"
            :class="[$route.path === '/settings' ? 'text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900' : 'text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            Settings
          </router-link>
          <router-link
            to="/signed-out"
            role="menuitem"
            class="block px-3 py-2 text-sm rounded-md"
            :class="[$route.path === '/signed-out' ? 'text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-900' : 'text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white']"
          >
            Sign Out
          </router-link>
        </div>
        <div class="flex items-center justify-end pt-1 block md:hidden">
          <div class="">
            <button class="text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white p-1 rounded-full focus:outline-none" @click.stop="toggleDarkMode()">
              <span class="sr-only">Switch Theme</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showProfile: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle (e) {
      this.$emit('toggle', e)
    },
    toggleDarkMode () {
      this.$emit('toggleDarkMode')
    }
  }
}
</script>
