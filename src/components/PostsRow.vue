<template>
  <section class="posts-row">
    <h1>{{ title }}</h1>
    <div></div>
    <g-link to="/" class="more small"
      ><span >{{ more_text }}</span>
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </g-link>
  </section>
</template>

<script>
export default {
  name: 'PostsRow',
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
  & > h1 {
    @apply text-xl uppercase font-bold font-title;
  }
}
</style>
