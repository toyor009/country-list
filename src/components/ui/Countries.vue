<template>
  <div>
    <Filters
      @search-updated="updateSearchValue"
      @region-changed="updateRegionFilter"
    />

    <div class="sm:grid grid-cols-4 gap-x-lgX gap-y-14">
      <div
        v-for="(country, index) in countries"
        :key="index"
        class="rounded-md shadow m-10 sm:m-0"
      >
        <img
          :src="country.flags.svg"
          alt="Flag"
          class="object-cover w-full h-32 sm:h-48"
        />
        <div class="m-4 pb-5 sm:pb-0">
          <h6 class="mb-3 font-extrabold sm:text-lg">
            {{ country.name.common }}
          </h6>

          <p class="block">
            <span class="font-semibold"> Population: </span>
            {{ country.population }}
          </p>
          <p class="block">
            <span class="font-semibold"> Region: </span>
            {{ country.region }}
          </p>
          <p v-if="country.capital" class="block">
            <span class="font-semibold"> Capital: </span>
            {{ country.capital[0] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";

import Filters from "@/components/ui/Filters.vue";

export default defineComponent({
  name: "Countries",
  components: {
    Filters,
  },

  setup() {
    const store = useStore();
    const allCountries = computed(() => store.state.allCountries);
    const requestStatus = computed(() => store.state.requestStatus);

    const regionFilter = ref("");
    const searchValue = ref("");

    const filteredCountries = computed(() => {
      if (!regionFilter.value || regionFilter.value == "All")
        return allCountries.value;
      return allCountries.value.filter((country) => {
        return country.region == regionFilter.value;
      });
    });

    const countries = computed(() => {
      if (!searchValue.value) return filteredCountries.value;
      return filteredCountries.value.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchValue.value.toLowerCase());
      });
    });

    const updateRegionFilter = (region) => {
      regionFilter.value = region;
    };

    const updateSearchValue = (search) => {
      searchValue.value = search;
    };

    const fetchCountries = async () => {
      await store.dispatch("fetchAllCountries");
    };

    fetchCountries();

    return {
      allCountries,
      requestStatus,
      regionFilter,
      searchValue,
      filteredCountries,
      countries,
      updateRegionFilter,
      updateSearchValue,
      fetchCountries,
    };
  },
});
</script>
