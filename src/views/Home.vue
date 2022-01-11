<template>
  <div>
    <Filters @search-updated="update" @region-changed="update" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import Filters from "@/components/ui/Filters.vue";

export default defineComponent({
  name: "Home",
  components: {
    Filters,
  },

  methods: {
    update(search) {
      console.log(" >>>> search updated", search);
    },
  },
});
</script>
