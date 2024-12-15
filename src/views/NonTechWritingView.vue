<template>
    <div class="text-white">
        <div class="px-5 mt-12 max-w-[700px] lg:max-w-[900px] mx-auto">
            <section>
                <p class="text-white text-3xl">Non Technical Writing</p>
                <p class="mt-4 text-sm md:text-md lg:text-lg">
                    Apart from my technical writing, I occasionally delve into
                    more philosophical or poetic topics, some of which I find
                    fascinating, and enjoy. Some are also just my own internal
                    mumblings
                </p>
            </section>
            <section class="mt-16">
                <p class="text-2xl md:text-3xl">2024</p>
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
        title: "Lorem Ipsum Sit Amet",
        route: "posts/lorem-ipsumy-text",
        description:
            "Lorem ipsum dolor sit amet",
    },
];
</script>
