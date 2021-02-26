<template>
  <div id="nav" class="home">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/sampleScanner">Sample Scanner</router-link>
  </div>
</template>

<script>
import { UpcDataProvider } from "@/api/UpcDataProvider";

export default {
  name: "Home",
  components: {},
  data() {
    return { sampleData: { product: { product_name: "" } } };
  },
  async created() {
    var dataProvider = new UpcDataProvider();

    this.sampleData = await dataProvider.getUpcData();
    console.log(this.sampleData);
    console.log(this.sampleData.product.product_name);
  },
};
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: url("~@/assets/farm2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: xx-large;
  text-align: left;
  margin-bottom: 20%;
}

#nav a.router-link-exact-active {
  color: #43464b;
}
</style>
