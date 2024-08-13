<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-4 bg-zinc-50 dark:bg-zinc-800"
  >
    <div
      class="w-[45%] h-4/5 rounded-2xl bg-homecateg1 flex justify-center items-center flex-col gap-4"
    >
      <h2 class="font-valkey text-8xl">Best Sellers</h2>
      <p class="text-xl font-medium font-serif tracking-wider">Hello I am fint, what about you?</p>

      <a
        href="/products"
        class="text-2xl text-black border-b border-zinc-900 mt-20 font-valkey tracking-wider"
        >SHOP NOW</a
      >
    </div>

    <div
      class="w-[45%] h-4/5 rounded-2xl bg-homecateg2 flex justify-center items-center flex-col gap-4"
    >
      <h2 class="font-valkey text-white text-8xl">Hello</h2>
      <p class="text-xl text-white font-medium font-serif tracking-wider">
        Hello I am fint, what about you?
      </p>

      <a
        href="/products"
        class="text-2xl text-white border-b border-zinc-50 mt-20 font-valkey tracking-wider"
        >SHOP NOW</a
      >
    </div>
  </div>
</template>
