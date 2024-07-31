<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full h-auto bg-zinc-50 py-20 px-4 md:px-8">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Shopping Cart</h1>
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <!-- Cart Items -->
        <div class="lg:w-2/3 bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <div v-for="(item, index) in cartItems" :key="index" class="flex items-center py-4 border-b last:border-b-0">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-md mr-4 transition-transform duration-300 hover:scale-105">
            <div class="flex-grow">
              <h3 class="text-lg font-semibold text-gray-800">{{ item.name }}</h3>
              <p class="text-gray-600">{{ item.variant }}</p>
              <div class="flex items-center mt-2">
                <button @click="decreaseQuantity(index)" class="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  <i class="fas fa-minus"></i>
                </button>
                <span class="mx-2 w-8 text-center">{{ item.quantity }}</span>
                <button @click="increaseQuantity(index)" class="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="text-right">
              <p class="text-lg font-semibold text-gray-800">${{ (item.price * item.quantity).toFixed(2) }}</p>
              <button @click="removeItem(index)" class="text-red-500 hover:text-red-700 transition-colors duration-200 mt-2">
                Remove
              </button>
            </div>
          </div>
        </div>
  
        <!-- Order Summary -->
        <div class="lg:w-1/3 bg-white rounded-lg shadow-md p-6 h-fit transition-all duration-300 hover:shadow-lg">
          <h2 class="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h2>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Subtotal</span>
            <span class="font-semibold">${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Shipping</span>
            <span class="font-semibold">${{ shipping.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-gray-600">Tax</span>
            <span class="font-semibold">${{ tax.toFixed(2) }}</span>
          </div>
          <div class="border-t pt-4">
            <div class="flex justify-between mb-4">
              <span class="text-lg font-semibold text-gray-800">Total</span>
              <span class="text-lg font-semibold text-gray-800">${{ total.toFixed(2) }}</span>
            </div>
            <button class="w-full bg-[#b49076] text-white py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#ffb682] transform hover:-translate-y-1">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const cartItems = ref([
    { name: 'Slim fit modal cotton shirt', variant: 'Grey, M', price: 56.99, quantity: 2, image: 'assets/products/1/6a.jpg' },
    { name: 'Suede sport shoes', variant: 'Bold Brown, 40', price: 45.5, quantity: 1, image: 'assets/products/1/7a.jpg' },
    { name: 'Pebbled crossbody belt bag', variant: '', price: 72.99, quantity: 1, image: 'assets/products/1/16a.jpg' },
  ]);
  
  const shipping = ref(20);
  const taxRate = 0.08;
  
  const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });
  
  const tax = computed(() => subtotal.value * taxRate);
  
  const total = computed(() => subtotal.value + shipping.value + tax.value);
  
  const increaseQuantity = (index) => {
    cartItems.value[index].quantity++;
  };
  
  const decreaseQuantity = (index) => {
    if (cartItems.value[index].quantity > 1) {
      cartItems.value[index].quantity--;
    }
  };
  
  const removeItem = (index) => {
    cartItems.value.splice(index, 1);
  };
  </script>