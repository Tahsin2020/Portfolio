<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
import CardComponent from './reusable/CardComponent.vue'

import data from '../data/Projects.json'
import MyImage from "../assets/React-icon.svg"
data[0]["Image"] = MyImage
data[1]["Image"] = MyImage
data[2]["Image"] = MyImage
</script>
<template>
    <div>
        <NavBar></NavBar>
        <div id="titleholder">
            <h1 id="title">
                Projects
            </h1>
        </div>
        <div class="flex flex-row justify-center flex-wrap">
            <CardComponent v-for="date in data" :key="date.id" :Description="date.Description" :Image="date.Image"
                :Link="date.Link" />
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>