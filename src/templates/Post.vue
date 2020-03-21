<template>
  <Layout>
    <Read :post="$page.post" />
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post(path: $path) {
      title
      date
      path
      slug
      summary
      image
      read_minutes
      type
      content
    }
  }
</page-query>
<script>
import Read from '../components/Read';
export default {
  name: 'Post',
  components: { Read },
  metaInfo() {
    if (this.$page.post) {
      return {
        title: this.$page.post.title,
        meta: [
          {
            key: 'description',
            name: 'description',
            content: this.$page.post.summary,
          },
          {
            key: 'author',
            name: 'author',
            content: 'Duane Creates',
          },
        ],
      };
    }

    // TODO tags
    /* {
            key: 'keywords',
            name: 'keywords',
            content: this.post.tags.join(','),
          },*/

    return {};
  },
};
</script>
