<template>
  <Layout>
    <div class="welcome-container">
      <h1>Hi There!</h1>
      <p>My blog is currently under construction.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Duane Creates',
  },
};
</script>

<style lang="scss" scoped>
.welcome-container {
  @apply mb-100 p-50;

  @screen tablet-lg {
    @apply p-100;
  }

  h1 {
    @apply mb-10 text-xxl;
  }

  p {
    @apply text-lg;
  }
}
</style>
