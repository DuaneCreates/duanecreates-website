<template>
  <Layout>
    <main class="page">
      <PostsRow
        title="Latest Blog Posts"
        more_text="more blog posts"
        :posts="posts"
      />
      <PostsRow
        title="Latest Code Notes"
        more_text="more code notes"
        :posts="posts"
      />

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
    </main>
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<script>
import PostsRow from '../components/PostsRow';
export default {
  components: { PostsRow },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Who made this blog?',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in mauris elit. Vestibulum eget velit non arcu porttitor volutpat.',
          tags: ['html', 'css', 'javascript'],
          date: 'yesterday',
          read_minutes: 4,
          type: 'blog post',
          image: 'https://placeimg.com/640/481/tech',
        },
        {
          id: 2,
          title: 'I am superman',
          summary:
            'Lorem ipsum consectetur adipiscing elit. Pellentesque in mauris elit. Vestibulum eget velit non arcu porttitor volutpat.',
          tags: ['tailwind', 'css', 'vue'],
          date: 'today',
          read_minutes: 6,
          type: 'code note',
          image: 'https://placeimg.com/640/482/tech',
        },
        {
          id: 3,
          title: 'Tea or coffee?',
          summary:
            'Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque in mauris elit..',
          tags: ['html', 'coffee', 'health'],
          date: 'yesterday',
          read_minutes: 1,
          type: 'blog post',
          image: 'https://placeimg.com/640/480/tech',
        },
        {
          id: 4,
          title: 'Snacks or cheques?',
          summary:
            'Lorem dolor sit mit miot amet, consectetur adipiscing elit. Pellentesque in mauris elit..',
          tags: ['hustle', 'coffee', 'finance'],
          date: 'today',
          read_minutes: 23,
          type: 'blog post',
          image: 'https://placeimg.com/640/484/tech',
        },
      ],
    };
  },
  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
