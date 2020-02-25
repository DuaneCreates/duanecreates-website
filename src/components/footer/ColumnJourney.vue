<template>
  <section class="journey">
    <h3>Follow my journey</h3>
    <a href="#" class="social-link">
      <p class="social">Instagram</p>
      <p class="desc">Where I share my day-to-day dev experiences.</p>
    </a>
    <a href="#" class="social-link">
      <p class="social">Twitter</p>
      <p class="desc">Find short-form of my Instagram posts here.</p>
    </a>
    <a href="#" class="social-link">
      <p class="social">YouTube</p>
      <p class="desc">
        Check out my frontend dev tutorials, thought processes and journey on
        YouTube.
      </p>
    </a>
    <a href="#" class="social-link">
      <p class="social">Github</p>
      <p class="desc">All my open-source projects go here</p>
    </a>
  </section>
</template>

<script>
export default {
  name: 'Column-Journey',
};
</script>

<style lang="scss" scoped>
section.journey {
  h3 {
    @apply text-primary-dark text-xxl font-bold mb-20;
  }

  a.social-link {
    @apply mb-20;
    p.social {
      @apply text-md text-primary-dark font-bold uppercase relative;
      transition: all 0.2s;

      &:before {
        @apply absolute text-primary text-xl opacity-0;
        content: '\2022';
        left: -0.9em;
        top: -0.31em;
        transition: all 0.2s;
      }
    }

    p.desc {
      @apply text-lg text-primary-dark font-normal mb-20;
    }

    &:hover,
    &:focus {
      p.social {
        @apply text-primary;

        &:before {
          @apply opacity-100;
          left: -0.5em;
        }
      }
    }

    &:last-of-type {
      p.desc {
        @apply mb-0;
      }
    }
  }
}
</style>
