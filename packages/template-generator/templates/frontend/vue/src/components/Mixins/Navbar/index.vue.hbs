<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { cn } from '@/lib/utils'
import { navlinks } from './constant/navLinks'
import ThemeToggle from '@/components/Common/ThemeToggle.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const route = useRoute()
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('lg')

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header
    :class="
      cn(
        'fixed top-0 left-0 w-full flex items-center z-[50] transition-all duration-300',
        isScrolled || (isMobile && isOpen) ? 'navbarFixed' : 'bg-transparent',
      )
    "
  >
    <div class="container mx-auto">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 font-primary font-bold text-xl lg:text-2xl py-6 text-zinc-900 dark:text-white"
            aria-label="logo"
          >
            📦️ BikinProject
          </RouterLink>
        </div>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            :class="
              cn('right-4 block absolute lg:hidden outline-none', isOpen && 'hamburgerActive')
            "
            @click="toggleMenu"
          >
            <span
              :class="
                cn(
                  'hamburgerLine',
                  'bg-black dark:bg-white origin-top-left transition duration-300 ease-in-out',
                )
              "
            ></span>
            <span
              :class="
                cn('hamburgerLine', 'bg-black dark:bg-white transition duration-300 ease-in-out')
              "
            ></span>
            <span
              :class="
                cn(
                  'hamburgerLine',
                  'bg-black dark:bg-white origin-bottom-left transition duration-300 ease-in-out',
                )
              "
            ></span>
          </button>

          <nav
            id="navMenu"
            :class="
              cn(
                'absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-[calc(100%+0.5rem)] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all duration-300',
                !isOpen && 'hidden',
                isMobile && 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg',
              )
            "
          >
            <ul class="block lg:flex lg:items-center">
              <li v-for="(link, i) in navlinks" :key="i" class="group">
                <RouterLink
                  :to="link.path"
                  :class="
                    cn('navLink', 'mx-8 lg:mx-4 flex', isActive(link.path) && 'navLinkActive')
                  "
                >
                  {{ link.title }}
                </RouterLink>
              </li>
              <li class="ml-8 lg:ml-6 flex items-center gap-6 py-4 lg:py-0">
                <RouterLink
                  to="/login"
                  class="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Masuk
                </RouterLink>
                <RouterLink
                  to="/register"
                  class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Daftar
                </RouterLink>
              </li>

              <li class="ml-8 lg:ml-4 flex items-center">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbarFixed {
  @apply fixed z-[9999] bg-transparent shadow-md backdrop-blur-md;
}

.hamburgerLine {
  @apply w-[30px] h-[2px] my-2 block;
}

.hamburgerActive > span:nth-child(1) {
  @apply rotate-45;
}

.hamburgerActive > span:nth-child(2) {
  @apply scale-0;
}

.hamburgerActive > span:nth-child(3) {
  @apply -rotate-45;
}

.navLink {
  @apply relative py-2 text-zinc-600 dark:text-zinc-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400;
}

.navLink::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300;
}

.navLink:hover::after,
.navLinkActive::after {
  @apply w-full;
}

.navLinkActive {
  @apply text-blue-600 dark:text-blue-400;
}
</style>
