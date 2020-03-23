<template>
  <section class="journey">
    <h3>Follow my journey</h3>
    <a href="https://www.instagram.com/duanecreates/" class="social-link" target="_blank" rel="me">
      <p class="social">Instagram</p>
      <p class="desc">Where I share my day-to-day experiences.</p>
    </a>
    <a href="https://twitter.com/DuaneCreates" class="social-link" target="_blank" rel="me">
      <p class="social">Twitter</p>
      <p class="desc">Find short-forms of my Instagram posts.</p>
    </a>
    <a href="https://www.youtube.com/c/DuaneCreates" class="social-link" target="_blank" rel="me">
      <p class="social">YouTube</p>
      <p class="desc">
        Subscribe for dev tutorials, thought processes and journey updates.
      </p>
    </a>
    <a href="https://github.com/DuaneCreates" class="social-link" target="_blank" rel="me">
      <p class="social">Github</p>
      <p class="desc">Check out my open-source projects</p>
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
      @apply outline-none;
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
