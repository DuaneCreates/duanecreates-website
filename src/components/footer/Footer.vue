<template>
  <footer class="main">
    <FooterMe />
    <div class="divider"></div>
    <FooterAbout />
    <FooterBar />
  </footer>
</template>

<script>
import FooterAbout from './About';
import FooterBar from './Bar';
import FooterMe from './Me';

export default {
  name: 'Footer',
  components: { FooterMe, FooterBar, FooterAbout },
};
</script>

<style lang="scss" scoped>
footer.main {
  @apply relative;
  margin-top: 150px;
  .divider {
    @apply relative overflow-hidden bg-transparent;
    height: 160px;

    &:before {
      right: 50%;
      border-right: 1000px solid theme('colors.grey-light');
      border-left: 1000px solid;
    }

    &:after {
      left: 50%;
      border-left: 1000px solid theme('colors.grey-light');
      border-right: 1000px solid;
    }

    &:before,
    &:after {
      @apply absolute w-1/2 z-10;
      content: '';
      top: 0;

      /*  change the hieght and the color below */
      border-top: 160px solid theme('colors.transparent');
      -moz-transform: rotate(0.000001deg);
      -webkit-transform: rotate(0.000001deg);
      -o-transform: rotate(0.000001deg);
      -ms-transform: rotate(0.000001deg);
      transform: rotate(0.000001deg);
    }
  }
}
</style>
