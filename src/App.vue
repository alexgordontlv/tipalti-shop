<template>
  <TheNavigation />
  <router-view />
</template>
<script>
import TheNavigation from "@/components/navigation/TheNavigation";
export default {
  name: "app",
  components: {
    TheNavigation,
  },
};
</script>
<style>
body {
  padding: 0;
  margin: 0%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
