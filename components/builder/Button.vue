<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div>
    <!-- {{ data }} -->
    <!-- tt {{ data[0].button_label }} tt -->
    <button class="c-button">{{ data.data.button_label }}</button>
    Button component
  </div>
</template>
