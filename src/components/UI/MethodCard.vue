<template>
<router-link :to="'/methodsteps/' + beanId + '/' + id">
    <div class="flex items-center p-6 mb-8 bg-gray-100 rounded-xl">
        <svg class="icon">
            <use :xlink:href="'#' + icon" />
        </svg>
        <div class="w-full ml-2 p-2">
        <h3 class="font-bold text-xl">{{name}}</h3>
        <MethodInfoBar 
            :coffee="coffee"
            :water="water"
            :grind="grind"
            :time="time"
            />
        </div>
    </div>
</router-link>
</template>

<script>

import MethodInfoBar from './MethodInfoBar.vue';

export default{
    components: {
        MethodInfoBar
    },
    props: ['beanId', 'id', 'name', 'icon', 'coffee', 'water', 'grind', 'time'],
}

</script>

<style scoped>
.details-container div{
    @apply mt-6;
    width: 50%;
}
.details-container div p{
    @apply font-bold text-sm;
    width: 50%;
}

.dark-green{
    background: #2F4442;
    color: #E2E2E2;
}
.dark-green .details-container div p, .dark-green h3{   
    color: #5D78BD;
}

.beige{
    background: #CDCBBF;
    color: #707070;
}
.beige .details-container div p, .beige h3{   
    color: black;
}
</style>