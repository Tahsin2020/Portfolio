<script setup>
import NavBar from './reusable/NavBar.vue';
import FooterComponent from './reusable/FooterComponent.vue';
</script>
<template>
  <div class="hello h-full">
    <NavBar></NavBar>
    <div class="flex flex-row" id="Portfolio">
      <div>
        <img src="https://samanthaming.gumlet.io/tidbits/88-css-placeholder-shown.jpg.gz" />
      </div>
      <div class="PortfolioText">
        <div id="PortfolioTitle">Full Stack Developer</div><br />
        <div id="PortfolioName">Tahsin Hasan</div><br /><br />
        <div id="PortfolioBio">Do you want to create a website? When creating websites, I personally work on everything
          from design to implementation. I also ensure proper communication between the front and backend, so that
          everything runs exactly as it should. If you are interested in my portfolio or experience - contact me!
        </div><br />
        <div>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>