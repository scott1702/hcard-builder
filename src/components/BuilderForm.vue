<script setup>
import { useBuilderStore } from '@/stores/builder';
import BuilderInput from './BuilderInput.vue';

const store = useBuilderStore();

/**
 * Handle the file change event and set the avatar on the store to the selected file
 */
const handleFileChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    store.avatar = e.target.result;
  };

  reader.readAsDataURL(file);
};

/**
 * Copy the contents of the hCard to the clipboard and alert the user
 */
const handleCreateHCard = () => {
  const vcardEl = document.querySelector('.vcard');

  if (!vcardEl) {
    console.error('vcard element not found');
    return;
  }

  navigator.clipboard.writeText(vcardEl.outerHTML);

  alert('hCard HTML copied to clipboard');
}
</script>

<template>
  <form class="form">
    <fieldset class="form__fieldset">
      <legend class="form__legend">Personal details</legend>
      <BuilderInput class="form__input" label="Given name" v-model="store.givenName" />
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
    <div class="form__actions">
      <input id="avatar" class="form__file-input" type="file" @change="handleFileChange">
      <label for="avatar" class="form__action">Upload avatar</label>
      <button class="form__action form__action--primary" type="button" @click="handleCreateHCard">
        Create hCard
      </button>
    </div>
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

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 20px 0 0;

    @include tablet {
      flex-wrap: nowrap;
    }
  }

  &__action {
    background-color: var(--boat-anchor);
    border: 0;
    border-bottom: 2px solid var(--oil-rush);
    border-radius: 6px;
    color: var(--white);
    cursor: pointer;
    font-size: 1.4rem;
    opacity: 0.9;
    padding: 14px 30px;
    text-align: center;
    width: 100%;

    @include tablet {
      width: 50%;
    }

    &:hover,
    &:focus-visible {
      opacity: 1;
    }

    &--primary {
      background: var(--royal-navy-blue);
      border-color: var(--tardis-blue);
    }
  }

  &__file-input {
    position: absolute;
    width: 1px;
    height: 1px;

    &:focus-visible + .form__action {
      opacity: 1;
    }
  }
}
</style>
