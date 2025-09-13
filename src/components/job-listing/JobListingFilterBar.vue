<template>
  <div
    class="impact-job-listing-filter-bar d-flex justify-content-between align-items-center px-4 py-2"
  >
    <div class="d-flex flex-wrap gap-2">
      <ChipTag
        v-for="(tag, i) in model"
        :key="i"
        :tag="tag"
        is-removeable
        @remove="handleRemove"
      ></ChipTag>
    </div>

    <button class="btn--clear" @click="clear">Clear</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import ChipTag from "@/components/chips/ChipTag.vue";
import { JobTag } from "@/types";

export default defineComponent({
  components: {
    ChipTag,
  },
  props: {
    modelValue: {
      type: Array as PropType<JobTag[]>,
      default: () => [],
    },
  },
  computed: {
    // Computed proxy for v-model support
    model: {
      get(): JobTag[] {
        return this.modelValue;
      },
      set(modelValue: JobTag[]) {
        this.$emit("update:modelValue", modelValue);
      },
    },
  },

  methods: {
    handleRemove(tag: JobTag): void {
      let key = Object.keys(tag)[0] as keyof JobTag;
      const filteredTag = this.modelValue.filter((value: JobTag) => {
        return value[key] !== tag[key];
      });
      this.$emit("update:modelValue", filteredTag);
    },
    clear() {
      this.$emit("update:modelValue", []);
    },
  },
});
</script>

<style scoped>
.impact-job-listing-filter-bar {
  background-color: var(--white);
  min-height: 4rem;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0 hsla(180, 8%, 52%, 0.1);
  &:hover {
    box-shadow: 0 0 3.5rem 0 hsla(180, 24%, 15%, 0.1);
  }

  .btn--clear {
    color: var(--primary);
    font-weight: 700;
    text-decoration: underline;
    transition: 0.2 ease-in-out;
    &:hover {
      color: var(--dark);
    }
  }
}
</style>
