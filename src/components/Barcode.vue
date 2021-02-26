<template>
  <Reader
    :onDetected="logIt"
    :readerTypes="['upc_reader']"
    class="reader"
  ></Reader>
</template>

<script>
import Reader from "./Reader";

export default {
  name: "Barcode",
  components: { Reader },
  data() {
    return {
      detecteds: [],
      currentUPC: null,
    };
  },
  methods: {
    logIt(data) {
      if (!this.currentUPC) {
        this.currentUPC = data.codeResult.code;
        this.$emit("barcode", data.codeResult.code);
      }
    },
  },
};
</script>
<style scoped>
.reader {
  height: 50%;
  width: 10%;
}
</style>