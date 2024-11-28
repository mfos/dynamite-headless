<script setup>
import { ref } from 'vue';
const route = useRoute();
const config = useRuntimeConfig();
const slug = ref('');

// console.log('slug: + ' + slug);
if (route.params.slug) {
  let lastIndex = route.params.slug.length - 1;

  if (!route.params.slug[lastIndex]) {
    slug.value = route.params.slug[lastIndex - 1];
  } else {
    slug.value = route.params.slug[lastIndex];
  }
} else {
  slug.value = 'homepage';
}

const { data, refresh, pending } = await useFetch(
  config.public.wordpressUrl + '/wp-json/wp/v2/pages',
  {
    query: { slug: slug.value },
  }
);
</script>

<template>
  <div>
    <SiteHeader />

    <!-- {{ data[0].acf.page_builder_components }} -->

    <PageBuilder :layout="data[0].acf.page_builder_components" />
  </div>
</template>
