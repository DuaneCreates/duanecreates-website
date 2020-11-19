<template>
  <Layout>
    <main class="page">
      <div class="link-container">
        <template v-if="$page.links.totalCount > 0">
          <div
            v-for="edge in $page.links.edges"
            :key="edge.node.href"
            class="link"
          >
            <a
              :href="edge.node.href"
              :rel="edge.node.rel ? edge.node.rel : 'nofollow'"
              :target="edge.node.target ? edge.node.target : '_blank'"
            >
              <h1>{{ edge.node.title }}</h1>
              <p v-if="edge.node.description">{{ edge.node.description }}</p>
            </a>
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
          rel
          target
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
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Since I can only post one link in my Instagram bio, find my collection of recent important links I want to share with you.',
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
          "dev,dev subjects,duane creates,social media,social network,link in bio,duane's links,interesting topics,share,interesting links,share link",
      },
    ],
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
        @apply outline-none cursor-pointer;

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
