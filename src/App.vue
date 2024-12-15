<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComponent from "@/components/NavComponent.vue";
</script>
<template>
  <div class="bg-wixi h-screen overflow-auto w-screen">
    <div class="xl:max-w-[1300px] mx-auto">
    <NavComponent />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.fade-enter-active {
  animation: fade-in 0.22s 0.22s both;
}
.fade-leave-active {
  animation: fade-out 0.22s;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
    filter: blur(0);
  }
  100% {
    opacity: 0;
    filter: blur(10px);
  }
}
</style>