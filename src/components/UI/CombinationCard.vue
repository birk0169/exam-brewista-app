<template>
    <div class="card rounded-xl mb-10 flex flex-col items-center overflow-hidden bg-gray-100">
        <div class="image-container">
            <div v-if="isFavorite" class="favorite-banner absolute text-white bg-black rounded-full p-2 m-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
            </svg>
            </div>
            <img
                class="h-52 md:h-56 lg:h-64 xl:h-72"
                :src="imagePath"
            />
        </div>
        <div class="flex justify-between w-full items-center px-6">
            <svg class="icon">
                <use :xlink:href="'#' + process.icon" />
            </svg>
            <div class="flex flex-col p-4 justify-center items-center  text-center">
                <h3 class="uppercase text-lg font-bold">{{process.name}}</h3>
                <h4 class="text-sm text-gray-500">{{coffeeBean.name}} from {{coffeeBean.makers}}</h4>
            </div>
        </div>
        <div class="p-6 w-full">
            <MethodInfoBar 
                :coffee="process.coffeeAmount"
                :water="process.waterAmount"
                :grind="process.grind"
                :time="process.time"
            />
        </div>
    </div>
</template>

<script>

import MethodInfoBar from './MethodInfoBar.vue';

    export default{
        components: {
            MethodInfoBar
        },
        props: {
            process: {
                required: true
            },
            coffeeBean: {
                required: true
            },
            isFavorite: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            imagePath() {
                return 'http://localhost:3080/' + this.process.image;
            }
        }
    }
</script>

<style>

.icon{
    height: 51px;
    width: 39px;
    color: black;
}

.process{
    color: #AFAFAF;
}

.process span{
    @apply flex items-center text-sm;
}

.process svg{
    width: 10px;
    height: 10px;
    margin-right: 5px;
}

.image-container {
  @apply flex justify-items-center overflow-hidden relative;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  width: 100%;
}

.image-container img {
  object-fit: cover;
  object-position: center;
  width: 100%;
}
</style>