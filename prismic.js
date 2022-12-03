import Vue from "vue";
import Router from "vue-router";

import Home from "./Home.vue";
import Post from "./Post.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home_page",
      component: Home,
    },
    {
      path: "/:uid",
      name: "post",
      component: Post,
    },
  ],
});

export default router;
