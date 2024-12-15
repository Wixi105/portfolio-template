<template>
    <div class="px-5 mt-10 max-w-[950px] mx-auto">
        <div class="text-white mt-7">
            <p class="text-2xl md:text-3xl">Projects I've Worked On</p>
        </div>
        <section v-if="viewProjects">
            <div class="text-white w-2/6 mt-8 md:w-1/5">
                <Dropdown
                    v-model="option"
                    optionValue="name"
                    :options="options"
                    optionLabel="name"
                    placeholder="Select Project Type"
                    class="w-full"
                />
            </div>
            <p class="text-xs md:text-sm text-gray-400 w-ful mt-3 mb-10">
                Filter projects by type.
            </p>
            <div
                class="mt-7"
                v-if="filteredProjects.length > 0"
                v-for="project in filteredProjects"
                :key="project.name"
            >
                <ProjectComponent
                    :name="project.name"
                    :description="project.description"
                    :link="project.link"
                    :type="project.type"
                    :tools="project.tools"
                />
            </div>
            <div v-else class="text-white">
                <p>There are no projects for this item.</p>
            </div>
        </section>
        <section class="text-white" v-else>
            <p
                class="text-2xl my-10 text-green-500 underline underline-offset-8"
            >
                Page is under construction.
            </p>
        </section>
    </div>
</template>

<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import ProjectComponent from "@/components/ProjectComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import { computed, ref } from "vue";

const viewProjects = ref(false);

let option = ref("All");

const options = ref([
    { name: "All" },
    { name: "Frontend" },
    { name: "Backend" },
    { name: "FullStack" },
    { name: "Rev. Engineering" },
]);

const filteredProjects = computed(() => {
    if (option.value === "All") {
        return projects.value;
    } else {
        return projects.value.filter(
            (project) => project.type === option.value,
        );
    }
});
const projects = ref([
    {
        name: "Dashboard",
        description:
            "this is a dashboard project that I built and it contains some of the most aestethically pleasing components I think any dashboard should have, from charts to wonderful images and data tables. This is peak dash board engineering better than what the Germans could do.",
        link: "https://wixi-dash.netlify.com",
        tools: ["Javascript, ", "Vue"],
        type: "Frontend",
    },
]);
</script>

<style lang="css">
.p-dropdown {
    background-color: #393e46;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
}

.p-dropdown-items-wrapper {
    background-color: #242830;
    color: white;
    padding: 0.5rem 0.7rem;
    border-radius: 0 0 0.5rem 0.5rem;
}
</style>
