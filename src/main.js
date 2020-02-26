// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'normalize.css/normalize.css';
import '~/assets/tailwind.css';
import '~/assets/base.scss';
import '~/assets/global.scss';
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
}
