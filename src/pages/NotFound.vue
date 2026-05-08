<template>
    <div
      class="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden relative flex items-center justify-center px-6"
    >
      <!-- Background Decorations -->
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      ></div>
  
      <div
        class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"
      ></div>
  
      <!-- Content -->
      <div
        class="relative z-10 max-w-5xl mx-auto text-center"
      >
  
        <!-- 404 -->
        <h1
          class="text-[120px] md:text-[220px] font-black text-white leading-none tracking-tight"
        >
          404
        </h1>
  
        <!-- Title -->
        <h2
          class="text-4xl md:text-6xl font-black text-white uppercase mt-6"
        >
          Page Not Found
        </h2>
  
        <!-- Description -->
        <p
          class="text-blue-100 text-xl leading-relaxed mt-8 max-w-3xl mx-auto"
        >
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
  
        <!-- Buttons -->
        <div
          class="flex flex-wrap items-center justify-center gap-5 mt-12"
        >
  
          <!-- Home -->
          <router-link
            to="/"
            class="bg-white text-blue-700 hover:scale-105 transition px-10 py-5 rounded-2xl font-black text-lg shadow-2xl"
          >
            🏠 BACK TO HOME
          </router-link>
  

  
        </div>
  
        <!-- Illustration -->
        <div class="mt-20 flex justify-center">
  
          <div
            class="w-52 h-52 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-[100px] shadow-2xl animate-bounce"
          >
            💧
          </div>
  
        </div>
  
      </div>
  
    </div>
  </template>
  
<script setup lang="ts">

</script>

<style scoped>

</style>