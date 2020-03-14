<template>
  <Layout>
    <main class="page">
      <PostsRow v-if="$page.blog_posts.totalCount > 0"
        title="Latest Blog Posts"
        more_text="more blog posts"
        :posts="$page.blog_posts.edges"
      />
      <!--<PostsRow
        title="Latest Code Notes"
        more_text="more code notes"
        :posts="posts"
      />-->

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
    </main>
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<page-query>
  query {
    blog_posts: allBlogPost {
      totalCount
      edges {
        node {
          title
          date
          path
          slug
          summary
          image
          read_minutes
          type
        }
      }
    }
  }
</page-query>
<script>
import PostsRow from '../components/PostsRow';
export default {
  components: { PostsRow },
  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
