<script setup lang="ts">
const route = useRoute();
// Replace 'http://localhost:3000' with your frontend location
const config = useRuntimeConfig();
const current = config.public.wordpressUrl + route.fullPath;
// IMPORTANT
// If your frontend is http then use http
// in your useFetch endpoint
// If it is https then use https
// Replace 'http://wp.websitegoblin.com' with your backend location
const {
  data: navigation,
  pending,
  error,
  refresh,
} = await useFetch(
  config.public.wordpressUrl + '/wp-json/wp/v2/main-navigation'
);
</script>

<template>
  <div>
    <div class="py-5 bg-slate-400 w-full">
      <a
        class="text-white text-sm px-3"
        v-for="item in navigation"
        :key="item.name"
        :href="item.url"
        :aria-current="item.url === current ? 'page' : undefined"
        >{{ item.name }}</a
      >
    </div>
  </div>
</template>
