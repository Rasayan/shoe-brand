<script setup>
import Navbar from './Navbar.vue'
import Footer from './footer.vue'
</script>

<template>
  <body class="bg-gray-100 text-gray-800 font-sans dark:bg-zinc-800 ">
    <Navbar />
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md  rounded-lg mt-20 dark:bg-zinc-800 ">
      <h1 class="text-2xl font-bold mb-4  dark:text-zinc-100">
        Shipping & Delivery Policy
        <hr class="w-auto" style="height: 3px" />
      </h1>
      <p class="mb-4  dark:text-zinc-100">Last updated on Jun 5th 2024</p>

      <p class="mb-4  dark:text-zinc-100">
        For international buyers, orders are shipped and delivered through registered international
        courier companies and/or international speed post only. For domestic buyers, orders are
        shipped through registered domestic courier companies and/or speed post only. Orders are
        shipped within 0-7 days or as per the delivery date agreed at the time of order
        confirmation, and delivery of the shipment is subject to Courier Company / post office
        norms.
      </p>

      <p class="mb-4  dark:text-zinc-100">
        ALLSKY FOOTWEAR PRIVATE LIMITED is not liable for any delay in delivery by the courier
        company/postal authorities and only guarantees to hand over the consignment to the courier
        company or postal authorities within 0-7 days from the date of the order and payment or as
        per the delivery date agreed at the time of order confirmation.
      </p>

      <p class="mb-4  dark:text-zinc-100">
        Delivery of all orders will be to the address provided by the buyer. Delivery of our
        services will be confirmed on your mail ID as specified during registration.
      </p>

      <p class="mb-4  dark:text-zinc-100">
        For any issues in utilizing our services, you may contact our helpdesk at
        <a href="mailto:allskyfootwear416@gmail.com" class="text-blue-500 hover:underline"
          >allskyfootwear416@gmail.com</a
        >
        or
        <a href="mailto:info@allskyfootwear.com" class="text-blue-500 hover:underline"
          >info@allskyfootwear.com</a
        >.
      </p>
    </div>
    <Footer />
  </body>
</template>
