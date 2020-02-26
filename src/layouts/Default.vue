<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer/Footer';
import Header from '../components/Header';

export default {
  components: { Header, Footer },
};
</script>
