<script setup>
const props = defineProps({
  data: Array,
});

const row = props.data.data.row;
let comp = [];

comp = row.map((component) => {
  const { ...data } = component;
  // split the data and the component instance so you can v-bind the data/props easier in the template
  return {
    data: data,
    //A note is that if you use path aliases for dynamic imports like @ or ~ you might experience issues.
    component: defineAsyncComponent(() =>
      import(`../builder/${data.acf_fc_layout}.vue`)
    ),
  };
});
</script>
<template>
  <div class="row bg-pink-500 py-8" :class="data.data.row_options">
    {{ data.data.row_options }}
    <component
      v-for="(component, index) in comp"
      :is="component.component"
      :key="index"
      :index="index"
      :data="{
        ...component,
      }"
    />
    <!-- {{ comp }} -->
    <!-- <div class="mb-8">{{ data.data }}</div>
    <div>{{ row }}</div> -->
  </div>
</template>
