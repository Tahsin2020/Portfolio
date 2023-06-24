<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
import CardComponent from './reusable/CardComponent.vue'

import data from '../data/Experiences.json'
import Avcorp from "../assets/Experiences/Avcorp.png"
import Newsly from "../assets/Experiences/newsly.png"
import BCTOS from "../assets/Experiences/BCTechOfSociety.png"
import CareConnect from "../assets/Projects/CareConnect.png"
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div id="titleholder">
      <h1 id="title">
        Experiences
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
data[0]["Image"] = Avcorp
data[1]["Image"] = Newsly
data[2]["Image"] = BCTOS
data[3]["Image"] = CareConnect
</script>