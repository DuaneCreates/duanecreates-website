<template>
  <button :type="type">{{ text }}</button>
</template>

<script>
// TODO add loading functionality
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Button',
    },
    type: {
      type: String,
      required: false,
      default: 'button',
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  @apply text-white bg-primary-dark py-16 px-24 uppercase font-bold font-body;
  transition: all 0.2s;

  &:hover,
  &:focus,
  &:active {
    @apply outline-none bg-primary shadow-md;
  }
}
</style>
