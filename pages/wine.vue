<template>
  <div>
    <!-- <header class="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500">
      <BaseHeader />
    </header> -->
    <BaseHeader/>
    <main class="pt-[175px]">
      <BreadCrumbs />
      <Banner />
      <div class="min-h-[700px] bg-slate-500"></div>
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
import BaseHeader from "~/components/BaseHeader.vue";
import BreadCrumbs from "~/components/BreadCrumbs.vue";
import Banner from "~/components/Banner.vue";
import MainFooter from "~/components/MainFooter.vue";
</script>

<style lang="scss" scoped></style>
