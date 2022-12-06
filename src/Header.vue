<template>
  <nav>
    <ul v-if="document">
      <li v-for="(menu_link, index) in document.data.menu_links" :key="index">
        <router-link to="menu_link.link_label">
          <PrismicLink :field="menu_link.link">
            <PrismicRichText :field="menu_link.link_label" />
          </PrismicLink>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Initialize "response"
      document: null,
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const document = await this.$prismic.client.getSingle("menu");
      this.document = document;
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  },
};
</script>
