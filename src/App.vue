<template>
  <div>
    <component :is="$route?.meta?.layout || 'div'">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

<style></style>
