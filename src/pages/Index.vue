<template>
  <Layout>
    <main class="page">
      <PostsRow
        v-if="$page.blog_posts.totalCount > 0"
        title="Latest Blog Posts"
        more_text="more blog posts"
        more_link="/browse/blog-posts"
        :posts="$page.blog_posts.edges"
      />
      <PostsRow
        v-if="$page.code_notes.totalCount > 0"
        title="Latest Code Notes"
        more_text="more code notes"
        more_link="/browse/code-notes"
        :posts="$page.code_notes.edges"
      />
    </main>
  </Layout>
</template>

<page-query>
  query {
    blog_posts: allPost(filter: { type: { eq: "blog_post" } }) {
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
    code_notes: allPost(filter: { type: { eq: "code_note" } }) {
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
    title: 'Index!' /*TODO*/,
  },
};
</script>
