import Vue from 'vue'
import App from './App.vue'

/*Bootstrap*/
import 'bootstrap/dist/css/bootstrap.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faUber } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faClock, faPhone, faEnvelope, faTwitter, faFacebookF, faLinkedin, faUser, faUber, faGem)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
