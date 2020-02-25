<template>
  <section class="about">
    <div class="sections">
      <ColumnSummary></ColumnSummary>
      <ColumnJourney></ColumnJourney>
      <ColumnEmail></ColumnEmail>
    </div>
  </section>
</template>

<script>
import ColumnJourney from './ColumnJourney';
import ColumnSummary from './ColumnSummary';
import ColumnEmail from './ColumnEmail';

export default {
  name: 'Footer-About',
  components: { ColumnEmail, ColumnSummary, ColumnJourney },
};
</script>

<style lang="scss" scoped>
section.about {
  @apply bg-grey-light pt-50;

  .sections {
    @apply flex flex-col px-0;

    @screen laptop {
      @apply px-50;
    }

    & > section {
      @apply w-full p-50;
    }

    @screen laptop {
      @apply flex-row flex-wrap;

      & > section {
        @apply w-1/2;
      }
    }

    @screen desktop {
      & > section {
        @apply w-1/3;
      }
    }
  }
}
</style>
