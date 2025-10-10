<template>
  <div class="wrapper-filter">
    <div class="wrapper-title mb-[16px] flex justify-between">
      <p class="text-[#1a1a1a] text-[18px]">Цена</p>
      <img
        class=""
        src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2016L12%2012L17%2016'%20stroke='%23525252'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
        alt="arrow-up-filter"
      />
    </div>
    <div class="wrapper-menu max-w-[310px] w-full">
      <div class="wrapper-range-filter w-full">
        <div class="wrapper-inputs w-full mb-[16px] flex gap-[8px]">
          <input
            type="number"
            name=""
            id=""
            step="1"
            value="2500"
            min="2500"
            max="1400000"
            class="w-1/2 border rounded-[8px] py-[10px] px-[16px] text-[grey]"
          />
          <input
            type="number"
            name=""
            id=""
            step="1"
            value="5000"
            min="2500"
            max="1400000"
            class="w-1/2 border rounded-[8px] py-[10px] px-[16px] text-[grey]"
          />
        </div>
        <div class="wrapper-range-component"></div>
      </div>
      <div class="wrapper-diapason-values flex flex-col gap-[16px]">
        <div class="wrapper-item-diapason-values">
          <div class="radio-and-label flex justify-start gap-[12px]">
            <div class="wrapper-radio-button flex items-center">
              <input type="radio" class="w-[19px] h-[19px]" />
            </div>
            <p class="text-[#000]">до 5000 ₸</p>
          </div>
        </div>
        <div class="wrapper-item-diapason-values">
          <div class="radio-and-label flex justify-start gap-[12px]">
            <div class="wrapper-radio-button flex items-center">
              <input type="radio" class="w-[19px] h-[19px]" />
            </div>
            <p class="text-[#000]">до 5000 ₸</p>
          </div>
        </div>
        <div class="wrapper-item-diapason-values">
          <div class="radio-and-label flex justify-start gap-[12px]">
            <div class="wrapper-radio-button flex items-center">
              <input type="radio" class="w-[19px] h-[19px]" />
            </div>
            <p class="text-[#000]">до 5000 ₸</p>
          </div>
        </div>
        <div class="wrapper-item-diapason-values">
          <div class="radio-and-label flex justify-start gap-[12px]">
            <div class="wrapper-radio-button flex items-center">
              <input type="radio" class="w-[19px] h-[19px]" />
            </div>
            <p class="text-[#000]">до 5000 ₸</p>
          </div>
        </div>
        <div class="wrapper-item-diapason-values">
          <div class="radio-and-label flex justify-start gap-[12px]">
            <div class="wrapper-radio-button flex items-center">
              <input type="radio" class="w-[19px] h-[19px]" />
            </div>
            <p class="text-[#000]">до 5000 ₸</p>
          </div>
        </div>
      </div>
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
