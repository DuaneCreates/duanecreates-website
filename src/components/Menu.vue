<template>
  <div>
    <div
      class="overlay"
      @click="toggleMenu(false)"
      :class="{
        opened: $store.state.menu_opened,
        closed: !$store.state.menu_opened,
      }"
    ></div>
    <section
      class="menu"
      :class="{
        opened: $store.state.menu_opened,
        closed: !$store.state.menu_opened,
      }"
    >
      <div class="top">
        <button class="close" @click="toggleMenu(false)">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>

      <nav class="main">
        <g-link to="/browse/blog-posts">Blog</g-link>
        <g-link to="/browse/code-notes">Code Notes</g-link>
        <g-link to="/about">About</g-link>
      </nav>

      <nav class="tags">
        <g-link
          v-for="edge in $static.allTag.edges"
          :key="edge.node.id"
          :to="edge.node.path"
        >
          #{{ edge.node.id }}
        </g-link>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    toggleMenu(status) {
      this.$store.commit('SET_MENU_OPENED', status);
    },
  },
};
</script>
<static-query>
  query {
    allTag {
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
.overlay {
  @apply fixed h-screen w-screen;
  background-color: rgba(12, 14, 31, 0.5);
  z-index: 100;
  backdrop-filter: blur(10px);

  &.opened {
    @apply block;
  }

  &.closed {
    @apply hidden;
  }
}

section.menu {
  @apply w-full bg-white py-42 pl-50 pr-68 flex-col items-end fixed h-screen hidden overflow-y-auto;
  right: 0;
  z-index: 101;

  @screen tablet {
    width: unset;
  }

  @screen tablet-md {
    @apply py-50;
  }

  @screen tablet-lg {
    @apply py-100 pl-100 pr-120;
  }

  &.opened {
    @apply flex;
  }

  &.closed {
    @apply hidden;
  }

  .top {
    @apply flex flex-row justify-end;

    button.close {
      @apply ml-auto mt-9;

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

  nav.main {
    @apply flex flex-col mt-50 pb-50 items-end border-b border-primary-dark;

    @screen tablet {
      @apply w-full;
    }

    a {
      @apply text-primary-dark text-lg uppercase font-body mb-25 font-bold;
      transition: all 0.2s;

      &:last-of-type {
        @apply mb-0;
      }

      &:hover,
      &:focus {
        @apply outline-none text-primary;
      }
    }
  }

  nav.tags {
    @apply flex flex-col mt-50 items-end;

    a {
      @apply text-primary-dark text-md font-body mb-10 font-normal;
      transition: all 0.2s;

      &:last-of-type {
        @apply mb-0;
      }

      &:hover,
      &:focus {
        @apply outline-none text-primary;
      }
    }
  }
}
</style>
