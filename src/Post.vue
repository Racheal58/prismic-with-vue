<template>
  <div>
    <p>Post</p>
    <PrismicRichText v-if="document" :field="document.data.post_title" />
    <PrismicRichText v-if="document" :field="document.data.post_text" />
    <PrismicImage v-if="document" :field="document.data.post_image" />

    <br />

    <PrismicRichText
      v-if="document"
      :field="document.data.profile[0].profile_heading"
    />
    <PrismicRichText
      v-if="document"
      :field="document.data.profile[0].profile_body"
    />
    <PrismicImage
      v-if="document"
      :field="document.data.profile[0].profile_image"
    />
    <p v-if="document">
      {{ document.data.profile[0].first_publication_date }}
    </p>
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
    async getContent(uid) {
      // Query the API and assign the response to "document"
      const document = await this.$prismic.client.getByUID("post", uid);
      this.document = document;
    },
  },
  created() {
    // Call the API query method
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    // Call the API query method when the URL changes
    this.getContent(to.params.uid);
    next();
  },
};
</script>
