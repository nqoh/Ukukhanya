<template>
 <header class="header">
    <div class="header-child">

      <div class="flex items-center ">
        
        <img
          src="/assets/images/logo.png"
          alt="Ukukhanya Equip Solutions Logo"
          class="w-[100px] lg:w-[100px] h-auto object-contain"
        />
       
      </div>

      <nav class="hidden md:flex items-center gap-10 font-bold text-slate-700 text-sm uppercase">
        <router-link :to="{ name:'Home' }" class="nav-link">Home</router-link>
        <router-link :to="{ name:'AboutUs' }" class="nav-link">About Us</router-link>
        <router-link :to="{ name:'Services' }" class="nav-link">Services</router-link>
        <router-link :to="{ name:'Gallery' }" class="nav-link">Gallery</router-link>
      </nav>

      <div class="flex items-center gap-6">
        <div class="hidden md:flex items-center gap-2 text-blue-700 font-bold">
          <span class="text-xl">📞</span>
          <span>+27 83 727 4638</span>
        </div>

        <button
          @click="mobileMenu = !mobileMenu"
          class="md:hidden text-4xl text-blue-700"
        >
          ☰
        </button>

      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenu"
        class="md:hidden mt-6 bg-white rounded-3xl shadow-2xl p-6 border border-slate-100"
      >
        <nav class="flex flex-col gap-5 font-bold text-slate-700 uppercase">
        <router-link :to="{ name:'Home' }" class="nav-link">Home</router-link>
        <router-link :to="{ name:'AboutUs' }" class="nav-link">About Us</router-link>
        <router-link :to="{ name:'Services' }" class="nav-link">Services</router-link>
        <router-link :to="{ name:'Gallery' }" class="nav-link">Gallery</router-link>
        </nav>

      </div>
    </transition>

  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenu = ref(false)
</script>

<style scoped>

</style>