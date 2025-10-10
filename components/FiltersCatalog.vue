<template>
    <div class="wrapper-filters-catalog mt-[35px] grid gap-[32px]">
        <SubCategories />
        <WrapperFilter />
        <SubCategories />

    </div>
</template>

<script>
import SubCategories from './SubCategories.vue';
import WrapperFilter from './WrapperFilter.vue';
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>