<script setup>
import Footer from '@/components/footer.vue';
import Navbar from '../components/Navbar.vue'
import cart from '../components/cart.vue'
</script>

<template>
  <main class="w-screen h-fit flex flex-col justify-start items-center overflow-y-auto">
    <Navbar />
    <cart />
    <Footer />
  </main>
</template>
