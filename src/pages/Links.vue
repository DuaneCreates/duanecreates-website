<template>
  <Layout>
    <main class="page">
      <div class="link-container">
        <template v-if="$page.links.totalCount > 0">
          <div
            v-for="(edge, index) in $page.links.edges"
            :key="edge.node.href"
            class="link"
          >
            <g-link :to="edge.node.href" rel="nofollow">
              <h1>{{ edge.node.title }}</h1>
              <p v-if="edge.node.description">{{ edge.node.description }}</p>
            </g-link>
          </div>
        </template>
        <div v-if="$page.links.totalCount === 0">
          <p>There are no links, yet.</p>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query {
    links: allLink(sortBy: "order", order: ASC) {
      totalCount
      edges {
        node {
          title
          description
          href
          order
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Links',
  },
};
</script>

<style lang="scss" scoped>
.link-container {
  @apply flex flex-col;

  .link {
    @apply mb-50;

    h1 {
      @apply text-primary-dark uppercase text-xl font-bold relative;
      transition: all 0.2s;

      @screen laptop {
        @apply text-xxl;
      }

      @screen desktop {
        @apply text-xxxl;
      }

      &:before {
        @apply absolute text-primary text-xxxl opacity-0;
        content: '\2022';
        left: -0.9em;
        top: -0.1em;
        transition: all 0.2s;
      }
    }

    p {
      @apply mt-10 text-primary-dark text-md;
    }

    a {
      &:hover,
      &:focus {
        @apply outline-none;
        h1 {
          @apply text-primary;

          &:before {
            @apply opacity-100;
            left: -0.5em;
          }
        }
      }
    }

    &:last-of-type {
      @apply mb-0;
    }
  }
}
</style>
