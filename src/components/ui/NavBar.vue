<template>
  <nav
    class="sticky top-0 left-0 right-0 bg-white flex justify-between shadow py-5 px-3 sm:px-10 text-sm"
  >
    <h3 class="font-extrabold md:text-2xl lg:text-3xl">Where in the world?</h3>

    <div class="cursor-pointer md:text-lg">
      <font-awesome-icon icon="moon" />
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
