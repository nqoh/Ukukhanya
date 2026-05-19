<template>
     <!-- Hero -->
  <section class="bg-gradient-to-r from-white via-slate-50 to-blue-50 overflow-hidden">
    <div class=" mx-auto grid lg:grid-cols-2 items-center min-h-[300px]">

      <!-- Left -->
      <div class="px-6 lg:px-10 py-12" >

        <h1 class="lg:text-3xl text-2xl  leading-tight font-black text-blue-950 uppercase">
          Delivering Sustainable
          <span class="text-blue-600 block"  >
          Solution You Can Trust 
          </span>
        </h1>

        <p class="text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
          From borehole drilling to clean water systems,
          we provide reliable and sustainable water
          solutions for your home, farm and business.
        </p>
        <p class="text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
         We are committed to delivering exceptional quality and reliability in every project we undertake, ensuring complete satisfaction for our valued clients.
        </p> 
        <div class="grid grid-cols-3 gap-4 mt-10 max-w-xl ">

          <div class="flex items-start gap-3">
            <div class="text-blue-700 text-2xl lg:text-4xl">💧</div>
            <div>
              <h3 class="font-black text-slate-800">Experienced</h3>
              <p class="text-slate-500 text-sm">Team</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="text-blue-700 text-2xl lg:text-4xl">🛡️</div>
            <div>
              <h3 class="font-black text-slate-800">Quality</h3>
              <p class="text-slate-500 text-sm">Assured</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="text-blue-700 text-2xl lg:text-4xl">🎧</div>
            <div>
              <h3 class="font-black text-slate-800">Fast & Reliable</h3>
              <p class="text-slate-500 text-sm">Service</p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-5 mt-12">
          <button class="bg-blue-700 hover:bg-blue-800 transition text-white px-10 py-5 rounded-2xl font-bold shadow-xl text-lg">
            <span class="phone">📞</span> CALL NOW: +27 83 727 4638
          </button>
        </div>
      </div>

      <!-- Right -->
      <div class="relative w-full h-full">
        <img
          src="/assets/images/borehole.png"
          alt="Borehole Drilling"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.phone {
    display: inline-block;
    animation: ring 0.8s infinite;
    transform-origin: top center;
}

@keyframes ring {
    0%   { transform: rotate(0deg); }
    15%  { transform: rotate(15deg); }
    30%  { transform: rotate(-15deg); }
    45%  { transform: rotate(12deg); }
    60%  { transform: rotate(-12deg); }
    75%  { transform: rotate(8deg); }
    100% { transform: rotate(0deg); }
}
</style>