<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
import CardComponent from './reusable/CardComponent.vue'
import data from '../data/Skills.json'

import Flask from "../assets/Logos/Flask_logo.svg"
import JS from "../assets/Logos/JS_Logo.png"
import Python from "../assets/Logos/Python-logo.svg"
import C from "../assets/Logos/C_Logo.png"
import CSS from "../assets/Logos/CSS_logo.svg"
import Csharp from "../assets/Logos/c-sharp-logo.png"
import Cpp from "../assets/Logos/C++_Logo.svg"
import CircuitPython from "../assets/Logos/CircuitPython.svg"
import ASPNET from "../assets/Logos/Asp.net.svg"
import Bootstrap from "../assets/Logos/Bootstrap_logo.svg"
import GameMaker from "../assets/Logos/GameMaker.png"
import MYSQL from "../assets/Logos/MySQL_logo.svg"
import NUMPY from "../assets/Logos/NumPy_logo_2020.svg"
import SDL from "../assets/Logos/SDL_Logo.svg"
import Tailwind from "../assets/Logos/Tailwind_CSS_Logo.svg"
import Unity from "../assets/Logos/Unity_logo.png"
import MongoDB from "../assets/Logos/MongoDB.png"


import Vue from "../assets/vuelogo.png"
import React from "../assets/React-icon.svg"

</script>
<template>
    <div>
        <NavBar></NavBar>
        <div id="titleholder">
            <h1 id="title" class="text-3xl md:text-5xl">
                Skills
            </h1>
        </div>
        <div class="flex flex-row justify-center flex-wrap">
            <CardComponent v-for="date in data" :key="date.id" :Description="date.Description" :Image="date.Image"
                :Link="date.Link" :Class="date.Class" />
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>


<script>
data[0]["Image"] = React
data[1]["Image"] = Flask
data[2]["Image"] = JS
data[3]["Image"] = Python
data[4]["Image"] = C
data[5]["Image"] = Csharp
data[6]["Image"] = Cpp
data[7]["Image"] = CSS
data[8]["Image"] = ASPNET
data[9]["Image"] = Bootstrap
data[10]["Image"] = GameMaker
data[11]["Image"] = MYSQL
data[12]["Image"] = NUMPY
data[13]["Image"] = SDL
data[14]["Image"] = Tailwind
data[15]["Image"] = Unity
data[16]["Image"] = CircuitPython
data[17]["Image"] = Vue
data[18]["Image"] = MongoDB
// order an array of objects with name
data.sort(function (a, b) {
    if (a["Description"] < b["Description"]) {
        return -1;
    }
    if (a["Description"] > b["Description"]) {
        return 1;
    }
    return 0;
});
</script>