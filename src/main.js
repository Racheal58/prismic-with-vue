import Vue from "vue";
import App from "./App.vue";
import PrismicVue from "@prismicio/vue";
import VueRouter from "vue-router";

import "./assets/main.css";
import Home from "./Home.vue";
import Post from "./Post.vue";

// Use your repository name
const endpoint = "https://website-vue.prismic.io/api/v2";

Vue.use(VueRouter);

// Define your site structure with a route resolver
const routes = [
  {
    type: "home_page",
    path: "/",
    component: Home,
  },
  {
    type: "post",
    path: "/:uid",
    component: Post,
  },
];

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { routes },
});

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history",
});

// Create a Vue instance
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

export default function (doc) {
  if (doc.isBroken) {
    return "/not-found";
  }

  if (doc.type === "post") {
    return "/" + doc.uid;
  }

  return "/not-found";
}
