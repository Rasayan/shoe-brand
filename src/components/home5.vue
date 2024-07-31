<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-screen h-auto md:h-90vh flex flex-col justify-center items-center gap-8 bg-zinc-50 py-16 md:py-0">
      <p class="text-2xl md:text-6xl font-semibold font-serif font-valkey">Gifts for everyone</p>
      <p class="text-zinc-500 text-lg text-center">
        A small gift to presents for your friend or anyone. the recipient can redeem it for merchandise of their choice!
      </p>
      <form
        class="w-11/12 md:w-4/12 h-fit flex flex-col justify-center
        items-center font-serif tracking-wide px-3 gap-4">
        <p class=" text-2xl md:text-6xl font-semibold font-serif font-valkey">RR Gift Card</p>
        <p class="text-xl font-semibold font-serif text-zinc-400">Form ${{ selectedValue }}</p>
        <p class="text-xl font-medium font-serif text-zinc-700">CHOOSE THE VALUE</p>
        <div class="w-fit h-fit flex justify-start items-center gap-3">
          <button @click.prevent="selectValue(10)" class="flex justify-center items-center border-2 border-zinc-400 py-3 px-3" :class="{'border-zinc-950': selectedValue === 10}">$10</button>
          <button @click.prevent="selectValue(25)" class="flex justify-center items-center border-2 border-zinc-400 py-3 px-3" :class="{'border-zinc-950': selectedValue === 25}">$25</button>
          <button @click.prevent="selectValue(50)" class="flex justify-center items-center border-2 border-zinc-400 py-3 px-3" :class="{'border-zinc-950': selectedValue === 50}">$50</button>
          <button @click.prevent="selectValue(100)" class="flex justify-center items-center border-2 border-zinc-400 py-3 px-3" :class="{'border-zinc-950': selectedValue === 100}">$100</button>
        </div>
        <p class="text-xl font-medium font-serif text-zinc-700">QUANTITY</p>
        <div class="w-fit h-fit flex justify-start items-center gap-3 border-2 border-zinc-500 ">
          <button class="flex justify-center items-center py-3 px-3" @click.prevent="decreaseQuantity">
            <i class="pi pi-arrow-left"></i>
          </button>
          <p class="px-4">{{ quantity }}</p>
          <button class="flex justify-center items-center py-3 px-3" @click.prevent="increaseQuantity">
            <i class="pi pi-arrow-right"></i>
          </button>
        </div>
            
            <button class="text-lg border border-yellow-300 py-2 px-14 md:px-32 bg-yellow-400 font-semibold flex items-center">Pay via &nbsp;
                <span class="text-blue-800"><i class="pi pi-paypal"></i> PayPal</span></button>
      </form>

      <div class="w-4/12 h-fit flex justify-around items-center">
        <p class="text-md font-semibold text-zinc-800">SHARE</p>

        <div class="flex justify-center items-center gap-4">
            <i class="pi pi-twitter"></i>
            <i class="pi pi-facebook"></i>
            <i class="pi pi-instagram"></i>
        </div>
      </div>
    </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          quantity: 1,
          selectedValue: 25
        }
      },
      methods: {
        increaseQuantity() {
          this.quantity++
        },
        decreaseQuantity() {
          if (this.quantity > 1) {
            this.quantity--
          }
        },
        selectValue(value) {
          this.selectedValue = value
        }
      }
    }
    </script>