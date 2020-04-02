<template>
  <div class="image-me">
    <g-image
      src="~/assets/images/duanecreates.png"
      fit="contain"
      alt="Duane Creates"
    />
  </div>
</template>

<script>
export default {
  name: 'Me',
};
</script>

<style lang="scss" scoped>
.image-me {
  height: 300px;
  margin-bottom: -175px;

  img {
    @apply rounded-full h-auto object-contain w-11/12 mx-auto absolute z-20;
    left: 0;
    right: 0;
    max-width: 300px;
    transition: all 0.2s;
  }

  &:focus,
  &:hover {
    @apply outline-none;

    img {
      @apply shadow-2xl;
    }
  }
}
</style>
