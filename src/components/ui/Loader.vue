<template>
  <font-awesome-icon icon="circle-notch" :class="spinnerClass" />
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Loader",

  props: {
    size: {
      type: String,
      default: "1",
    },

    isInline: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const spinnerClass = computed(() => {
      return `${
        props.isInline ? "" : "d-flex ml-auto mr-auto"
      } fa-spin mb-0 fa-${props.size}x`;
    });

    return { spinnerClass };
  },
});
</script>
