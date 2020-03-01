<template>
  <div class="layout">
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer/Footer';

export default {
  components: { Footer },
};
</script>
