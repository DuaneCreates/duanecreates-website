<template>
  <Layout>
    <div class="page-container">
      <h1>Huh?!</h1>
      <p>I have no idea where this page went ...</p>
      <g-link to="/">
        <Button text="Get out of here"></Button>
      </g-link>
    </div>
  </Layout>
</template>

<script>
import Button from '../components/Button';

export default {
  name: '404',
  components: { Button },
  metaInfo: {
    title: '404',
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  @apply flex flex-col items-center;

  h1 {
    @apply text-primary-dark font-bold text-xxl font-title mb-5;
  }

  p {
    @apply text-primary-dark font-normal text-md mb-50 font-body;
  }
}
</style>
