<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import 'primeicons/primeicons.css';
import navoptions from './navoptions.vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isSearchBarVisible = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const toggleSearchBar = () => {
  isSearchBarVisible.value = !isSearchBarVisible.value;
  if (isSearchBarVisible.value) {
    setTimeout(() => {
      document.addEventListener('click', closeSearchBar);
    }, 0);
  }
};

const closeSearchBar = (event) => {
  if (!event.target.closest('.search-container')) {
    isSearchBarVisible.value = false;
    document.removeEventListener('click', closeSearchBar);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', closeSearchBar);
});
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
    :class="{ 'bg-transparent': !isScrolled, 'bg-white': isScrolled }"
  >
    <nav class="w-full md:w-10/12 lg:w-8/12 h-fit flex justify-between items-center py-2 md:py-3 px-4 md:px-6">
      <img src="/public/logo2light.png" alt="" class="w-12 h-8 md:w-16 md:h-12" />
      <div class="w-fit h-fit relative flex justify-center gap-2 md:gap-4">
        <a href="#" class="px-1 md:px-2 py-1 rounded-md text-lg md:text-xl text-black">
          <i class="pi pi-shopping-cart"></i>
        </a>
        <a href="#" class="px-1 py-1 rounded-md text-lg md:text-xl text-black">
          <i class="pi pi-heart"></i>
        </a>
        <div class="relative flex items-center search-container">
          <a
            @click.stop="toggleSearchBar"
            href="#"
            class="px-1 py-1 rounded-md text-lg md:text-xl text-black transition-opacity duration-300 ease-in-out"
            :class="{ 'opacity-0': isSearchBarVisible }"
          >
            <i class="pi pi-search"></i>
          </a>
          <input
            type="text"
            placeholder="Search..."
            class="absolute right-0 px-2 py-1 rounded-md text-sm md:text-base border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
            :class="{ 'w-0 opacity-0': !isSearchBarVisible, 'w-32 md:w-48 opacity-100': isSearchBarVisible }"
            @click.stop
          />
        </div>
        <button
          @click="toggleMenu"
          class="relative px-2 md:px-6 flex rounded-2xl justify-center items-center gap-1 md:gap-2 duration-200 text-xs md:text-base"
        >
          <i class="pi pi-list"></i>
          <span class="hidden md:inline">MENU</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.opacity-0 {
  pointer-events: none;
}
</style>