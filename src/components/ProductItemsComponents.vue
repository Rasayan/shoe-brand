<template>
  <div class="container mx-auto px-4">
    <!-- Product Grid Item -->
    <div class="product-grid-item border border-gray-300 bg-white p-4">
      <div class="product-grid-item__image">
        <img
          src="../assets/images/default/payment.png"
          alt="Product Image"
          class="w-full h-auto rounded"
        />
      </div>
      <div class="product-grid-item__details mt-4">
        <h2 class="text-xl font-semibold text-gray-900">Product Title</h2>
        <p class="text-gray-600 mt-2">Short product description goes here.</p>
        <!-- Rating -->
        <div class="product-grid-item__rating flex items-center mt-2">
          <i class="lnir lnir-star-filled text-yellow-500"></i>
          <i class="lnir lnir-star-filled text-yellow-500"></i>
          <i class="lnir lnir-star-filled text-yellow-500"></i>
          <i class="lnir lnir-star-filled text-yellow-500"></i>
          <i class="lnir lnir-star-filled text-gray-300"></i>
          <span class="text-gray-500 ml-2">1 review</span>
        </div>
        <!-- Price -->
        <div class="product-grid-item__price text-xl font-semibold text-gray-900 mt-2">$149.5</div>
        <!-- Tag -->
        <div class="product-grid-item__content-tag text-gray-500 mt-2">3 colours</div>
        <!-- Button -->
        <div class="product-grid-item__button mt-4">
          <a href="#" class="bg-gold text-white py-2 px-4 rounded hover:bg-gold-dark">Buy Now</a>
        </div>
      </div>
    </div>
    <!-- End Product Grid Item -->
  </div>
</template>

<script>
import { categories } from '../data'

export default {
  name: 'ProductItemsComponent',
  data() {
    return {
      categories
    }
  },
  mounted() {
    const script1 = document.createElement('script')
    script1.src = '/assets/js/vendor7b30.js?v=4'
    script1.async = true
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = '/assets/js/theme7b30.js?v=4'
    script2.async = true
    document.body.appendChild(script2)
  }
}
</script>

<style>
.product-grid-item {
  border-color: rgba(218, 165, 32, 0.3);
  background-color: rgba(255, 255, 255, 0.9);
}

.product-grid-item__button a {
  background-color: rgba(218, 165, 32, 1);
}

.bg-gold {
  background-color: rgba(218, 165, 32, 1);
}

.bg-gold-dark {
  background-color: rgba(184, 134, 11, 1);
}
</style>
