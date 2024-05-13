import './assets/main.css'

import { createApp } from 'vue'

import router from './router'
import {createAuth0} from "@auth0/auth0-vue"
import App from './App.vue'


const app = createApp(App)


app.use(
    createAuth0({
        domain: 'dev-x4bqu08drzr03ys6.us.auth0.com',
        clientId: 'RPAZTzTjZN93OVGd2eKXIwa83yvSG71h',
        authorizationParams: {
            redirect_uri:"http://localhost:5173/profile",
        }
    })
)
app.use(router)


app.mount('#app')
