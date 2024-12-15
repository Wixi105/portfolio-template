<template>
    <div class="text-white">
        <div class="flex justify-around mt-10 mx-auto">
            <section class="px-5 max-w-[700px] md:w-full md:mt-10 text-sm md:text-base leading-66">
                <p>
                    <img src="@/assets/images/horse.jpg" alt="Responsive image"
                        class="lg:rounded-lg w-[50%] float-right ml-2 md:ml-8" />
                </p>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu nisi nec
                    augue tincidunt maximus.
                </p>
                <p class="mb-4">
                    Pellentesque eget lectus tincidunt, pulvinar enim eu, maximus nunc.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
                </p>
                <p class="mb-4">Sed do eiusmod tempor incididunt.</p>
                <p class="mb-4">
                    Ut labore et dolore magna aliqua at
                    <span><a href="https://example.com" target="_blank"
                            class="text-green-500 underline underline-offset-4">Company Name</a></span>
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat et sed magna.
                </p>
                <p class="mb-4">
                    Duis aute irure dolor -
                    <span class="text-green-500 underline underline-offset-8">
                        <RouterLink to="/page-one">Lorem</RouterLink>
                    </span>
                    and
                    <span class="text-green-500 underline underline-offset-8">
                        <RouterLink to="/page-two">Ipsum</RouterLink>
                    </span>
                </p>
                <p class="mb-4">
                    Excepteur sint
                    <span>
                        <a class="text-green-500 underline underline-offset-4" href="https://example.org">
                            Project
                        </a> </span>occaecat cupidatat non proident
                </p>
                <p class="hidden md:block">
                    Sunt in culpa qui officia deserunt mollit anim id est laborum -->
                </p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavComponent from "@/components/NavComponent.vue";
import { useHead } from "@vueuse/head";

useHead(() => ({
    title: "Lorem Ipsum | Software Developer",
}));
</script>
