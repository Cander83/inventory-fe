<template>
  <div id="nav" class="navBar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/sampleScanner">Sample Scanner</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #43464b;
}
</style>
