<template>
    <header :class="mode == 'cross' ? 'justify-between' : 'justify-center'" class="flex relative items-start my-20">
        <h1 :class="mode == 'cross' ? 'text-3xl' : 'text-xl' ">{{title}} <span v-if="highligtedTitle" class="font-bold"> {{highligtedTitle}}</span></h1>
        <router-link :to="destination" :class="mode == 'cross' ? 'cross-container' : 'arrow-container'">
          <svg v-if="mode === 'cross'" xmlns="http://www.w3.org/2000/svg" width="22.015" height="22.015" viewBox="0 0 22.015 22.015">
            <path class="cross" d="M16.008,6V16.008m0,0V26.015m0-10.008H26.015m-10.008,0H6" transform="translate(-5 -5)"/>
          </svg>
          <svg class="h-6 w-8" v-else>
            <use xlink:href="#arrowBack" />
          </svg>
        </router-link>
      </header>
</template>

<script>
export default{
    props: ['title', 'highligtedTitle', 'destination', 'mode']
}
</script>

<style scoped>

.cross{
  fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px
}

.cross-container{
  @apply bg-black rounded-full p-4 ml-3;
}

.arrow-container{
  @apply absolute left-0;
}
</style>