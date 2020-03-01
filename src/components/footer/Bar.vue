<template>
  <section class="bar">
    <div class="social-links">
      <a href="https://www.instagram.com/duanecreates/" rel="nofollow">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="https://twitter.com/DuaneCreates" rel="nofollow">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a href="https://www.youtube.com/c/DuaneCreates" rel="nofollow">
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
      <a href="https://github.com/DuaneCreates" rel="nofollow">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
    <p class="copyright">&copy; 2020 Duane Creates</p>
  </section>
</template>

<script>
export default {
  name: 'Footer-Bar',
};
</script>

<style lang="scss" scoped>
section.bar {
  @apply bg-white flex flex-col px-50 py-20;

  @screen tablet-lg {
    @apply flex-row justify-between items-center px-100;
  }

  p.copyright {
    @apply text-sm text-primary-dark font-normal mt-20 font-title;

    @screen tablet-lg {
      @apply mt-0;
    }
  }

  .social-links {
    @apply flex flex-row -mx-10;

    @screen laptop {
      @apply -mx-15;
    }

    a {
      @apply mx-10 relative;
      top: 0;
      margin-bottom: 0;
      transition: all 0.2s;

      @screen laptop {
        @apply mx-15;
      }

      svg {
        @apply text-primary-dark text-xl;
        transition: all 0.2s;
      }

      &:hover,
      &:focus {
        @apply outline-none;
        top: -0.25em;
        margin-bottom: -0.25em;

        svg {
          @apply text-primary;
        }
      }
    }
  }
}
</style>
