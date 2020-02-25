<template>
  <section class="email">
    <a href="mailto:duanecreates@gmail.com" class="message">
      <p class="title">Send me a message</p>
      <p class="email">duanecreates@gmail.com</p>
    </a>
    <h3>Newsletter</h3>
    <form @submit.prevent="subscribe">
      <div
        class="input-group input-name"
        :class="{ error: $v.subscription.name.$error }"
      >
        <label for="name">First Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          v-model="$v.subscription.name.$model"
        />
        <div v-if="$v.subscription.name.$error" class="errors">
          <p v-if="!$v.subscription.name.required">Name is required</p>
        </div>
      </div>
      <div
        class="input-group input-email"
        :class="{ error: $v.subscription.email.$error }"
      >
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="johndoe@example.com"
          v-model="$v.subscription.email.$model"
        />
        <div v-if="$v.subscription.email.$error" class="errors">
          <p v-if="!$v.subscription.email.required">Email is required</p>
          <p
            v-if="
              !$v.subscription.email.email && $v.subscription.email.required
            "
          >
            Email is not valid
          </p>
        </div>
      </div>
      <Button text="Subscribe" type="submit"></Button>
    </form>
  </section>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import Button from '../Button';

export default {
  name: 'Column-Email',
  components: { Button },
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
        top: -0.41em;
        transition: all 0.2s;
      }
    }

    p.email {
      @apply text-lg text-primary-dark font-normal mb-20;
    }

    &:hover,
    &:focus {
      p.title {
        @apply text-primary;

        &:before {
          @apply opacity-100;
          left: -0.6em;
        }
      }
    }
  }

  h3 {
    @apply text-primary-dark text-xxl font-bold mb-20;
  }

  form {
    .input-group {
      @apply mb-20 max-w-full;
      width: 300px;

      label {
        @apply block uppercase text-primary-dark text-md font-bold mb-5 w-full;
      }

      input {
        @apply block border-b border-primary-dark text-md font-normal w-full pb-5 bg-transparent;
        transition: all 0.2s;

        &:focus {
          @apply outline-none border-primary text-primary;
        }
      }

      .errors {
        @apply block;

        p {
          @apply italic text-negative mt-5;
        }
      }

      &.error {
        input {
          @apply border-negative;
        }
      }
    }

    ::-webkit-input-placeholder {

      /* Edge */
      @apply text-grey-dark text-md;
    }

    :-ms-input-placeholder {

      /* Internet Explorer 10-11 */
      @apply text-grey-dark text-md;
    }

    ::placeholder {
      @apply text-grey-dark text-md;
    }
  }
}
</style>
