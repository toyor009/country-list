import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./css/main.css";
import "./components/globals";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount("#app");
