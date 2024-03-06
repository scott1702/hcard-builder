<script setup>
import { useBuilderStore } from '@/stores/builder';

const store = useBuilderStore();
</script>

<!-- Note: The classes in these fields are set to match hCard 1.0 spec -->
<template>
  <div class="preview vcard">
    <div class="preview__header">
      <span class="preview__name fn n">
        <span v-if="store.givenName" class="given-name">{{ store.givenName }}</span>
        <template v-if="store.givenName && store.surname">{{ ' ' }}</template>
        <span v-if="store.surname" class="family-name">{{ store.surname }}</span>
      </span>
      <img v-if="store.avatar" class="preview__avatar photo" :src="store.avatar" alt="hcard avatar" />
    </div>
    <div class="preview__body">
      <div class="preview__field">
        <label class="preview__label">Email</label>
        <a v-if="store.email" class="preview__link email" :href="`mailto:${store.email}`">
          {{ store.email }}
        </a>
      </div>
      <div class="preview__field">
        <label class="preview__label">Phone</label>
        <span v-if="store.phone" class="tel">{{ store.phone }}</span>
      </div>
      <div class="adr">
        <div class="preview__field">
          <label class="preview__label">Address</label>
          <span v-if="store.houseNumber || store.street" class="street-address">
            {{ store.houseNumber }} {{ store.street }}
          </span>
        </div>
        <div class="preview__field preview__field--no-labal">
          <span>
            <span v-if="store.suburb" class="locality">{{ store.suburb }}</span>
            <template v-if="store.state && store.suburb">, </template>
            <span v-if="store.state" class="region">{{ store.state }}</span>
          </span>
        </div>
        <div class="preview__two-col">
          <div class="preview__field preview__field--half-width">
            <label class="preview__label">Postcode</label>
            <span v-if="store.postcode" class="postal-code">{{ store.postcode }}</span>
          </div>
          <div class="preview__field preview__field--half-width">
            <label class="preview__label">Country</label>
            <span v-if="store.country" class="country-name">{{ store.country }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview {
  --label-width: 84px;

  background: var(--white);
  display: flex;
  flex-direction: column;
  max-width: var(--preview-card-width);
  width: 100%;

  &__header {
    align-items: flex-end;
    background: var(--oil-rush);
    color: var(--white);
    display: flex;
    height: 100px;
    padding: 24px 20px;
    position: relative;
  }

  &__avatar {
    height: 100px;
    object-fit: contain;
    margin-left: auto;
    right: 10px;
    position: absolute;
    top: 10px;
    width: 100px;
  }

  &__name {
    font-size: 1.4rem;
    font-weight: 500;
  }

  &__body {
    padding: 30px;
  }

  &__two-col {
    display: flex;
  }

  &__field {
    align-items: flex-end;
    border-bottom: 1px solid var(--pinball);
    display: flex;
    margin-bottom: 10px;
    min-height: 24px;
    padding-bottom: 4px;
    width: 100%;

    &--no-labal {
      padding-left: var(--label-width);
    }

    &--half-width {
      width: 50%;
    }
  }

  &__label {
    color: var(--oil-rush);
    font-size: 0.7rem;
    text-transform: uppercase;
    padding-right: 6px;
    min-width: var(--label-width);
  }

  &__link {
    color: var(--body-color);
    text-decoration: none;
  }
}
</style>