<script setup>
import Footer from '@/components/footer.vue';
import Navbar from '../components/Navbar.vue'
import home1 from '../components/home1.vue'
import home2 from '../components/home2.vue'
import home3 from '../components/home3.vue'
import Home4 from '@/components/home4.vue';
</script>

<template>
  <main class="w-screen h-fit flex flex-col justify-start items-center overflow-y-auto">
    <Navbar />
    <home1 />
    <home2 />
    <home3 />
    <Home4 />
    <Footer />
  </main>
</template>
