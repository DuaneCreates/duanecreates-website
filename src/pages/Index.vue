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
    title: 'My Web Developer Journey - Learn CSS, HTML & JavaScript',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Posting about my web developer experiences and project updates for motivation and guidance. Also explaining code to share CSS, HTML, and JavaScript knowledge.',
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
          'web developer,duane chetcuti,duane creates,malta,maltese,css,html,js,javascript,website dev,web devs,css3,html5,instagram,social media,marketing,ui design,ui ux,dev,developer,programming,programmer',
      },
    ],
  },
};
</script>
