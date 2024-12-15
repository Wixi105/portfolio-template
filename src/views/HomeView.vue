<template>
    <div class="text-white">
        <div class="flex justify-around mt-10 mx-auto">
            <section
                class="px-5 max-w-[700px] md:w-full md:mt-10 text-sm md:text-base leading-66"
            >
                <p>
                    <img
                        src="@/assets/images/smartphone-large.jpg"
                        srcset="
                            @/assets/images/smartphone-small.jpg  414w,
                            @/assets/images/smartphone-large.jpg  828w,
                            @/assets/images/tablet-portrait.jpg   768w,
                            @/assets/images/tablet-landscape.jpg 1024w,
                            @/assets/images/desktop-hd.jpg       1280w,
                            @/assets/images/desktop-full-hd.jpg  1920w
                        "
                        sizes="(max-width: 414px) 414px,
                            (max-width: 768px) 768px,
                            (max-width: 1024px) 1024px,
                            (max-width: 1280px) 1280px,
                            1920px"
                        alt="Responsive image"
                        class="lg:rounded-lg w-[50%] float-right ml-2 md:ml-8"
                    />
                </p>
                <p class="mb-4">
                    I love building software, and I love every stage of the
                    development process.
                </p>
                <p class="mb-4">
                    Building good software saves time and makes people happy,
                    thus I strive to build, and conceptualize software that will
                    achieve just that.
                </p>
                <p class="mb-4">I live in Accra, Ghana.</p>
                <p class="mb-4">
                    My day is mostly spent at
                    <span
                        ><a
                            href="https://deepx.app"
                            target="_blank"
                            class="text-green-500 underline underline-offset-4"
                            >Deep X</a
                        ></span
                    >
                    where I work as a Software Engineer using React/NextJS,
                    Typescript and related technologies.
                </p>
                <p class="mb-4">
                    I love writing articles -
                    <span class="text-green-500 underline underline-offset-8">
                        <RouterLink to="/tech-writing">Technical</RouterLink>
                    </span>
                    and
                    <span class="text-green-500 underline underline-offset-8">
                        <RouterLink to="/non-tech">Non-Technical</RouterLink>
                    </span>
                </p>
                <p class="mb-4">
                    I work on
                    <span>
                        <a
                            class="text-green-500 underline underline-offset-4"
                            href="https://shabbofy.com"
                        >
                            Shabbofy
                        </a> </span
                    >with my friends
                </p>
                <p class="hidden md:block">
                    In 2023, I discovered I have a terrible fear of heights -->
                </p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavComponent from "@/components/NavComponent.vue";
import { useHead } from "@vueuse/head";

useHead(() => ({
    title: "Eric Junior | Software Engineer",
}));
</script>
