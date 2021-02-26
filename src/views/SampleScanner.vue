<template>
  <div class="home">
    <NavBar> </NavBar>

    <h2>Sample Scanner</h2>
    <div v-if="!this.hasSelectedCode">
      <Barcode @barcode="updateData" />
    </div>
    <div v-else>
      {{ this.sampleData.product.product_name }}
      <button @click="submit">SUBMIT</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Barcode from "@/components/Barcode.vue";
import NavBar from "@/components/NavBar.vue";

import { UpcDataProvider } from "@/api/UpcDataProvider";

export default {
  name: "SampleScanner",
  components: {
    Barcode,
    NavBar,
  },
  data() {
    return { hasSelectedCode: false, selectedCode: "", sampleData: {} };
  },
  methods: {
    async updateData(data) {
      this.selectedCode = data;
      this.hasSelectedCode = true;
      var dataProvider = new UpcDataProvider();

      // alert(this.selectedCode);

      try {
        this.sampleData = await dataProvider.getUpcData(this.selectedCode);

        console.log(this.sampleData);

        console.log(this.sampleData.product.product_name);
      } catch (error) {
        alert("data error");
      }
    },
    submit() {
      this.hasSelectedCode = false;
    },
  },
};
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  align-content: center;

  height: 100%;
  width: 100%;
  background-image: url("~@/assets/farm2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
