<template>
  <!-- Main navigation container -->
  <nav
    class="relative flex w-full flex-wrap items-center justify-between py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4 bg-[#222222] "
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <!-- Hamburger button for mobile view -->
      <button
        class="block border-0 bg-transparent px-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
        type="button" data-te-collapse-init data-te-target="#navbarSupportedContent4"
        aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
            <path fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <!-- Collapsible navigation container -->
      <!-- Navbar title -->
      <a class="pr-2 text-xl font-semibold text-white" href="#">Navbar</a>


      <!-- Right elements -->
      <div class="relative flex items-center bg-[#222222]">
        <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent4" data-te-collapse-item>
          <!-- Left navigation links -->
          <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
            <!-- Dashboard link -->
            <li class="my-4 lg:my-0 lg:pr-20" data-te-nav-item-ref>
              <router-link
                class="text-white opacity-60 hover:opacity-100 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/Bio" data-te-nav-link-ref>Bio</router-link>
            </li>
            <!-- Dashboard link -->
            <li class="my-4 lg:my-0 lg:pr-20" data-te-nav-item-ref>
              <router-link
                class="text-white opacity-60 hover:opacity-100 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/Experiences" data-te-nav-link-ref>Experiences</router-link>
            </li>
            <!-- Dashboard link -->
            <li class="my-4 lg:my-0 lg:pr-20" data-te-nav-item-ref>
              <router-link
                class="text-white opacity-60 hover:opacity-100 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/Projects" data-te-nav-link-ref>Projects</router-link>
            </li>
            <!-- Team link -->
            <li class="my-4 lg:my-0 lg:pr-20" data-te-nav-item-ref>
              <router-link
                class="text-white opacity-60 hover:opacity-100 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/Skills" data-te-nav-link-ref>Skills</router-link>
            </li>
            <!-- Projects link -->
            <li class="my-4 lg:my-0 lg:pr-20 bg-[#222222]" data-te-nav-item-ref>
              <router-link
                class="text-white opacity-60 hover:opacity-100 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/Contact" data-te-nav-link-ref>Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>