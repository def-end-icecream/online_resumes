<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Casee was here</h1>
    <HelloWorld msg="I am Charlotte this page is about me!!!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
