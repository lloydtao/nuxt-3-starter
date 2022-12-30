<template>
  <div>
    <div class="text-base font-semibold leading-7">
      <p class="text-gray-900 text-center">Counter: {{ getCount }}</p>
      <button
        type="button"
        class="mt-1 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="increment"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const getCount = computed(() => store.getCount);
    const { increment } = store;
    return { getCount, increment };
  },
});
</script>
