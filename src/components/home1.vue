<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-screen flex flex-col justify-center items-center">
    <div class="w-full h-4/5 flex justify-around items-center">
      <div class="w-1/2 h-full flex flex-col justify-center items-start gap-4 px-52 box-border">
        <h2 class="text-9xl tracking-widest font-serif">NEW SEASON</h2>
        <p class="text-4xl font-serif">STARTING AT $299.00</p>

        <a href="#" class="border-2 border-black py-2 px-8 my-10">SHOP NOW</a>
      </div>

      <div class="flex flex-col justify-center items-center gap-4 w-1/2 h-full">
        <div class="w-8/12 flex justify-end items-center">
          <img src="/public/3.1.png" alt="shoe1" class="rotate-12 scale-150" />
        </div>
        <div class="w-8/12 flex justify-start items-center">
          <img
            src="/public/3.2.png"
            alt="shoe1"
            class="scale-150 -rotate-12 hover:-rotate-6 duration-200"
          />
        </div>
        <div class="w-8/12 flex justify-end items-center">
          <img src="/public/3.3.png" alt="shoe1" class="rotate-12 scale-150" />
        </div>
      </div>
    </div>
  </div>
</template>
