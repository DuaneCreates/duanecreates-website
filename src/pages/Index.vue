<template>
  <Layout>
    <div class="welcome-container">
      <h1>Hi There!</h1>
      <p>My blog is currently under construction.</p>
    </div>
    <div class="newsletter">
      <ClientOnly>
        <convertkit />
      </ClientOnly>
    </div>
  </Layout>
</template>

<script>
import Convertkit from '../components/Convertkit';

export default {
  components: { Convertkit },
  metaInfo: {
    title: 'Duane Creates',
  },
};
</script>

<style lang="scss" scoped>
.welcome-container {
  @apply p-50;

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

.newsletter {
  @apply mb-100 px-50 py-0;

  @screen tablet-lg {
    @apply px-100 py-0 mb-200;
  }
}
</style>
