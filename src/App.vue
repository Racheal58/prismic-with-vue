<!-- <script>
import Home from "./Home.vue";
import Post from "./Post.vue";
import NotFound from "./NotFound.vue";

const routes = {
  "/": Home,
  "/post": Post,
};

console.log(routes);

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <div>
    <a href="#/">Home</a> | <a href="#/post">Post</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
  </div>
</template> -->

<script>
import Home from "./Home.vue";
import Post from "./Post.vue";
import NotFound from "./NotFound.vue";

const routes = {
  "/": Home,
  "/post": Post,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <div>
    <a href="#/">Home</a> | <a href="/:uid">Post</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
  </div>
</template>
