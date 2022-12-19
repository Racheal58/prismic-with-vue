<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/AppFooter.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
