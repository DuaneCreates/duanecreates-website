<template>
  <section class="about">
    <div class="sections">
      <ColumnSummary />
      <ColumnJourney />
    </div>
  </section>
</template>

<script>
import ColumnJourney from './ColumnJourney';
import ColumnSummary from './ColumnSummary';

export default {
  name: 'Footer-About',
  components: { ColumnSummary, ColumnJourney },
};
</script>

<style lang="scss" scoped>
section.about {
  @apply bg-grey-light pt-50;

  .sections {
    @apply flex flex-col px-0;

    @screen tablet-lg {
      @apply px-50;
    }

    & > section {
      @apply w-full p-50;
    }

    @screen tablet-lg {
      @apply flex-row flex-wrap;

      & > section {
        @apply w-1/2;
      }
    }

    @screen laptop {
      & > section {
        @apply w-1/2;
      }
    }
  }
}
</style>
