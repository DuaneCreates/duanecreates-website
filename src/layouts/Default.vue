<template>
  <div class="layout">
    <Menu />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default {
  components: { Menu, Header, Footer },
  metaInfo() {
    return {
      bodyAttrs: {
        class: this.$store.state.menu_opened && 'menu_opened',
      },
    };
  },
};
</script>
