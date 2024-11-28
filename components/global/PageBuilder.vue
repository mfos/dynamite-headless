<script setup>
const props = defineProps({
  layout: Object,
});
let comp = [];
// import components
comp = props.layout.map((component) => {
  const { ...data } = component;

  // split the data and the component instance so you can v-bind the data/props easier in the template
  return {
    data: data,
    // A note is that if you use path aliases for dynamic imports like @ or ~ you might experience issues.
    component: defineAsyncComponent(() =>
      import(`../builder/${data.acf_fc_layout}.vue`)
    ),
  };
});
</script>

<template>
  <div>
    <div class="page-builder">
      <component
        v-for="(component, index) in comp"
        :is="component.component"
        :key="index"
        :index="index"
        :data="{
          ...component,
        }"
      />
    </div>
  </div>
</template>
