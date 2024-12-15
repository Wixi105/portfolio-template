<template>
  <div class="skeleton-loader">
    <div class="header">
      <div class="title skeleton-box"></div>
    </div>
    <div class="content">
      <div class="paragraph skeleton-box"></div>
      <div class="paragraph skeleton-box"></div>
      <div class="heading skeleton-box"></div>
      <ul class="list">
        <li v-for="i in 8" :key="i" class="list-item skeleton-box"></li>
      </ul>
      <div v-for="i in 5" :key="i">
        <div class="heading skeleton-box"></div>
        <div class="paragraph skeleton-box"></div>
        <div class="paragraph skeleton-box"></div>
        <div class="code-block skeleton-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonLoader'
}
</script>

<style scoped>
.skeleton-loader {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color:inherit;
}

.skeleton-box {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.title {
  height: 60px;
  margin-bottom: 20px;
}

.paragraph {
  height: 20px;
  margin-bottom: 10px;
}

.heading {
  height: 30px;
  margin: 20px 0 10px;
  width: 60%;
}

.list {
  list-style: none;
  padding: 0;
}

.list-item {
  height: 20px;
  margin-bottom: 10px;
  width: 80%;
}

.code-block {
  height: 100px;
  margin: 20px 0;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>