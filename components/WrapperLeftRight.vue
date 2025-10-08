<template>
  <div class="wrapper-left-right px-[80px] w-full mx-auto flex justify-start gap-[60px]">
    <LeftSide />
    <RightSide />
  </div>
</template>

<script>
import LeftSide from "./LeftSide.vue";
import RightSide from "./RightSide.vue";
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
