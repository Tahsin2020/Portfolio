<!-- ChildComp.vue -->
<script setup>
import { defineProps } from "vue";
const props = defineProps({
    Description: String,
    Image: {
        type: String,
        default: ""
    },
    Link: String,
    Class: {
        type: String,
        default: "shadow-gray-600"
    },
    Position: String
})
console.log(props)
</script>
<template>
    <div class="shadow-md rounded-lg w-80 py-2 mx-10  mb-[10vh] bg-[#444444] " :class="Class">
        <div v-if="Link" class=" h-full">
            <a :href="Link">
                <img :src="Image" class="max-h-40 mx-auto" />
            </a>
            <h2 class="mt-4 text-white text-center"> {{ Description }}</h2><br />
            <h3 class="mt-4 text-slate-300 text-center mt-auto"> {{ Position }}</h3>
        </div>
        <div v-else> <router-link to="/Projects">
                <img :src="Image" class="max-h-40 mx-auto" />
            </router-link>
            <h2 class="mt-4 text-white text-center"> {{ Description }}</h2>
            <h3 class="mt-4 text-slate-300 text-center mt-auto"> {{ Position }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
};
</script>
