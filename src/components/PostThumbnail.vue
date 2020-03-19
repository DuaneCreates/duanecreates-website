<template>
  <article class="post-thumbnail">
    <header>
      <g-link :to="post.path">
        <g-image :src="post.image" fit="cover" :alt="post.title" />
      </g-link>
    </header>
    <div class="body-container">
      <div class="tags-container">
        <!--TODO link-->
        <g-link v-for="tag in post.tags" :key="tag" to="/">#{{ tag }}</g-link>
      </div>
      <g-link :to="post.path" class="title">
        <h2>
          {{ post.title }}
        </h2>
      </g-link>
      <p class="summary">{{ post.summary }}</p>
      <footer>
        <p class="date">
          <g-link :to="post.path">{{ post.date }}</g-link>
        </p>
        <span class="seperator"><span class="disc">&bull;</span></span>
        <p class="read">
          <g-link :to="post.path">{{ post.read_minutes }} min read</g-link>
        </p>
        <g-link :to="post.path" class="more small"
          ><span>read {{ post.type.replace('_', ' ') }}</span>
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </g-link>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PostThumbnail',
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
article.post-thumbnail {
  @apply w-full;

  & > header {
    @apply bg-primary w-full border-2 border-b-0 border-primary rounded-t-10 overflow-hidden;
    img {
      @apply object-cover w-full h-200;
      transition: all 0.2s;
    }

    a {
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
  }

  & > .body-container {
    @apply flex flex-col items-start bg-white p-20 border-2 border-t-0 border-primary rounded-b-10 overflow-hidden;

    & > .tags-container {
      @apply flex flex-row flex-wrap;

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

    & > .title {
      @apply text-xxl text-primary-dark font-bold;
      transition: all 0.2s;

      &:hover,
      &:focus {
        @apply text-primary outline-none;
      }
    }

    & > p.summary {
      @apply mt-20 text-primary-dark font-normal text-md;
    }

    & > footer {
      @apply mt-20 flex flex-row justify-between items-center w-full;

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
          top: -0.8em;
          left: -0.17em;
        }
      }

      .more {
        @apply ml-auto;
      }
    }
  }
}
</style>
