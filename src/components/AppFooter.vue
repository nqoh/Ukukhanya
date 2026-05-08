<template>
  <!-- CTA -->
  <Cta /> 
     <footer class="bg-blue-950 text-white py-20">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16">

      <div>
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 flex items-center justify-center text-2xl">
            💧
          </div>

          <div>
            <h3 class="text-3xl font-black">UKUKHANYA</h3>
            <p class="text-blue-300 font-bold">EQUIP SOLUTIONS</p>
          </div>
        </div>

        <p class="text-slate-300 mt-6 leading-relaxed text-lg">
          We provide comprehensive and sustainable water solutions.
        </p>
      </div>

      <div>
        <h4 class="text-2xl font-black">Quick Links</h4>
        <ul class="space-y-4 mt-8 text-slate-300 text-lg">
          <li><router-link :to="{ name:'Home' }" class="nav-link">Home</router-link></li>
          <li><router-link :to="{ name:'AboutUs' }" class="nav-link">About Us</router-link></li>
          <li><router-link :to="{ name:'Services' }" class="nav-link">Services</router-link></li>
          <li><router-link :to="{ name:'Gallery' }" class="nav-link">Gallery</router-link></li>
        </ul>
      </div>

      <div>
        <h4 class="text-2xl font-black">Our Services</h4>
        <ul class="space-y-4 mt-8 text-slate-300 text-lg">
          <li>Borehole Drilling</li>
          <li>Tank Stand Construction</li>
          <li>Water backup System</li>
          <li>Solar Pump Solution</li>
        </ul>
      </div>

      <div>
        <h4 class="text-2xl font-black">Contact Us</h4>
        <ul class="space-y-5 mt-8 text-slate-300 text-lg">
          <li>📞 +27 83 727 4638</li>
          <li>✉️ info@clearwater.com</li>
          <li>📍 Area 47, Lilongwe, Malawi</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-blue-900 mt-16 pt-8 text-center text-slate-400 text-lg px-6">
      © 2026 Clearwater Water Solutions. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
  import Cta from './App/Cta.vue';
</script>

<style scoped>

</style>