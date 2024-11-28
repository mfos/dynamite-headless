<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const {
  data: posts,
  refresh,
  pending,
} = await useFetch<any>(config.public.wordpressUrl + '/wp-json/wp/v2/posts', {
  transform: (posts) => {
    return posts.map((post) => ({
      name: post.title.rendered,
      slug: post.slug,
    }));
  },
});

// if (route.params.slug) {
//   let lastIndex = route.params.slug.length - 1;

//   if (!route.params.slug[lastIndex]) {
//     slug.value = route.params.slug[lastIndex - 1];
//   } else {
//     slug.value = route.params.slug[lastIndex];
//   }
// } else {
//   slug.value = 'home';
// }

// const { data, pending, error, refresh } = await useFetch(
//   'http://local.dynamite-technology.com-wp/wp-json/wp/v2/pages',
//   {
//     query: { slug: slug.value },
//   }
// );
</script>

<template>
  <div>
    <MainNav />

    <h1 class="text-slate-400"></h1>

    <div v-for="post in posts" :key="post.slug">
      <!-- {{ posts }} -->
      <h1>{{ post.name }} - {{ post.slug }}</h1>
    </div>
  </div>
</template>
