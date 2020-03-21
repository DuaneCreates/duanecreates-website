<template>
  <Layout>
    <main class="page">
      <section class="about-container">
        <!--TODO proper text-->
        <!--TODO proper images-->
        <h1>About Duane Creates</h1>
        <a href="" class="image-container">
          <g-image
            src="https://placeimg.com/640/480/people"
            fit="cover"
            alt="Duane Creates"
          />
        </a>
        <h2>
          I build digital experiences,<br />
          which increase business & growth.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
        <h2>
          My name is Duane Chetcuti,<br />
          and I'm based in Malta.
        </h2>
        <a href="" class="image-container">
          <g-image
            src="https://placeimg.com/640/480/arch"
            fit="cover"
            alt="Duane Creates"
          />
        </a>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Duane Chetcuti, known as Duane Creates online',
    titleTemplate: '%s',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          "Duane creates digital experiences which increase business & online growth. Focusing on design, development and marketing, you're one step closer to success.",
      },
      {
        key: 'keywords',
        name: 'keywords',
        content:
          'dev,devs,web developer,web dev,frontend,front end,freelancing,front-end,developer,website dev,website developer,malta,maltese,local,freelance,freelancer,ui design,ui designer,designer,graphic designer,artist,ux,digital,agency,creator,marketing,social media,instagram',
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
section.about-container {
  @apply mx-auto mb-200;
  max-width: 800px;

  h1 {
    @apply text-primary-dark font-bold text-xxl font-title;
  }
  h2 {
    @apply text-primary-dark font-bold text-xl mt-20 font-title;
  }
  p {
    @apply text-primary-dark font-normal text-md mt-20 font-body;
  }

  .image-container {
    @apply block mt-20 overflow-hidden;
    img {
      @apply object-cover w-full h-300;
      transition: all 0.2s;
    }

    &:focus,
    &:hover {
      @apply outline-none;

      img {
        -webkit-filter: contrast(1.4) saturate(1.4);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }
}
</style>
