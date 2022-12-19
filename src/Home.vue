<template>
  <div>
    <div class="flex justify-center">
      <div
        class="w-7/12 bg-center relative flex items-center justify-center"
        v-if="document"
        :style="{
          backgroundImage: 'url(' + document.data.title_image.url + ')',
          height: '630px',
        }"
      >
        <div class="bg-black opacity-80 absolute w-full h-full"></div>
        <PrismicRichText
          v-if="document"
          :field="document.data.title"
          class="text-4xl font-bold text-white relative z-10"
        />
      </div>
    </div>

    <div v-if="document" class="flex justify-center mt-10">
      <div class="grid grid-cols-2 gap-10 w-7/12">
        <div
          v-for="(card_item, index) in document.data.card_list"
          :key="index"
          class="border border-black p-4"
        >
          <div class="flex justify-center">
            <PrismicImage :field="card_item.card_image" />
          </div>
          <PrismicRichText class="mt-4" :field="card_item.card_text" />
          <PrismicText
            class="mt-4 flex justify-center text-xl"
            :field="card_item.card_title"
          />
        </div>
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
