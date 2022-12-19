<template>
  <div class="flex flex-col justify-center mt-10" v-if="document">
    <div
      class="w-7/12 flex border border-slate-300 p-4 rounded-lg mx-auto mt-9"
      v-for="(post_item, index) in document.data.post"
      :key="index"
    >
      <div>
        <PrismicImage :field="post_item.post_image" />
      </div>

      <div class="col-span-3 p-6">
        <PrismicRichText :field="post_item.post_body" />
        <br />
        <PrismicText :field="post_item.post_heading" class="text-xl" />
        <br />
        <p>{{ post_item.first_publication_date }}</p>
      </div>
    </div>
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
