<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
import CardComponent from './reusable/CardComponent.vue'
import data from '../data/Skills.json'

import React from "../assets/React-icon.svg"
import Flask from "../assets/Flask_logo.svg"
import JS from "../assets/JS_Logo.png"
import Python from "../assets/Python-logo.svg"
import SDL2 from "../assets/SDL_Logo.svg"
import C from "../assets/C_Logo.png"
import CSS from "../assets/CSS_logo.svg"
import Csharp from "../assets/c-sharp-logo.png"
import Cpp from "../assets/C++_Logo.svg"
import CircuitPython from "../assets/CircuitPython.svg"

import ASPNET from "../assets/Asp.net.svg"
import Bootstrap from "../assets/Bootstrap_logo.svg"
import GameMaker from "../assets/GameMaker.png"
import MYSQL from "../assets/MySQL_logo.svg"
import NUMPY from "../assets/NumPy_logo_2020.svg"
import SDL from "../assets/SDL_Logo.svg"
import Tailwind from "../assets/Tailwind_CSS_Logo.svg"
import Unity from "../assets/Unity_logo.png"
import Vue from "../assets/vuelogo.png"

</script>
<template>
    <div>
        <NavBar></NavBar>
        <div id="titleholder">
            <h1 id="title">
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
data[4]["Image"] = SDL2
data[5]["Image"] = C
data[6]["Image"] = Csharp
data[7]["Image"] = Cpp
data[8]["Image"] = CircuitPython
data[9]["Image"] = CSS
data[10]["Image"] = ASPNET
data[11]["Image"] = Bootstrap
data[12]["Image"] = GameMaker
data[13]["Image"] = MYSQL
data[14]["Image"] = NUMPY
data[15]["Image"] = SDL
data[16]["Image"] = Tailwind
data[17]["Image"] = Unity
data[18]["Image"] = CircuitPython
data[19]["Image"] = Vue
</script>