<template>
  <div class="process flex flex-wrap w-full justify-between">
    <span>
      <svg>
        <use xlink:href="#bean" />
      </svg>
      <p>{{ coffee }}g</p>
    </span>
    <span>
      <svg>
        <use xlink:href="#water" />
      </svg>
      <p>{{ water }}ml</p>
    </span>
    <span>
      <svg>
        <use xlink:href="#grind" />
      </svg>
      <p>{{ grind }}</p>
    </span>
    <span>
      <svg>
        <use xlink:href="#time" />
      </svg>
      <p>{{ time }}</p>
    </span>
  </div>
</template>

<script>
    export default {
        props: ['coffee', 'water', 'grind', 'time']
    }
</script>
