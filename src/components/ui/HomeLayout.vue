<template>
  <div>
    <NavBar />

    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "/src/components/ui/NavBar.vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    NavBar,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
