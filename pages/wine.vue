<template>
  <div>
    <!-- <header class="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500">
      <BaseHeader />
    </header> -->
    <BaseHeader />
    <main class="pt-[175px]">
      <BreadCrumbs />
      <Banner />
      <WrapperLeftRight />
    </main>
    <MainFooter />
    <hr class="boreder-0 h-[1.5px] bg-[#fff]" />
    <BottomFooter />
  </div>
</template>

<script setup>
import BaseHeader from "~/components/BaseHeader.vue";
import BreadCrumbs from "~/components/BreadCrumbs.vue";
import Banner from "~/components/Banner.vue";
import MainFooter from "~/components/MainFooter.vue";
import BottomFooter from "~/components/BottomFooter.vue";
import WrapperLeftRight from "~/components/WrapperLeftRight.vue";
</script>

<style lang="scss" scoped></style>
