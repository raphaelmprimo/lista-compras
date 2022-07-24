import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/css'

const app = createApp(App);

app.use(router);


app.use(createVuesticEssential({ components: { VaButton } }));
app.mount("#app");
