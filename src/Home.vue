<template>
  <div>
    <PrismicRichText v-if="document" :field="document.data.title" />
    <PrismicImage v-if="document" :field="document.data.title_image" />
  </div>
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
      const document = await this.$prismic.client.getSingle("home_page");
      this.document = document;
    },
  },
  created() {
    // Call the API query method
    this.getContent();
  },
};
</script>
