<template>
  <button
    type="button"
    class="inline-flex items-center font-medium focus:outline-none"
    :class="style"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
      required: false
    },
    size: {
      type: String,
      default: 'md',
      required: false
    },
    shadow: {
      type: Boolean,
      default: false,
      required: false
    },
    rounded: {
      type: Boolean,
      default: true,
      required: false
    },
    border: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      style: {
        'border-transparent text-white bg-indigo-600 hover:bg-indigo-700': this.color === 'indigo',
        'px-2.5 py-1.5 text-xs': this.size === 'sm',
        'px-3 py-2 text-sm': this.size === 'md',
        'px-4 py-2 text-sm': this.size === 'lg',
        'px-4 py-2 text-base': this.size === 'xl',
        'px-6 py-3 text-base': this.size === '2xl',
        'shadow-sm': this.shadow,
        'rounded': this.size === 'sm' && this.rounded,
        'rounded-md': this.size && this.size !== 'sm' && this.rounded,
        'border': this.border
      }
    }
  }
}
</script>
