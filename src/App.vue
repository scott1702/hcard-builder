<script setup>
import BuilderForm from './components/BuilderForm.vue';
import BuilderPreview from './components/BuilderPreview.vue';
</script>

<template>
  <main class="builder">
    <div class="builder__form">
      <h1 class="builder__title">hCard Builder</h1>
      <BuilderForm></BuilderForm>
    </div>
    <div class="builder__preview">
      <BuilderPreview></BuilderPreview>
    </div>
  </main>
</template>

<style scoped lang="scss">
.builder {
  background: var(--white);
  display: flex;
  flex-direction: column;

  @include desktop {
    flex-direction: row;
  }

  &__form {
    padding: 30px;

    @include desktop {
      width: 55%;
    }
  }

  &__title {
    font-size: 2rem;
    font-weight: 500;
    margin: 0 0 30px;
  }

  &__preview {
    background: var(--aria);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 10px;
    width: 100%;

    @include desktop {
      min-height: 100vh;
      min-width: calc(var(--preview-card-width) + 20px);
      width: 45%;
    }
  }
}
</style>
