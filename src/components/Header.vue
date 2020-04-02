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
      <g-link
        v-for="(edge, index) in $static.allTag.edges"
        :key="edge.node.id"
        :to="edge.node.path"
      >
        #{{ edge.node.id }}
      </g-link>
    </nav>
    <nav class="main">
      <g-link to="/browse/blog-posts">Blog</g-link>
      <g-link to="/browse/code-notes">Code Notes</g-link>
      <g-link to="/about">About</g-link>
    </nav>
    <button class="menu" @click="toggleMenu(true)">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleMenu(status) {
      this.$store.commit('SET_MENU_OPENED', status);
    },
  },
};
</script>
<static-query>
  query {
    allTag(limit: 4) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
</static-query>

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
      @apply rounded-full h-auto object-contain border-2 border-transparent;
      transition: all 0.2s;
    }

    &:focus,
    &:hover {
      @apply outline-none;

      img {
        @apply border-primary shadow-md;
      }
    }
  }

  nav.tags {
    @apply hidden;

    @screen desktop {
      @apply flex flex-row mx-auto;
    }

    a {
      @apply no-underline font-bold text-md font-body text-primary-dark mx-15;
      transition: all 0.2s;

      &:first-of-type {
        @apply ml-0;
      }

      &:last-of-type {
        @apply mr-0;
      }

      &:hover,
      &:focus {
        @apply text-primary outline-none;
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
      transition: all 0.2s;

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
        @apply text-primary outline-none;
      }
    }
  }

  button.menu {
    @apply ml-auto;
    svg {
      @apply text-primary-dark text-xl;
      transition: all 0.2s;
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
