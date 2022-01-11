<template>
  <div>
    <component :is="components[activeComponent]" />
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from "vue";

const Countries = defineAsyncComponent(() =>
  import("@/components/ui/Countries.vue")
);

export default defineComponent({
  name: "Home",

  setup() {
    const components = [Countries];
    const activeComponent = ref(0);

    return { components, activeComponent };
  },
});
</script>
