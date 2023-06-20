<!-- ChildComp.vue -->
<script setup>
import { defineProps } from "vue";
const props = defineProps({
    Description: String,
    Image: {
        type: String,
        default: ""
    },
    Link: {
        type: String,
        default: "#"
    }
})
console.log(props)
</script>
<template>
    <div class="shadow-md shadow-gray-600 rounded-lg w-80 py-2 mx-10  mb-[10vh]">
        <a :href="Link">
            <img :src="Image" class="w-40 mx-auto" />
        </a>
        <h2 class="mt-4 text-white text-center"> {{ Description }}</h2>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
};
</script>
