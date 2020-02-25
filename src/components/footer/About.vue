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
import { required, email } from 'vuelidate/lib/validators';
import ColumnJourney from './ColumnJourney';
import ColumnSummary from './ColumnSummary';
import ColumnEmail from './ColumnEmail';

export default {
  name: 'Footer-About',
  components: { ColumnEmail, ColumnSummary, ColumnJourney },
};
</script>

<style lang="scss" scoped>
/*TODO line height, font*/
section.about {
  @apply bg-grey-light pt-50;

  .sections {
    @apply flex flex-col;

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
