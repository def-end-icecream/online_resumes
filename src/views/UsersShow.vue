<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Clarence Taylor</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
        </ul>
      </div>
    </nav>
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
