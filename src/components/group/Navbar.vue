<template>
  <nav class="bg-white dark:bg-gray-800 transition transform duration-200 ease-out">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 -ml-2" src="../../assets/icon.svg" alt="Workflow">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link
                to="/"
                class="px-3 py-2 rounded-md text-base focus:outline-none"
                :class="[$route.path === '/' ? 'text-primary bg-primary bg-opacity-10 dark:text-white dark:bg-gray-900 font-medium' : 'text-gray-500 dark:text-gray-300 hover:bg-primary hover:bg-opacity-5 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:bg-opacity-100 dark:hover:text-white']"
              >
                Home
              </router-link>
              <router-link
                to="/exams"
                class="px-3 py-2 rounded-md text-base focus:outline-none"
                :class="[$route.path === '/exams' ? 'text-primary bg-primary bg-opacity-10 dark:text-white dark:bg-gray-900 font-medium' : 'text-gray-500 dark:text-gray-300 hover:bg-primary hover:bg-opacity-5 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:bg-opacity-100 dark:hover:text-white']"
              >
                Exams
              </router-link>
              <router-link
                to="/remediations"
                class="px-3 py-2 rounded-md text-base focus:outline-none"
                :class="[$route.path === '/remediations' ? 'text-primary bg-primary bg-opacity-10 dark:text-white dark:bg-gray-900 font-medium' : 'text-gray-500 dark:text-gray-300 hover:bg-primary hover:bg-opacity-5 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:bg-opacity-100 dark:hover:text-white']"
              >
                Remediations
              </router-link>
              <router-link
                to="/reports"
                class=" px-3 py-2 rounded-md text-base focus:outline-none"
                :class="[$route.path === '/reports' ? 'text-primary bg-primary bg-opacity-10 dark:text-white dark:bg-gray-900 font-medium' : 'text-gray-500 dark:text-gray-300 hover:bg-primary hover:bg-opacity-5 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:bg-opacity-100 dark:hover:text-white']"
              >
                Reports
              </router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button class="text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white p-1 rounded-full focus:outline-none" @click="toggleDarkMode()">
              <span class="sr-only">Switch Theme</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <!-- Notifications dropdown -->
            <NotificationsMenu :show-notifications="showNotifications" @toggle="dropdownClick" />
            <!-- Profile dropdown -->
            <ProfileMenu :show-profile="showProfileMenu" @toggle="dropdownClick" />
          </div>
        </div>
        <div class="block md:hidden">
          <div class="-mr-2 flex items-center">
            <NotificationsMenu :show-notifications="showNotifications" @toggle="dropdownClick" />
            <ProfileMenu :show-profile="showProfileMenu" :show-notifications="showNotifications" @toggle="dropdownClick" @toggle-dark-mode="toggleDarkMode()" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NotificationsMenu from '../group/NotificationsMenu.vue'
import ProfileMenu from '../group/ProfileMenu.vue'

export default {
  components: {
    NotificationsMenu,
    ProfileMenu
  },
  data () {
    return {
      showNotifications: false,
      showProfileMenu: false
    }
  },
  mounted () {
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    }
    document.addEventListener('click', this.hideOnClickOutside)
  },

  methods: {
    toggleDarkMode () {
      const htmlClasses = document.querySelector('html').classList
      if (localStorage.theme === 'dark') {
        htmlClasses.remove('dark')
        localStorage.removeItem('theme')
      } else {
        htmlClasses.add('dark')
        localStorage.theme = 'dark'
      }
    },
    hideOnClickOutside () {
      this.showNotifications = false
      this.showProfileMenu = false
    },
    dropdownClick (e) {
      if (e === 'notifications-button') {
        this.showProfileMenu = false
        this.showNotifications = !this.showNotifications
      } else if (e === 'profile-menu-button') {
        this.showNotifications = false
        this.showProfileMenu = !this.showProfileMenu
      }
    }
  }
}
</script>
