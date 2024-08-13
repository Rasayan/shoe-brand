<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import 'primeicons/primeicons.css'
import navoptions from './navoptions.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isSearchBarVisible = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleSearchBar = () => {
  isSearchBarVisible.value = !isSearchBarVisible.value
  if (isSearchBarVisible.value) {
    setTimeout(() => {
      document.addEventListener('click', closeSearchBar)
    }, 0)
  }
}

const closeSearchBar = (event) => {
  if (!event.target.closest('.search-container')) {
    isSearchBarVisible.value = false
    document.removeEventListener('click', closeSearchBar)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  applyStoredTheme()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', closeSearchBar)
})

const applyStoredTheme = () => {
  const storedTheme = localStorage.getItem('color-theme')
  if (storedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleTheme = () => {
  if (localStorage.getItem('color-theme') === 'dark') {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  }
}
</script>

<template>
  <navoptions
    :class="[
      'fixed top-0 left-0 h-full bg-white border-r transform transition-transform duration-500 ease-in-out z-40',
      isMenuOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  />
  <div
    class="w-screen h-fit flex justify-center items-center fixed top-0 z-50 transition-colors duration-300"
    :class="{ 'bg-transparent': !isScrolled, 'bg-white dark:bg-zinc-800': isScrolled }"
  >
    <nav
      class="w-full md:w-10/12 lg:w-8/12 h-fit flex justify-between items-center py-2 md:py-3 px-4 md:px-6"
    >
      <a href="/"
        ><img src="/src/assets/logo-head.png" alt="Logo" class="w-24 h-16 md:w-15 md:h-18"
      /></a>
      <div class="w-fit h-fit relative flex justify-center gap-2 md:gap-4">
        <a
          href="/cart"
          class="px-1 md:px-2 py-1 rounded-md text-lg md:text-xl text-black dark:text-white"
        >
          <i class="pi pi-shopping-cart"></i>
        </a>
        <a href="#" class="px-1 py-1 rounded-md text-lg md:text-xl text-black dark:text-white">
          <i class="pi pi-heart"></i>
        </a>
        <div class="relative flex items-center search-container">
          <a
            @click.stop="toggleSearchBar"
            href="#"
            class="px-1 py-1 rounded-md text-lg md:text-xl text-black dark:text-white transition-opacity duration-300 ease-in-out"
            :class="{ 'opacity-0': isSearchBarVisible }"
          >
            <i class="pi pi-search"></i>
          </a>
          <input
            type="text"
            placeholder="Search..."
            class="absolute right-0 px-2 py-1 rounded-md text-sm md:text-base border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
            :class="{
              'w-0 opacity-0': !isSearchBarVisible,
              'w-32 md:w-48 opacity-100': isSearchBarVisible
            }"
            @click.stop
          />
        </div>
        <button
          @click="toggleMenu"
          class="relative px-2 md:px-6 flex rounded-2xl justify-center items-center gap-1 md:gap-2 duration-200 text-xs dark:text-white md:text-base"
        >
          <i class="pi pi-list"></i>
          <span class="hidden md:inline">MENU</span>
        </button>

        <div class="toggle-switch">
          <label class="switch-label">
            <input
              @click="toggleTheme"
              id="theme-toggle"
              type="checkbox"
              class="checkbox text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.opacity-0 {
  pointer-events: none;
}

.hiddenn {
  display: none;
}

/* From Uiverse.io by Madflows */
.toggle-switch {
  position: relative;
  width: 60px;
  height: 30px;
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}

.switch-label {
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: var(--dark);
  border-radius: 20px;
  cursor: pointer;
  border: 2px solid var(--dark);
}

.checkbox {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider {
  background-color: var(--light);
}

.slider::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  -webkit-box-shadow: inset 10px -2px 0px 0px var(--light);
  box-shadow: inset 10px -2px 0px 0px var(--light);
  background-color: var(--dark);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.checkbox:checked ~ .slider::before {
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
  background-color: var(--dark);
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
