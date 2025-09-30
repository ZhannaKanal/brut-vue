 <!-- <template>
  <div class="px-[80px] w-full mx-auto">
    <div class="w-full mx-auto flex justify-between pt-[10px]"
    :class="scrolled ? 'bg-white text-transparent duration-200 min-h-[30px] max-h-[8px]' : ''">
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

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
 -->

 <template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500">
    <div class="px-[80px] w-full mx-auto">
      <!-- Top bar -->
      <div
        class="w-full flex justify-between items-center overflow-hidden transition-all duration-500"
        :class="scrolled ? 'h-[16px] bg-white text-transparent' : ''"
      >
        <div class="max-w-[285px] w-full flex justify-between">
          <div class="flex">
            <NuxtImg />
            <p>Алматы</p>
          </div>
          <div class="flex">
            <NuxtImg />
            <p>Адреса винотек</p>
          </div>
        </div>
        <div class="max-w-[392px] w-full flex justify-between">
          <p>Для бизнеса</p>
          <p>Оплата и доставка</p>
          <p>Гарантия</p>
        </div>
      </div>

      <!-- Middle row (logo + search + icons) -->
      <div
        class="w-full flex justify-between items-center transition-all duration-500"
        :class="scrolled ? 'mt-0' : 'mt-2'"
      >
        <div>
          <NuxtImg src="/" alt="Logo" width="168" height="36" />
        </div>
        <div>
          <input type="search" class="border px-2 py-1 rounded" />
        </div>
        <div class="flex gap-4">
          <NuxtImg />
          <NuxtImg />
        </div>
      </div>

      <!-- Banner -->
      <div
        class="w-full bg-[#efe3d1] rounded-[6px] p-[10px] transition-all duration-500"
        :class="scrolled ? 'mt-1' : 'mt-4'"
      >
        <p class="text-center text-[14px] text-[#1A1A1A]">
          Обновленный сайт запущен в бета-версии. В редких случаях возможны
          неполадки. Благодарим за поддержку!
        </p>
      </div>

      <!-- Nav -->
      <div
        class="w-full flex justify-between text-[16px] transition-all duration-500"
        :class="scrolled ? 'mt-2' : 'mt-4'"
      >
        <div class="bg-[#f5f5f5] text-[#1a1a1a] py-2 px-4 rounded-[6px]">
          Вино
        </div>
        <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Игристые вина</div>
        <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Крепкий алкоголь</div>
        <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Ликеры и Биттеры</div>
        <div class="text-[#1a1a1a] py-2 px-4 rounded-[6px]">Сеты</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20; // trigger after small scroll
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
