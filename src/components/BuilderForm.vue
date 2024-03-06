<script setup>
import { useBuilderStore } from '@/stores/builder';
import BuilderInput from './BuilderInput.vue';

const store = useBuilderStore();
</script>

<template>
  <form class="form">
    <fieldset class="form__fieldset">
      <legend class="form__legend">Personal details</legend>
      <BuilderInput class="form__input" label="Given Name" v-model="store.givenName" />
      <BuilderInput class="form__input" label="Surname" v-model="store.surname" />
      <BuilderInput class="form__input" type="email" label="Email" v-model="store.email" />
      <BuilderInput class="form__input" type="tel" label="Phone" v-model="store.phone" />
    </fieldset>
    <fieldset class="form__fieldset">
      <legend class="form__legend">Address</legend>
      <BuilderInput class="form__input" label="House name or #" v-model="store.houseNumber" />
      <BuilderInput class="form__input" label="Street" v-model="store.street" />
      <BuilderInput class="form__input" label="Suburb" v-model="store.suburb" />
      <BuilderInput class="form__input" label="State" v-model="store.state" />
      <BuilderInput class="form__input" label="Postcode" v-model="store.postcode" />
      <BuilderInput class="form__input" label="Country" v-model="store.country" />
    </fieldset>
  </form>
</template>

<style scoped lang="scss">
.form {
  &__fieldset {
    border: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 20px 0 0;
    padding: 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  &__legend {
    width: 100%;
    border-bottom: 1px solid var(--pinball);
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-bottom: 22px;
    padding-bottom: 6px;
  }

  &__input {
    width: 100%;

    @include tablet {
      width: calc(50% - 6px);
    }
  }
}
</style>
