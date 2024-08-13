<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-zinc-200 z-30 dark:bg-zinc-800"
  >
    <div class="w-full h-fit flex justify-around items-center">
      <h2 class="text-4xl tracking-wide text-black font-medium font-valkey dark:text-zinc-100">
        Best Seller
      </h2>

      <a
        href="#"
        class="text-xl tracking-wide text-black font-light flex justify-center items-center gap-2 dark:text-zinc-100"
      >
        View All
        <i class="pi pi-arrow-right"></i>
      </a>
    </div>
    <div class="relative w-full h-11/12 max-w-screen-xl flex items-center overflow-hidden my-40">
      <!-- Changed max-w-screen-lg to max-w-screen-xl -->
      <!-- Scroll Arrow Left -->
      <button
        @click="scrollLeft"
        class="absolute left-1 top-1/2 transform -translate-y-1/2 px-4 py-10 text-4xl border bg-transparent backdrop-blur-md text-zinc-400 rounded-md z-50"
      >
        &lt;
      </button>
      <!-- Scroll Container -->
      <div class="w-full h-40vh px-16">
        <!-- Added padding to make space for buttons -->
        <div
          ref="scrollContainer"
          class="flex justify-start items-center gap-8 overflow-x-auto scrollbar-hidden z-40 w-full h-full"
        >
          <div class="flex justify-start items-center gap-8 w-fit h-full" style="min-width: 2400px">
            <!-- Increased min-width -->
            <item class="inline-block" />
            <item class="inline-block" />
            <item class="inline-block" />
            <item class="inline-block" />
            <item class="inline-block" />
            <item class="inline-block" />
            <item class="inline-block" />
            <item class="inline-block" />
            <!-- Added one more item -->
          </div>
        </div>
      </div>
      <!-- Scroll Arrow Right -->
      <button
        @click="scrollRight"
        class="absolute -right-4 top-1/2 transform -translate-y-1/2 px-4 py-10 text-6xl border bg-transparent backdrop-blur-md text-zinc-400 rounded-md z-50"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import item from './item.vue'

const scrollContainer = ref(null)

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' }) // Adjust the scroll amount as needed
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' }) // Adjust the scroll amount as needed
  }
}
</script>

<style>
.scrollbar-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
button {
  cursor: pointer;
}
button:focus {
  outline: none;
}
</style>
