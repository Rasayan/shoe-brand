<template>
  <div
    class="w-full h-auto md:h-40vh flex flex-col md:flex-row justify-around gap-10 md:gap-0 items-center bg-zinc-50 dark:bg-zinc-800 py-40"
  >
    <div
      class="flex justify-center items-center w-11/12 md:w-1/5 h-fit gap-7 border-b md:border-b-0 pb-4"
    >
      <div class="text-2xl text-amber-700">
        <i class="pi pi-tag"></i>
      </div>
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl text-zinc-800 dark:text-zinc-100 font-semibold">Free Shipping</h3>
        <p class="text-xl text-zinc-500 dark:text-zinc-300">
          International shipping available for all orders above $99.00
        </p>
      </div>
    </div>

    <div
      class="flex justify-center items-center w-11/12 md:w-1/5 h-fit gap-7 border-b md:border-b-0 pb-4"
    >
      <div class="text-2xl text-amber-700">
        <i class="pi pi-wallet"></i>
      </div>
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl text-zinc-800 dark:text-zinc-100 font-semibold">Buy Now & Pay Later</h3>
        <p class="text-xl text-zinc-500 dark:text-zinc-300">
          0% Interest financing available. Pay after 30 days.
        </p>
      </div>
    </div>

    <div class="flex justify-center items-center w-11/12 md:w-1/5 h-fit gap-7">
      <div class="text-2xl text-amber-700">
        <i class="pi pi-dollar"></i>
      </div>
      <div class="flex flex-col gap-3">
        <h3 class="text-2xl text-zinc-800 dark:text-zinc-100 font-semibold">Secure Payments</h3>
        <p class="text-xl text-zinc-500 dark:text-zinc-300">
          Guaranteed 100% secure payments on our website.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggleComponent',
  methods: {
    toggleTheme() {
      if (localStorage.getItem('color-theme') === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
    }
  },
  mounted() {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
</script>
