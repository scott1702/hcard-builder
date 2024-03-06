<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
});

const model = defineModel();
</script>

<template>
  <div class="field">
    <label class="field__label">
      {{ label }}
      <input class="field__input" :type="type" v-model="model" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.field {
  margin-bottom: 10px;

  &__label {
    text-transform: uppercase;
    display: flex;
    font-size: 0.85rem;
    gap: 4px;
    flex-direction: column;
  }

  &__input {
    border-radius: 4px;
    border: 1px solid grey;
    background: var(--white);
    padding: 6px 10px;
    font-size: 1.1rem;
    line-height: 1.6;
  }
}
</style>
