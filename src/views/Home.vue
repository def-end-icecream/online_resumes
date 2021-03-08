<template>
  <div class="home">
    <div v-for="user in users" :key="user.id">
      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <img :src="user.image_url" alt="User's image" style="width:25%" />
      <button>More Info</button>
    </div>
  </div>
</template>

<style></style>

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
            "https://static.wikia.nocookie.net/johnnytest/images/1/1e/Johnny_large.png/revision/latest/scale-to-width-down/340?cb=20160509005837",
        },
        {
          id: 2,
          first_name: "Dexter",
          last_name: "Laboratory",
          image_url: "https://i.pinimg.com/originals/b4/51/89/b45189a152246f123bef2032444c7473.jpg",
        },
      ],
    };
  },
  created: function() {},
  methods: {},
};
</script>
