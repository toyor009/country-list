<template>
  <div class="font-body">
    <NavBar />

    <main class="px-3 sm:px-10">
      <slot />
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/ui/NavBar.vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    NavBar,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
