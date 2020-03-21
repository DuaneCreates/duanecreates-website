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
    posts: allPost(filter: { type: { eq: "blog_post" } }) {
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
    title: 'Blog Posts - Web Developer Journey',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          "Read my experiences as a web developer who's been working in the industry for a couple of years. Browse through the blog posts by Duane Creates.",
      },
      {
        key: 'author',
        name: 'author',
        content: 'Duane Creates',
      },
      {
        key: 'keywords',
        name: 'keywords',
        content:
          'web developer,developer,website developer,professional,industry,web industry,dev industry,programming,programming industry,work as a dev,work developer,work programming industry',
      },
    ],
  },
};
</script>
