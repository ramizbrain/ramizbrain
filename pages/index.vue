<template>
  <!-- Section : Hero Image -->
  <!-- md: split 2 col -->
  <div
    class="box gap-4 flex flex-col md:flex-row-reverse md:justify-between md:items-center mt-[65px] py-[30px] bg-black-800"
  >
    <!-- 1st col -->
    <img
      class="flex-1 md:max-w-[560px] rounded-[60px] rounded-bl-none"
      src="/profile.png"
      alt="profile"
    />
    <!-- 2nd col -->
    <div class="flex-1">
      <h1 class="text-[35px] md:text-[50px] mb-4 leading-[110%]">
        Hi, I’m Ramiz <br /><b>Product Designer</b>
      </h1>
      <span class="text-gray-400"
        >This is my second brain, my way to do something impossible
        everyday</span
      >

      <NuxtLink
        to="/"
        class="flex items-center w-fit gap-2 mt-4 hover:text-brand-400"
      >
        <img src="~/assets/arrow-right-green.svg" alt="arrow right" />
        <span>More about me</span>
      </NuxtLink>
    </div>
  </div>
  <!-- Section : Article List -->
  <div class="box mt-[70px] space-y-8">
    <BlogItem />
    <BlogItem />
  </div>
</template>
