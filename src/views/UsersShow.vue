<template>
  <div class="home">
    <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <img :src="user.image_url" alt="User profile picture" style="width:25%" />
    <p>
      <a :href="`mailto:${user.email}`">{{ user.email }}</a>
      |
      <a :href="`tel:${user.phone_number}`">
        {{ user.phone_number }}
      </a>
    </p>
    <p>
      <a :href="user.linkedin_url">LinkedIn</a>
      |
      <a :href="user.github">Github</a>
      |
      <a :href="user.website">Personal Website</a>
      |
      <a :href="user.resume_url">Resume</a>
      |
      <a :href="`https://twitter.com/${user.twitter}`">Twitter</a>
    </p>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Let's see if this worked!",
      user: {
        id: 2,
        first_name: "Dexter",
        last_name: "Laboratory",
        image_url: "https://i.pinimg.com/originals/b4/51/89/b45189a152246f123bef2032444c7473.jpg",
        email: "dexter@laboratory.com",
        phone_number: "345-232-5234",
        bio: "My sister is the worst and I am very smart B)",
        linkedin_url: "https://linkedin.com/dexterlab",
        twitter: "dexlab",
        website: "https://dexlab.com",
        resume_url: "https://resume.com/pdf",
        github: "https://github.com/dexterlab",
      },
    };
  },
  created: function() {},
  methods: {},
};
</script>
