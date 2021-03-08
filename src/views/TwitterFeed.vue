<template>
  <div class="home">
    <div id="tweetLoaded">
      <Timeline :id="$route.params.handle" sourceType="profile" :options="{ tweetLimit: '3' }" />
    </div>
  </div>
</template>

<style></style>

<script>
import { Timeline } from "vue-tweet-embed";
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {},
  components: {
    Timeline,
  },
};
</script>
