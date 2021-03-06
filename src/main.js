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
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faClock, faPhone, faEnvelope, faTwitter, faFacebookF, faLinkedin, faUser, faUber, faGem, faTruckRampBox, faArrowRight, faTemperatureLow, faBoxesStacked, faQuoteRight, faLocationDot, faAngleRight, faArrowUp)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
