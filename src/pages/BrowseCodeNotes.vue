<template>
  <Layout>
    <main class="page">
      <PostsRow
        v-if="$page.posts.totalCount > 0"
        :title="null"
        :more_text="null"
        :posts="$page.posts.edges"
      />
    </main>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost(filter: { type: { eq: "code_note" } }) {
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
