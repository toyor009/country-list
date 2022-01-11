<template>
  <nav class="flex justify-between shadow py-5 px-3 sm:px-10">
    <h3>Where in the world?</h3>

    <div>
      <font-awesome-icon icon="moon" class="2x" />
      Dark Mode
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>
