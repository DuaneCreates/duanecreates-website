<template>
  <section class="email">
    <h3>Let's discuss</h3>
    <a href="mailto:hello@duanecreates.com" class="message">
      <p class="title">Send me a message</p>
      <p class="email">hello@duanecreates.com</p>
    </a>
    <h3>Newsletter</h3>
    <ClientOnly>
      <Convertkit />
    </ClientOnly>
  </section>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import Button from '../Button';
import Convertkit from '../Convertkit';

export default {
  name: 'Column-Email',
  components: { Convertkit, Button },
  data() {
    return {
      subscription: {
        name: null,
        email: null,
      },
    };
  },
  validations: {
    subscription: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    subscribe() {
      this.$v.subscription.$touch();
      if (this.$v.subscription.$anyError) return;

      console.log('subscribe');
    },
  },
};
</script>

<style lang="scss" scoped>
section.email {
  a.message {
    p.title {
      @apply text-md text-primary-dark font-bold uppercase relative;
      transition: all 0.2s;

      &:before {
        @apply absolute text-primary text-xl opacity-0;
        content: '\2022';
        left: -0.9em;
        top: -0.31em;
        transition: all 0.2s;
      }
    }

    p.email {
      @apply text-lg text-primary-dark font-normal mb-20;
    }

    &:hover,
    &:focus {
      @apply outline-none;
      p.title {
        @apply text-primary;

        &:before {
          @apply opacity-100;
          left: -0.5em;
        }
      }
    }
  }

  h3 {
    @apply text-primary-dark text-xxl font-bold mb-20;
  }
}
</style>
