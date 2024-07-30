<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-screen h-40vh flex flex-col justify-center items-center gap-8">
        <p class="text-6xl font-semibold font-serif">Subscribe & Get <span class="text-red-400">10%</span> Discount</p>
        <p class="text-zinc-500 text-lg">
            Be the first to get the latest news about trends, promotions and much more. Don’t worry, we not spam!
        </p>

        <form 
        class="w-4/12 h-fit border border-black flex justify-center 
        items-center bg-white font-serif tracking-wide px-3">
            <i class="pi pi-envelope" style="font-size: 1rem; font-weight: 100;"></i>
            <input type="text" class="border-0 focus:outline-none outline-none w-4/5 h-10" placeholder="Enter your E-Mail">
            <button class="text-lg font-semibold border-0">SUBSCRIBE</button>
        </form>
    </div>
</template>