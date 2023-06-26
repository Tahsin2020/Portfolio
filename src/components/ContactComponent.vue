<script setup>
import FooterComponent from './reusable/FooterComponent.vue';
import NavBar from './reusable/NavBar.vue';
</script>
<template>
    <div>
        <NavBar></NavBar>
        <div id="titleholder">
            <h1 id="title">
                Message me using this form!
            </h1>
        </div>
        <div>
            <img src="../assets/map.png" class="mb-10 px-[10vh]" />
            <div class="flex flex-row flex-wrap px-[9%] ">
                <div class="w-[400px] text-white mx-10 mt-10">
                    <div class="flex flex-row">
                        <img src="../assets/phone.png" class="w-20 pb-10" />
                        <div class="pt-3">
                            <h1 class="font-bold">604-354-5104</h1>
                            <h1 class="text-neutral-400"> Message or Call me here, I will always check my voices messages.
                            </h1>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <img src="../assets/location.png" class="w-20 pb-10" />
                        <div class="pt-3">
                            <h1 class="font-bold">Vancouver/Burnaby, BC</h1>
                            <h1 class="text-neutral-400"> Always looking for a job or a freelance job in the area.
                            </h1>
                        </div>
                    </div>
                    <div class="flex flex-row mb-10">
                        <img src="../assets/email.png" class="w-20 pb-10" />
                        <div class="pt-3">
                            <h1 class="font-bold">tahsinhasan2@gmail.com</h1>
                            <h1 class="text-neutral-400"> Email me for any positions or work requests.
                            </h1>
                        </div>
                    </div>
                </div>
                <form accept-charset="UTF-8" action="https://www.formbackend.com/f/460b66df9aece6a2" method="POST"
                    class="flex flex-row">
                    <div class="w-[40%] h-[300px] text-white mx-10">
                        <h1 id="contact" class="mb-0">Contact Form</h1>
                        <input type="text" id="fname" name="name" placeholder="Your name.."
                            class="mt-10 border-solid border-2 border-gray-600 h-[50px] pl-1 w-full text-black" />
                        <input type="text" id="fname" name="subject" placeholder="Subject.."
                            class="mt-10 border-solid border-2 border-gray-600 h-[50px] pl-1 w-full text-black" />
                        <input type="text" id="fname" name="email" placeholder="Your Email.."
                            class="mt-10 border-solid border-2 border-gray-600 h-[50px] pl-1 w-full text-black" />
                        <button class="mt-5" type="submit" value="Send" id="button">Send</button>
                    </div>
                    <div class="w-[40%] h-[300px] text-white">
                        <textarea type="text" id="fname" name="message" placeholder="Put your message here"
                            class="mt-[65px] border-solid border-2 border-gray-600 h-[200px] w-full align-top p-2"
                            text-black />
                    </div>
                </form>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>