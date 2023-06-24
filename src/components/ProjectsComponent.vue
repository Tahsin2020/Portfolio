<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
import CardComponent from './reusable/CardComponent.vue'

import data from '../data/Projects.json'
import Portfolio from "../assets/Projects/Portfolio.png"
import Ticketing from "../assets/Projects/CSharp_ASP.NET.png"
import Diagnostics from "../assets/Projects/Diagnostics.png"
import OS161 from "../assets/Projects/OS161.png"
import Note_Transcriber from "../assets/Projects/Note_Transcriber.png"
import ML_LED_Cube from "../assets/Projects/ML_LED_Cube.png"
import Focus_Practice_Timer from "../assets/Projects/Focus_Practice_Timer.png"
import CareConnect from "../assets/Projects/CareConnect.png"

Note_Transcriber
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

<script>
data[0]["Image"] = Portfolio
data[1]["Image"] = Ticketing
data[2]["Image"] = Diagnostics
data[3]["Image"] = OS161
data[4]["Image"] = Note_Transcriber
data[5]["Image"] = ML_LED_Cube
data[6]["Image"] = Focus_Practice_Timer
data[7]["Image"] = CareConnect
</script>