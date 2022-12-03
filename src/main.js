// import Vue from "vue";
// import App from "./App.vue";

import "./assets/main.css";

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import PrismicVue from "@prismicio/vue";

// Use your repository name
const endpoint = "https://website-vue.prismic.io/api/v2";

// Define your site structure with a route resolver
const routes = [
  {
    type: "home_page",
    path: "/",
  },
  {
    type: "post",
    path: "/:uid",
  },
];

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { routes },
});

// Create a Vue instance
new Vue({
  render: (h) => h(App),
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
