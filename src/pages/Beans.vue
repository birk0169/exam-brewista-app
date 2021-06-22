<template>
    <div class="home mx-10">
        <TheHeader 
            title="Pick your coffee" 
            destination="/"
            mode="arrow" />
        <div class="md:flex md:items-stretch md:flex-wrap md:justify-between">
            <BeanCard v-for="bean in beansList" 
                :key="bean.id" 
                :id="bean.id" 
                :title="bean.name"
                :description="bean.description"
                :details="bean.details"
                :mode="bean.cardMode" />
        </div>
    </div>
</template>

<script>
import TheHeader from '../components/UI/TheHeader.vue'
import BeanCard from '../components/UI/BeanCard.vue'

export default {
    components: {
        TheHeader,
        BeanCard
    },
    computed: {
        beansList(){
            return this.$store.getters.getBeans;
        }
    }
}
</script>