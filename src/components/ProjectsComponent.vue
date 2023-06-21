<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
import CardComponent from './reusable/CardComponent.vue'

import data from '../data/Projects.json'
import Portfolio from "../assets/Projects/Portfolio.png"
import Ticketing from "../assets/Projects/CSharp_ASP.NET.png"
import Diagnostics from "../assets/Projects/Diagnostics.png"
data[0]["Image"] = Portfolio
data[1]["Image"] = Ticketing
data[2]["Image"] = Diagnostics
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
                :Link="date.Link" :Class="date.Class" :Position="date.Position" />
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>