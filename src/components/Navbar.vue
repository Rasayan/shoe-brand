<!-- eslint-disable vue/multi-word-component-names -->

<script>
import 'primeicons/primeicons.css'
</script>

<template>
  <nav
    class="w-8/12 h-fit flex justify-between items-center border-b-2 border-black py-3 fixed top-0 bg-zinc-50/50 backdrop-blur-md px-6 z-50"
  >
    <button
      class="relative px-6 flex rounded-2xl justify-center items-center hover:bg-zinc-200 hover:rounded-2xl duration-200"
    >
      <span class="text-2xl">&#9776;</span>
      MENU
    </button>

    <!-- <div class="text-black text-3xl font-bold">RR</div> -->
    <img src="/public/logo2light.png" alt="" class="w-16 h-12" />

    <!-- <div class="w-fit h-fit relative flex justify-center gap-16">
      <a href="#" class="text-black text-lg font-medium">Home</a>
      <a href="#" class="text-black text-lg font-medium">Collection</a>
      <a href="#" class="text-black text-lg font-medium">About Us</a>
      <a href="#" class="text-black text-lg font-medium">Contact Us</a>
      <a href="#" class="text-black text-lg font-medium">FAQs</a>
      <a href="#" class="text-black text-lg font-medium">Log In</a>
    </div> -->

    <div class="w-fit h-fit relative flex justify-center gap-4">
      <a href="#" class="border border-zinc-900 px-2 py-1 rounded-md"
        ><i class="pi pi-shopping-cart" style="color: slateblue"></i
      ></a>
      <a href="#" class="border border-zinc-900 px-1 py-1 rounded-md text-black"
        ><i class="pi pi-heart" style="color: slateblue"></i
      ></a>
      <a href="#" class="border border-zinc-900 px-1 py-1 rounded-md"
        ><i class="pi pi-search" style="color: slateblue"></i
      ></a>
    </div>
  </nav>
</template>
