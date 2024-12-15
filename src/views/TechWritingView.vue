<template>
    <div class="text-white">
        <div class="px-5 mt-12 max-w-[700px] lg:max-w-[900px] mx-auto">
            <section>
                <p class="text-white text-3xl">Technical Writing</p>
                <p class="mt-4 text-sm md:text-md lg:text-lg">
                    Below are the programming-related articles I’ve written (see
                    also my non-technical writings).
                </p>
            </section>

            <section class="mt-16">
                <p class="text-2xl md:text-3xl">2023</p>
                <div class="ml-4 lg:ml-8 lg:text-lg">
                    <ul class="list-disc" v-for="post in posts">
                        <li class="mt-5">
                            <span
                                class="text-green-500 underline underline-offset-4"
                                ><RouterLink :to="post.route">{{
                                    post.title
                                }}</RouterLink></span
                            >
                            {{ post.description }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface PostLink {
    title: string;
    route: string;
    description: string;
}

const posts: PostLink[] = [
    {
        title: "The HTTP Handler Interface and Middleware",
        route: "posts/http-interface-and-middleware",
        description:
            "              presents my insights into the http handler interface, and the use of middleware in Go. (October)",
    },
];
</script>
