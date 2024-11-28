<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div class="bg-slate-500 py-7 px-5">
    <h2 class="text-slate-50 text-36 text-center">{{ data.data.cta_title }}</h2>
  </div>
</template>
