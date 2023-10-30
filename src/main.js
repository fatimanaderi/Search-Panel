// FILE: main.js

import { createApp } from 'vue'
import { Quasar ,Notify} from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import './style.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import '@neshan-maps-platform/vue3-openlayers/dist/style.css'
const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Notify
  },
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
