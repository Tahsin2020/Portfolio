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
      <div class="PortfolioText">
        <div id="PortfolioTitle">Full Stack Developer</div><br />
        <div id="PortfolioName">Tahsin Hasan</div><br /><br />
        <div id="PortfolioBio">Do you want to create a website? When creating websites, I personally work on everything
          from design to implementation. I also ensure proper communication between the front and backend, so that
          everything runs exactly as it should. If you are interested in my portfolio or experience - contact me!
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