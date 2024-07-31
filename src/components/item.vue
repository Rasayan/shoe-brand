<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="h-full w-60 flex flex-col justify-around items-center group ml-8">
      <div 
        class="h-4/5 w-full flex flex-col justify-center items-center border border-transparent
        relative duration-150">
        <img src="/public/3.1.png" alt="" class="group-hover:scale-125 duration-200">

        <a href="#" class="flex justify-center items-center bg-white p-2 rounded-full absolute top-0 right-0">
          <i class="pi pi-heart"></i>
        </a>
  
        <div class="flex justify-around items-center w-full h-fit">

        <a href="#"
          class="w-11/12 h-fit border absolute text-xl font-medium mb-2 bg-white
          font-serif text-center bottom-0 hidden group-hover:block duration-150 text-zinc-700">
          Add to Cart
        </a>
        </div>
      </div>
  
      <div class="w-fit h-fit flex flex-col justify-center items-center gap-1">
        <h3 class="text-xl font-semibold font-serif tracking-wider">BRAND NAME</h3>
        <p class="text-lg font-medium font-serif tracking-widest">Super aesthetic shoe</p>
        <p class="text-xl font-bold font-serif tracking-wide">$500.00</p>
      </div>
    </section>
  </template>
  