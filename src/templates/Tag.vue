<template>
  <Layout>
    <main class="page">
      <h1 class="header">Browsing #{{ $page.tag.title }}</h1>
      <PostsRow
        :title="null"
        :more_text="null"
        :posts="$page.tag.belongsTo.edges"
      />
    </main>
  </Layout>
</template>

<page-query>
  query Tag($id: ID!) {
    tag(id: $id) {
      title
      belongsTo {
        edges {
          node {
            ... on Post {
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
    }
  }
</page-query>
<script>
import PostsRow from '../components/PostsRow';
export default {
  name: 'Tag',
  components: { PostsRow },
  metaInfo() {
    return {
      title: `Browse #${this.$page.tag.title}`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: `Browse through learning material and blog posts based on ${this.$page.tag.title}.`,
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
            'web,dev,devs,website,frontend,backend,html,css,js,javascript,fullstack,developer,programming',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1.header {
  @apply text-xl font-bold font-title mb-25;
}
</style>
