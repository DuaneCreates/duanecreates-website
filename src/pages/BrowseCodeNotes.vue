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
    title: 'Code Notes - Learn HTML, CSS & JavaScript',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Learn through short posts about HTML, CSS, JavaScript, Vue.js & TailwindCSS topics. Browse through the code notes posted by Duane Creates.',
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
          'learn,code,html,css,javascript,vue,vuejs,vue.js,tailwind,tailwindcss,js,learn online,learn to code, learning code,learn free,free code,free coding tips,coding tips,code tips',
      },
    ],
  },
};
</script>
