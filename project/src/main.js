import { createApp } from "vue";
import App from "./App.vue";
import Router from "@/router.js";
import "animate.css";
window.$ = window.jQuery = require("jquery");
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/style.css";
import "@/plugins/slick/slick.min.js";
import "@/plugins/slick/slick.css";
import store from "./store";
const app = createApp(App);
app.use(Router);
app.use(store);
app.mount("#app");
//saasdad//
