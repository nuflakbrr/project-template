<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import smoothscroll from 'smoothscroll-polyfill'
import { cn } from '@/lib/utils'

const isVisible = ref(false)

const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

const scrollTop = () => {
  smoothscroll.polyfill()
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
  <div class="fixed bottom-6 right-6">
    <button
      type="button"
      @click="scrollTop"
      :class="cn(
        isVisible ? 'opacity-100' : 'opacity-0 cursor-default',
        'flex flex-col justify-center items-center rounded-lg bg-blue-500 p-2 text-white transition-all hover:bg-blue-600'
      )"
    >
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        fill="currentColor"
      >
        <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
      </svg>
    </button>
  </div>
</template>
