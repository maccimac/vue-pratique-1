<template>
  <div
    class="impact-chip impact-chip--tag"
    :class="{
      'impact-chip--removeable': isRemoveable,
      'impact-chip--selected': isSelected,
    }"
    role="group"
  >
    <button
      class="chip-value"
      @click.stop="isSelected ? null : $emit('click')"
      :tabindex="isSelected || isRemoveable ? -1 : 0"
    >
      <slot v-if="$slots.default" />
      <span v-else-if="tag">
        {{ tag.role || tag.level || tag.language || tag.tool }}
      </span>
    </button>
    <button
      class="btn--remove"
      v-if="isRemoveable"
      @click="$emit('remove', tag)"
      :aria-label="`remove ${tag}`"
      tabindex="0"
    >
      &nbsp;
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { JobTag } from "@/types";

export default defineComponent({
  props: {
    tag: {
      type: Object as PropType<JobTag>,
    },
    isRemoveable: Boolean,
    isSelected: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.impact-chip--tag {
  display: inline-flex;
  align-items: stretch;
  background-color: var(--light-bg);
  color: var(--primary);
  padding: 0;
  border-radius: 0.33rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: 1.5rem;
  &.impact-chip--selected {
    .chip-value {
      background-color: var(--primary);
      color: var(--white);
      cursor: default;
    }
  }
  &.impact-chip--removeable {
    .chip-value {
      border-radius: 0.33rem 0 0 0.33rem;
      cursor: default;
      &:hover {
        background-color: inherit;
        color: inherit;
      }
    }
  }
  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    height: auto;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chip-value {
    border-radius: 0.33rem;
    padding: 0.5rem 0.6rem 0.4rem;
    color: var(--primary);
    font-size: 1rem;
    line-height: 1rem;
    height: auto;
    display: inline-flex;
    font-weight: 500;
    &:hover {
      background-color: var(--primary);
      color: var(--light-bg);
    }
  }
  .btn--remove {
    border-radius: 0 0.33rem 0.33rem 0;
    background-color: var(--primary);
    min-width: 1.5rem;
    background-image: url("@/assets/images/icon-remove.svg");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
      background-color: var(--darker);
    }
  }
}
</style>
