<template>
  <header class="header">
    <g-link to="/" class="logo">
      <g-image
        src="~/assets/images/duanecreates.png"
        fit="contain"
        alt="Duane Creates"
      />
    </g-link>
    <nav class="tags">
      <g-link to="/tags/html">HTML</g-link>
      <g-link to="/tags/css">CSS</g-link>
      <g-link to="/tags/javascript">JavaScript</g-link>
    </nav>
    <nav class="main">
      <g-link to="/blog">Blog</g-link>
      <g-link to="/code-notes">Code Notes</g-link>
      <g-link to="/projects">Projects</g-link>
      <g-link to="/about">About</g-link>
    </nav>
    <button class="menu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
header.header {
  @apply p-50 bg-white flex flex-row items-center justify-between;

  @screen tablet-lg {
    @apply p-100;
  }

  .logo {
    @apply w-50 hidden;

    @screen tablet-md {
      @apply block;
    }
    img {
      @apply rounded-full h-auto object-contain;
    }
  }

  nav.tags {
    @apply hidden;

    @screen desktop {
      @apply flex flex-row mx-auto;
    }

    a {
      @apply no-underline font-bold text-md font-body text-primary-dark mx-15;

      &:first-of-type {
        @apply ml-0;
      }

      &:last-of-type {
        @apply mr-0;
      }

      &:hover,
      &:focus {
        @apply text-primary;
      }
    }
  }

  nav.main {
    @apply hidden;

    @screen tablet {
      @apply flex flex-row;
    }

    @screen tablet-md {
      @apply mx-auto;
    }

    a {
      @apply uppercase no-underline font-bold text-md font-body text-primary-dark mx-15;

      &:first-of-type {
        @apply ml-0;
      }

      &:last-of-type {
        @apply mr-0;
      }

      @screen tablet-lg {
        @apply text-lg mx-25;
      }

      &:hover,
      &:focus {
        @apply text-primary;
      }
    }
  }

  button.menu {
    @apply ml-auto;
    svg {
      @apply text-primary-dark text-xl;
    }

    &:hover,
    &:focus {
      @apply outline-none;
      svg {
        @apply text-primary;
      }
    }
  }
}
</style>
