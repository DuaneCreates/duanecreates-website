// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'normalize.css/normalize.css';
import '~/assets/tailwind.css';
import '~/assets/base.scss';
import '~/assets/global.scss';
import '~/assets/convertkit.css';
import DefaultLayout from '~/layouts/Default.vue';
import Vuelidate from 'vuelidate';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faChevronRight,
  faBars,
  faInstagram,
  faTwitter,
  faGithub,
  faYoutube,
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome-icon', FontAwesomeIcon);

  Vue.use(Vuelidate);

  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-primary/favicon-32x32.png',
  });

  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-primary/favicon-16x16.png',
  });

  head.link.push({
    rel: 'manifest',
    href: '/favicon-primary/site.webmanifest',
  });

  head.link.push({
    rel: 'mask-icon',
    color: '#813feb',
    href: '/favicon-primary/safari-pinned-tab.svg',
  });

  head.link.push({
    rel: 'shortcut icon',
    href: '/favicon-primary/favicon.ico',
  });

  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon-primary/apple-touch-icon.png',
  });

  head.meta.push({
    name: 'theme-color',
    content: '#813feb',
  });

  head.meta.push({
    name: 'msapplication-TileColor',
    content: '#ffffff',
  });

  head.meta.push({
    name: 'msapplication-config',
    content: '/favicon-primary/browserconfig.xml',
  });

  head.script.push({ src: 'https://f.convertkit.com/ckjs/ck.5.js' });
}
