<template>
  <div
    class="box flex justify-between bg-black-900/95 text-white py-[20px] backdrop-blur-md"
  >
    <img src="~/assets/ramizbrain-logo.svg" alt="ramizbrain logo" />

    <ul class="md:flex gap-8 hidden">
      <li><NuxtLink class="btn-link" to="/about">About</NuxtLink></li>
      <li><NuxtLink class="btn-link" to="/about">Github</NuxtLink></li>
      <li><NuxtLink class="btn-link" to="/about">Behance</NuxtLink></li>
    </ul>

    <img
      class="fill-white md:hidden"
      src="~/assets/menu-3-line.svg"
      alt="hamburger"
    />
  </div>
</template>
