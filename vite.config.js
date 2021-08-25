import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  if (command === 'serve') {
    return {
      base: '/',
      plugins: [vue()]
    }
  } else {
    return {
      base: '/App',
      plugins: [vue()]
    }
  }
}
