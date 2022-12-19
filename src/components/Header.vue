<template>
  <nav class="flex justify-center space-x-16 border-y border-gray-500 mt-16">
    <ul v-if="document" class="flex justify-cente w-7/12">
      <li
        v-for="(menu_link, index) in document.data.menu_links"
        :key="index"
        class="px-10 py-6 text-black hover:bg-gray-500 hover:text-white border border-gray-500"
      >
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
