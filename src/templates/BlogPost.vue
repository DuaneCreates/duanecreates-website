<template>
  <Layout>
    <Read :post="$page.blogPost"/>
  </Layout>
</template>

<page-query>
  query BlogPost($path: String!) {
    blogPost(path: $path) {
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
import Read from "../components/Read";
export default {
  name: 'BlogPost',
  components: {Read},
};
</script>
