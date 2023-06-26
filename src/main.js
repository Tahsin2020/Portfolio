import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import BioComponent from "./components/BioComponent";
import ExperiencesComponent from "./components/ExperiencesComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import SkillsComponent from "./components/SkillsComponent";
import ContactComponent from "./components/ContactComponent";
import "./index.css";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/Contact/", component: ContactComponent },
    { path: "/Skills/", component: SkillsComponent },
    { path: "/Projects/", component: ProjectsComponent },
    { path: "/Experiences/", component: ExperiencesComponent },
    { path: "/Home/", component: BioComponent },
    { path: "/Bio/", component: BioComponent },
    { path: "/", component: BioComponent },
    { path: "/Portfolio/Contact/", component: ContactComponent },
    { path: "/Portfolio/Skills/", component: SkillsComponent },
    { path: "/Portfolio/Projects/", component: ProjectsComponent },
    { path: "/Portfolio/Experiences/", component: ExperiencesComponent },
    { path: "/Portfolio/Home/", component: BioComponent },
    { path: "/Portfolio/Bio/", component: BioComponent },
    { path: "/Portfolio/", component: BioComponent },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
