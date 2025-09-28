<template>
  <div class="px-[80px] w-full mx-auto">
    <div class="w-full mx-auto flex justify-between pt-[10px]">
      <div class="max-w-[285px] w-full flex justify-between">
        <div class="flex">
          <NuxtImg></NuxtImg>
          <p>Алматы</p>
        </div>
        <div class="flex">
          <NuxtImg></NuxtImg>
          <p>Адреса винотек</p>
        </div>
      </div>
      <div class="max-w-[392px] w-full flex justify-between">
        <p>Для бизнеса</p>
        <p>Оплата и доставка</p>
        <p>Гарантия</p>
      </div>
    </div>
    <div class="w-full mx-auto flex justify-between pt-2">
      <div>
        <NuxtImg src="/" alt="Logo" width="168" height="36"></NuxtImg>
      </div>
      <div>
        <NuxtImg></NuxtImg>
        <p></p>
      </div>
      <div>
        <input type="search" />
        <NuxtImg></NuxtImg>
      </div>
      <div>
        <NuxtImg></NuxtImg>
        <NuxtImg></NuxtImg>
      </div>
    </div>
    <div class="w-full mx-auto bg-[#efe3d1] rounded-[6px] p-[10px]">
      <div class="text-center text-[14px] text-[#1A1A1A] mr-[10px] ml-[16px]">
        Обновленный сайт запущен в бета-версии. В редких случаях возможны
        неполадки. Благодарим за поддержку!
      </div>
    </div>
    <div class="w-full mx-auto flex justify-between mt-4 text-[16px]">
      <div class="bg-[#f5f5f5] text-[#1a1a1a] py-2 px-4 rounded-[6px]">
        Вино
      </div>
      <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Игристые вина</div>
      <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Крепкий алкоголь</div>
      <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Ликеры и Биттеры</div>
      <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Сеты</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
