<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
    <h2 class="text-4xl tracking-wide text-black font-medium">Our quality items just landed!</h2>

    <div class="relative w-full h-11/12 max-w-screen-lg flex items-center overflow-hidden my-40">
      <!-- Scroll Arrow Left -->
      <button @click="scrollLeft" 
        class="absolute left-0 right-20 top-1/2 transform -translate-y-1/2 px-4 py-10 text-lg
        border border-amber-900 bg-yellow-50/50 backdrop-blur-md text-black rounded-md z-50">
        &lt;
      </button>
      
      <!-- Scroll Container -->
      <div ref="scrollContainer" 
        class="flex justify-center items-center gap-8 overflow-x-auto scrollbar-hidden z-40 w-fit h-full">
        <div class="flex justify-center items-center gap-8 w-fit h-full" style="min-width: 2000px;"> <!-- Adjust min-width as needed -->
          <item class="inline-block" />
          <item class="inline-block" />
          <item class="inline-block" />
          <item class="inline-block" />
          <item class="inline-block" />
          <item class="inline-block" />
          <item class="inline-block" />
        </div>
      </div>

      <!-- Scroll Arrow Right -->
      <button @click="scrollRight" 
        class="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-10 text-lg
        border border-amber-900 bg-yellow-50/50 backdrop-blur-md text-black rounded-md z-50">
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import item from './item.vue';

const scrollContainer = ref(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll amount as needed
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll amount as needed
  }
};
</script>

<style>
.scrollbar-hidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}

button {
  cursor: pointer;
}

button:focus {
  outline: none;
}
</style>