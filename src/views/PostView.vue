<template>
    <div
        class="px-5 my-10 max-w-[700px] mx-auto break-words"
        v-if="frontMatter"
    >
        <p class="text-white italic mb-4 text-sm font-bold">
            {{ formatDate(frontMatter.pubDatetime) }}
        </p>
        <section class="prose prose-white lg:prose-lg" v-html="body"></section>
    </div>
    <div v-else>
        <SkeletonLoader />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { nextTick, onMounted, ref, watch } from "vue";
import getHTMLFromMarkdown, {
    type HTMLContent,
    type FrontMatterData,
} from "@/utils/getHTMLFromMarkdown";
import { marked } from "marked";
import { useHead } from "@vueuse/head";
import Prism from "prismjs";
import "prismjs/components/prism-jsx"; // Import the JSX language grammar
import "prismjs/components/prism-go"; // Import the Go language grammar
import "prismjs/themes/prism-tomorrow.css";

import sanitizeHtml from "sanitize-html";
import SkeletonLoader from "@/components/BlogSkeleton.vue";

const route = useRoute();
const slug = route.params.slug as string;
let body = ref<string | null>(null);
let frontMatter = ref<FrontMatterData | null>(null);

// Use useHead to set meta tags
useHead(() => ({
    title: frontMatter.value?.title,
    meta: [
        { property: "og:title", content: frontMatter.value?.title },
        { property: "og:description", content: frontMatter.value?.description },
        { property: "og:image", content: frontMatter.value?.ogImage },
        { property: "og:url", content: `https://something.com/posts/${slug}` },
        { property: "og:type", content: "article" },
    ],
}));

onMounted(async () => {
    try {
        // {content, data}
        const result: HTMLContent | string = await getHTMLFromMarkdown(slug);
        if (typeof result === "string") {
            console.log("error: fetching page from getHTMLMarkdown: ", result);
            return;
        }
        const { content, data } = result;

        body.value = sanitizeHtml(await renderedMarkdown(content), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                "pre",
                "code",
            ]),
            allowedClasses: {
                pre: ["*"],
                code: ["*"],
                span: [
                    "token",
                    "punctuation",
                    "keyword",
                    "string",
                    "function",
                    "comment",
                    "operator",
                    "builtin",
                ],
            },
        });
        frontMatter.value = data;
        await nextTick(() => scrollToHash());
    } catch (error) {
        console.error("Error rendering markdown:", error);
        //default value for the body
    }
});

const formatDate = (date: Date) => {
    return date.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    });
};

watch(
    () => route.hash,
    (newHash) => {
        if (newHash) {
            nextTick(() => scrollToHash());
        }
    },
);

const scrollToHash = () => {
    setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, 100);
};

const renderedMarkdown = async (markdownContent: string) => {
    const renderer = new marked.Renderer();

    //DOES NOT WORK.
    renderer.heading = (text, level) => {
        const slug = text.toLowerCase().replace(/[^\w]+/g, "-");
        return `<h${level} id="${slug}">${text}</h${level}>`;
    };

    renderer.code = (code, language) => {
        const lang = language || "plaintext";

        let highlighted;
        try {
            if (Prism.languages[lang]) {
                highlighted = Prism.highlight(
                    code,
                    Prism.languages[lang],
                    lang,
                );
            } else {
                highlighted = code;
            }
        } catch (error) {
            console.error(`Error highlighting ${lang} code:`, error);
            highlighted = code; // Fallback to raw code
        }

        return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
    };

    const markedOptions = {
        renderer,
        gfm: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
    };

    return marked(markdownContent, markedOptions);
};
</script>

<style scoped>
@import "prismjs/themes/prism-tomorrow.css";

.prose pre {
    padding: 0;
    margin: 0;
    background-color: transparent;
}
.prose code {
    color: inherit;
    font-weight: inherit;
    background-color: transparent;
    padding: 0;
}
.prose .token {
    color: inherit;
}
</style>
