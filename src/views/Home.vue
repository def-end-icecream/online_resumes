<template>
  <div class="home">
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <span class="navbar-brand">Online Resumes</span>
    </nav>
    <div v-for="user in users" :key="user.id">
      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <img :src="user.image_url" alt="User's image" style="width:25%" />
      <br />
      <router-link :to="`/users/${user.id}`">
        <button>More Info</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
body {
  padding: 0;
}
</style>
<script>
export default {
  data: function() {
    return {
      users: [
        {
          id: 1,
          first_name: "Johnny",
          last_name: "Test",
          image_url:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages3.wikia.nocookie.net%2F__cb20120319144328%2Fjohnnytest%2Fimages%2F1%2F1e%2FJohnny_large.png",
        },
        {
          id: 2,
          first_name: "Dexter",
          last_name: "Laboratory",
          image_url:
            "https://i.pinimg.com/originals/b4/51/89/b45189a152246f123bef2032444c7473.jpg",
        },
      ],
    };
  },
  created: function() {},
  methods: {},
};
</script>
