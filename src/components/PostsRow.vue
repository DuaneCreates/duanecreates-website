<template>
  <section class="posts-row">
    <h1>{{ title }}</h1>
    <div class="posts-container">
      <div
        class="post-thumbnail-wrapper"
        v-for="post in posts"
        :key="post.node.slug"
      >
        <PostThumbnail :post="post.node" />
      </div>
    </div>
    <g-link to="/" class="more small"
      ><span>{{ more_text }}</span>
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </g-link>
  </section>
</template>

<script>
import PostThumbnail from './PostThumbnail';
export default {
  name: 'PostsRow',
  components: { PostThumbnail },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Posts',
    },
    more_text: {
      type: String,
      required: false,
      default: 'More Posts',
    },
    posts: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-row {
  @apply mb-100;

  & > h1 {
    @apply text-xl uppercase font-bold font-title mb-25;
  }

  .posts-container {
    @apply flex flex-row flex-wrap -m-15 mb-25;

    .post-thumbnail-wrapper {
      @apply w-full p-15;

      @screen tablet-md {
        @apply w-1/2;
      }

      @screen desktop {
        @apply w-1/4;
      }
    }
  }
}
</style>
