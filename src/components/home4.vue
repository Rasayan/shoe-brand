<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-screen h-auto md:h-40vh flex flex-col justify-center items-center gap-8 bg-zinc-50 py-10 md:py-0">
        <p class="text-2xl md:text-6xl font-semibold font-serif font-valkey">Subscribe & Get <span class="text-red-400">10%</span> Discount</p>
        <p class="text-zinc-500 text-lg text-center w-11/12 ">
            Be the first to get the latest news about trends, promotions and much more. Don’t worry, we not spam!
        </p>

        <form 
        class="w-11/12 md:w-4/12 h-fit border border-zinc-500 flex justify-center 
        items-center bg-white font-serif tracking-wide px-3">
            <i class="pi pi-envelope" style="font-size: 1rem; font-weight: 100;"></i>
            <input type="text" class="border-0 focus:outline-none outline-none w-4/5 h-9 md:h-14" placeholder="Enter your E-Mail">
            <button class="text-lg font-medium border-0">SUBSCRIBE</button>
        </form>
    </div>
</template>