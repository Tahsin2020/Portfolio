<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
import Earth from "../assets/Earth.png"
</script>
<template>
  <div class="hello h-auto">
    <NavBar></NavBar>
    <div class="flex-wrap" id="Portfolio">
      <div class="w-[528px] h-[528px]">
        <img :src="Earth" />
      </div>
      <div class="PortfolioText px-5 md:px-0">
        <div id="PortfolioTitle">Full Stack Developer</div><br />
        <div id="PortfolioName">Tahsin Hasan</div><br /><br />
        <div id="PortfolioBio">I'm a Full Stack Software Engineer for 2 years building and designing software, in all
          areas starting from web development to embedded software. If you wish to know what technologies I can work with
          and experience I have just look around my portfolio, and contact me for any positions on the contact page.
        </div><br />
        <div>
          <router-link to="/Projects" id="button">Projects</router-link>
          <router-link to="/Contact" id="button">Contact</router-link>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>