<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div
    class="-mt-10 py-7 px-5 c-homepage-hero__image bg-cover pb-10"
    :style="{ backgroundImage: `url(${data.data.image.url})` }"
  >
    <div class="pt-20">
      <h1 class="text-36 text-left pb-4">{{ data.data.title }}</h1>
      <p class="text-white">{{ data.data.copy }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.c-homepage-hero__image {
}
h1 {
  @apply text-42 font-display tracking-wider text-white leading-tight;
  text-shadow: 2px 3px 2px #cb22c4;
}
</style>
