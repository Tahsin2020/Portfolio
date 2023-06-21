<template>
    <footer class="bg-[#222222] rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/"
                    class="hover:underline">Tahsin™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.instagram.com/sheepofcode/" class="mr-4 hover:underline md:mr-6 ">Instagram</a>
                </li>
                <li>
                    <a href="https://github.com/Tahsin2020" class="mr-4 hover:underline md:mr-6">Github</a>
                </li>
                <li>
                    <router-link class="mr-4 hover:underline md:mr-6" to="/Home">Portfolio</router-link>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tahsin-hasan-6586a221a/" class="hover:underline">Linkedin</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>