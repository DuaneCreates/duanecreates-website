<template>
  <Layout>
    <main class="page">
      <section class="about-container">
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
          I create digital experiences which increase business and online
          growth.
        </h2>
        <p>
          My passion for building awesome digital projects include web
          development, design, and social media marketing.
        </p>
        <p>
          I graduated my BSc (Hons) in Software Development from MCAST in 2018.
          I've been working with several companies locally since before that. I
          learned most of what I know through solo projects out of my own
          initiative and self interest. I've worked with teams of different
          sizes and have been exposed to all phases and parts of a software
          project.
        </p>
        <p>
          As my experience grew, I started to appreciate the frontend of a
          software project more. I love building visually, and I think it is
          super important that an app is not only beautiful to look at, but also
          usable by different kinds of people. This led me to work mostly on the
          frontend when working in teams, and full-stack on solo or freelance
          projects.
        </p>
        <h2>
          I'm based on a 316 km² rock in the mediterranean called Malta. Great
          weather, and an awesome life.
        </h2>
        <a href="" class="image-container">
          <g-image
            src="https://placeimg.com/640/480/arch"
            fit="cover"
            alt="Duane Creates"
          />
        </a>
        <h2>What am I doing?</h2>
        <p>
          I share my day-to-day life as a web developer on
          <a href="https://instagram.com/duanecreates" rel="nofollow"
            >Instagram</a
          >
          and
          <a href="https://twitter.com/duanecreates" rel="nofollow">Twitter</a>
          to motivate and guide others. There's an awesome community of
          like-minded people out there; People who want to learn and grow. My
          favourite community is
          <a href="http://devinitelyhealthy.xyz/" rel="nofollow"
            >#devinitelyhealthy</a
          >, which promotes a healthy lifestyle along with learning and
          improving oneself for a better future, where goals are crushed and
          ambitions are fulfilled.
        </p>
        <p>
          Recently, I also started learning about game development as it is one
          of my dreams to make games. I am even documenting my journey as a new
          game developer on
          <a href="https://instagram.com/duanecreatesgames" rel="nofollow"
            >Instagram</a
          >
          and
          <a href="https://twitter.com/duanemakesgames" rel="nofollow"
            >Twitter</a
          >, so you should check that out if you're interested. I've been
          focusing on pixel art and Unity3d as the game engine of choice.
        </p>
        <p>
          When I'm offline, I like reading books. Books can teach you a lot, as
          they provide a structured system of knowledge. Many people who reached
          big successes read, there is a pattern. Not all books are great, but I
          have a few favourite ones and others which are in my reading list.
        </p>
        <p>
          The reason why I made this blog is to help as much people as I can. I
          started my journey on
          <a href="https://instagram.com/duanecreates" rel="nofollow"
            >Instagram</a
          >, continued on
          <a href="https://www.youtube.com/c/duanecreates" rel="nofollow"
            >YouTube</a
          >
          to reach more people, and now this blog! I hope you find my content
          useful and I would love to get your feedback.
        </p>
        <h2>What's planned for the future?</h2>
        <p>
          I plan to keep working on side projects, such as free tools that devs
          can use, while creating web development content that might help a lot
          of developers. I will be making my own games which is a big learning
          journey as I have little experience in that area. I think my passion
          for games and programming will help a lot in that regard. Finally, I
          will be providing my services on web development to pay the bills.
        </p>
        <p>
          I love documenting my journey, so if you want to stay updated on my
          experiences, follow my game dev and web dev journeys on social media.
          See you around.
        </p>
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

  a {
    @apply border-b border-primary;

    &:hover,
    &:focus {
      @apply border-b-2;
    }

    &:active {
      @apply border-accent;
    }
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
