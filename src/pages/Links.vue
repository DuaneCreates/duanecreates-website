<template>
  <Layout>
    <main class="page">
      <div class="link-container">
        <div v-for="link in links" :key="link.href" class="link">
          <g-link :to="link.href" rel="nofollow">
            <h1>{{ link.title }}</h1>
            <p v-if="link.description">{{ link.description }}</p>
          </g-link>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      // TODO dynamic data
      links: [
        {
          title: 'My Youtube Channel',
          description: 'Clck the link above to go to my YouTube channel.',
          href: 'https://youtube.com/c/duanecreates',
        },
        {
          title: 'Free eBooks',
          description: 'Learn a bunch of cool stuff, for free',
          href: 'https://google.com',
        },
        {
          title: 'My swagger jacket',
          description: null,
          href: 'https://google.com/',
        },
      ],
    };
  },
  metaInfo: {
    title: 'Hey you!',
  },
};
</script>

<style lang="scss" scoped>
.link-container {
  @apply flex flex-col;

  .link {
    @apply mb-50;

    h1 {
      @apply text-primary-dark uppercase text-xxxl font-bold;
    }

    p {
      @apply mt-10 text-primary-dark text-md;
    }

    a {
      &:hover,
      &:focus {
        h1 {
          @apply text-primary;
        }
      }
    }

    &:last-of-type {
      @apply mb-0;
    }
  }
}
</style>
