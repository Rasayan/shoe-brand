<script setup>
import Footer from '@/components/footer.vue'
import Navbar from '../components/Navbar.vue'
import home1 from '../components/home1.vue'
import home2 from '../components/home2.vue'
import home3 from '../components/home3.vue'
import Home4 from '@/components/home4.vue'
import Home2_5 from '@/components/home2_5.vue'
import Home3_5 from '@/components/home3_5.vue'
import Hom3_6 from '@/components/hom3_6.vue'
import Home5 from '@/components/home5.vue'
import Home6 from '@/components/home6.vue'
</script>

<template>
  <main class="w-screen h-fit flex flex-col justify-start items-center overflow-y-auto">
    <Navbar />
    <home1 />
    <home2 />
    <Home2_5 />
    <home3 />
    <Home3_5 />
    <Home4 />
    <Hom3_6 />

    <Home6 />
    <Home5 />

    <Footer />
  </main>
</template>
