<template>
  <section class="me">
    <h3>Hello,<br />I'm <span class="underline">Duane.</span></h3>
    <h4>Web & Game Developer,<br />with passion.</h4>
    <p>I build amazing apps,<br />and help people learn web development.</p>
    <p>
      My main dev skills are CSS & JavaScript.<br />I use Vue.js to create
      awesome websites.
    </p>
    <p>Also keen on business, marketing, SEO, U.I. Design & U.X.</p>
    <g-link to="/about" class="more"
      ><span>Learn More</span>
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </g-link>
  </section>
</template>

<script>
export default {
  name: 'Column-Summary',
};
</script>

<style lang="scss" scoped>
section.me {
  h3 {
    @apply text-primary text-xxl font-bold mb-20;

    span.underline {
      @apply no-underline text-primary relative z-20;

      &:after {
        @apply absolute bg-accent rounded-full mx-auto;
        content: '';
        transition: all 0.2s;
        z-index: -1;
        height: 12px;
        bottom: 6px;

        left: -2%;
        right: 0;
        width: 104%;
      }

      &:hover,
      &:focus {
        &:after {
          @apply opacity-0;
        }
      }
    }
  }

  h4 {
    @apply text-primary-dark text-xl font-normal mb-20;
  }

  p {
    @apply text-primary-dark text-lg font-normal mb-10;
  }
}
</style>
