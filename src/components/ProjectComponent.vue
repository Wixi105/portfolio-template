<template>
    <div class="text-white text-left text-sm md:text-lg leading-relaxed">
        <!-- <p class="mb-3"> <span class="bg-gray-700 px-2 py-1 text-sm rounded-md">{{ props.type }}</span></p> -->
        <p><a :href="link" target="_blank"><span class="text-green-500 underline underline-offset-4">{{ name }}</span></a>
            - {{ description }}</p>
        <p class="mt-3"><span class="text-gray-400 font-semibold">Languages</span> : <span class="italic text-green-500"
                v-for="tool in tools" :key="tool">{{ tool }} </span></p>
    </div>
</template>

<script setup lang="ts">
const { name, description, type, link, tools
} = defineProps(['name', 'description', 'type', 'link', 'tools'])
</script>