<template>
    <div class="home mx-10">
        <TheHeader 
            title="Combine with methods" 
            destination="/beans"
            mode="arrow" />
        <MethodsCard v-for="method in methodsList"
            :key="method.id"
            :beanId="beanId"
            :id="method.id" 
            :name="method.name"
            :icon="method.icon"
            :coffee="method.coffeeAmount"
            :water="method.waterAmount"
            :grind="method.grind"
            :time="method.time" />
    </div>

</template>

<script>
import TheHeader from '../components/UI/TheHeader.vue'
import MethodsCard from '../components/UI/MethodCard.vue'

export default {
    props: ['beanId'],
    components: {
        TheHeader,
        MethodsCard
    },
    computed: {
        methodsList(){
            return this.$store.getters.getMethods;
        }
    }
}
</script>