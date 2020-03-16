<template>
  <main class="page">
    <section class="read-container">
      <!--TODO proper text-->
      <h1>{{ post.title }}</h1>
      <a :href="post.image" class="image-container">
        <g-image :src="post.image" fit="cover" :alt="post.title" />
      </a>
      <section class="info-container">
        <p class="date">
          <!--          TODO no link?-->
          <g-link to="/">{{ post.date }}</g-link>
        </p>
        <span class="seperator"><span class="disc">&bull;</span></span>
        <p class="read">
          <g-link to="/">{{ post.read_minutes }} min read</g-link>
        </p>
      </section>
      <div v-html="$page.post.content" />
      <section class="tags-container">
        <!--        TODO real tags-->
        <g-link v-for="tag in post.tags" :key="tag" to="/">#{{ tag }}</g-link>
      </section>
      <section class="more-container">
        <!--        TODO more-->
        <!--<g-link to="/" class="direction">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
          <h3>Hello World</h3>
        </g-link>
        <g-link to="/" class="direction">
          <h3>Bring big traffic</h3>
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </g-link>-->
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Read',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  metaInfo: {
    title: 'read',
  },
};
</script>

<style lang="scss" scoped>
section.read-container {
  @apply mx-auto mb-200;
  max-width: 800px;

  h1 {
    @apply text-primary-dark font-bold text-xxl font-title;
  }

  h2 {
    @apply text-primary-dark font-bold text-xl mt-20 font-title;
  }

  p {
    @apply text-primary-dark font-normal text-md mt-20 font-body;
  }

  .image-container {
    @apply block mt-20 overflow-hidden;
    img {
      @apply object-cover w-full h-300;
      transition: all 0.2s;
    }

    &:focus,
    &:hover {
      @apply outline-none;

      img {
        -webkit-filter: contrast(1.4) saturate(1.4);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }

  section.tags-container {
    @apply flex flex-row flex-wrap mt-20;

    a {
      @apply text-primary text-base font-normal mr-10 mb-10;
      transition: all 0.2s;

      &:hover,
      &:focus {
        @apply text-primary-dark outline-none;
      }

      &:last-of-type {
        @apply mr-0 mb-0;
      }
    }
  }

  section.more-container {
    @apply mt-50 flex flex-row w-full justify-between;

    a.direction {
      @apply rounded-10 text-white bg-primary-dark flex flex-row justify-between items-center py-16 px-24 font-bold font-body;
      transition: all 0.2s;

      &:hover,
      &:focus {
        @apply outline-none bg-primary shadow-md;
      }

      &:first-of-type {
        @apply mr-5;

        h3 {
          @apply ml-25;
        }
      }

      &:last-of-type {
        h3 {
          @apply mr-25;
        }
      }
    }
  }

  section.info-container {
    @apply my-20 flex flex-row items-center w-full;

    p.date,
    p.read {
      a {
        @apply text-primary-dark font-normal text-base;
        transition: all 0.2s;

        &:hover,
        &:focus {
          @apply text-primary outline-none;
        }
      }
    }

    span.seperator {
      @apply mx-10 relative;

      .disc {
        @apply text-xl absolute text-primary;
        top: -0.4em;
        left: -0.17em;
      }
    }
  }
}
</style>
