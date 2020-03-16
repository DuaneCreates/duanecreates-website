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
};
</script>
