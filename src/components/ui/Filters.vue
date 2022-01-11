<template>
  <div
    class="sticky bg-white top-16 sm:top-20 left-0 right-0 py-10 sm:flex justify-between"
  >
    <div class="sm:w-2/5 sm:mb-0 mb-10 h-12 flex items-center shadow px-5">
      <font-awesome-icon icon="search" />
      <input
        type="text"
        class="w-full ml-3 outline-none"
        placeholder="Search for a country.."
        v-model="search"
      />
    </div>

    <div class="relative w-3/5 sm:w-2/5 md:w-1/4">
      <div
        class="w-full h-12 flex items-center justify-between shadow cursor-pointer px-5"
        @click="showRegions = !showRegions"
      >
        <span> {{ selectedRegion }} </span>
        <font-awesome-icon icon="caret-down" />
      </div>

      <ul
        v-if="showRegions"
        class="w-full bg-white absolute shadow top-12 p-3"
        ref="regionOptions"
        @blur="closeRegionOptions"
      >
        <li
          v-for="(region, index) in regions"
          :key="index"
          class="cursor-pointer hover:bg-slate-500 px-2"
          @click="selectRegion(region)"
        >
          {{ region }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Filters",

  emits: ["search-updated", "region-changed"],

  setup(props, { emit }) {
    const search = ref("");
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];
    const selectedRegion = ref("Filter by Region");
    const showRegions = ref(false);
    const regionOptions = ref();

    const selectRegion = (region) => {
      selectedRegion.value = region;
      emit("region-changed", region);
      closeRegionOptions();
      clearSearchValue();
    };

    const closeRegionOptions = () => {
      showRegions.value = false;
    };

    const clearSearchValue = () => {
      search.value = "";
    };

    return {
      search,
      regions,
      selectedRegion,
      showRegions,
      regionOptions,
      selectRegion,
      closeRegionOptions,
    };
  },

  watch: {
    search: function (searchValue) {
      this.$emit("search-updated", searchValue);
    },
  },
});
</script>
