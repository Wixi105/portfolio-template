<template>
  <nav
      class="font-inter text-white md:flex md:justify-between lg:flex lg:items-center lg:justify-between px-5 pt-10 pb-6">
    <div>
      <p class="text-4xl">
        <RouterLink to="/">Lorem Ipsum's Site</RouterLink>
      </p>
      <!-- <p class="pt-3 font-semibold">Software Engineer</p> -->
    </div>
    <div>
      <ul class="flex items-center text-[9.35px] xs:text-[11px] mt-5 lg:text-base">
        <li class="hover:underline underline-offset-4">
          <RouterLink to="/" activeClass='underline text-green-500'
          >Home
          </RouterLink>
        </li>
        <li class="ml-6 hover:underline underline-offset-4">
          <RouterLink to="/projects" activeClass='underline text-green-500'
          >Projects
          </RouterLink>
        </li>
        <li class="ml-6 hover:underline underline-offset-4">
          <RouterLink to="/tech-writing" activeClass='underline text-green-500'
          >Tech Writing
          </RouterLink>
        </li>
        <li class="ml-6 hover:underline underline-offset-4">
          <RouterLink to="/non-tech" activeClass='underline text-green-500'
          >Non-Tech
          </RouterLink>
        </li>
        <li class="ml-6 hover:underline underline-offset-4"><a href="mailto:something+website@domain.com">Email</a>
        </li>
      </ul>
    </div>
  </nav>
  <p class="px-5">
    <hr class="mt-1 w-full md:w-[92%] md:mx-auto"/>
  </p>
</template>

<script setup lang="ts">

</script>