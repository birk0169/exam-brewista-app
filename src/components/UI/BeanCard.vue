<template>
<router-link :to="'/methods/' + id">

    <div :class="mode" class="bean-card mb-12 bg-red-200 rounded-3xl overflow-hidden">
        <div>
            <img :src="imagePath"/>
        </div>
        <div class="p-6">
            <h3 class="font-bold pb-4">{{title}}</h3>
            <p>{{description}}</p>
            <div class="details-container my-4 flex flex-wrap">
                <div>
                    <h4 class="uppercase">Process</h4>
                    <p>{{details.process}}</p>
                </div>
                <div>
                    <h4 class="uppercase">Roast Profile</h4>
                    <p>{{details.profile}}</p>
                </div>
                <div>
                    <h4 class="uppercase">Varieties</h4>
                    <p>{{details.varieties}}</p>
                </div>
                <div>
                    <h4 class="uppercase">Country</h4>
                    <p>{{details.country}}</p>
                </div>
            </div>
        </div>
    </div>
</router-link>
</template>

<script>

export default{
    props: ['id', 'title', 'description', 'mode', 'details'],
    computed: {
        imagePath(){
            const style = this.mode === 'dark-green' ? 'header-coffeecollective-dark.jpg' :  'header-coffeecollective.jpg';
            return 'http://localhost:3080/' + style;
        }
    }
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