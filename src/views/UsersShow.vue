<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Clarence Taylor</span>
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
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#capstone">Capstone</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#twitter">Twitter</a></li>
        </ul>
      </div>
    </nav>
    <img :src="user.image_url" alt="User profile picture" />
    <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <h3>
      <a :href="`mailto:${user.email}`">{{ user.email }}</a>
      |
      <a :href="`tel:${user.phone_number}`">
        {{ user.phone_number }}
      </a>
    </h3>

    <p>Bio bio bio</p>
    <div class="social-icons">
      <a :href="user.linkedin_url" class="social-icon"><i class="fab fa-linkedin"></i></a>

      <a :href="user.github" class="social-icon"><i class="fab fa-github"></i></a>

      <a :href="`https://twitter.com/${user.twitter}`" class="social-icon"><i class="fab fa-twitter"></i></a>
    </div>
    <section class="resume-section" id="twitter">
      <div class="resume-section-content">
        <div id="tweetLoaded">
          <Timeline :id="user.twitter" sourceType="profile" :options="{ tweetLimit: '5' }" />
        </div>
      </div>
    </section>
  </div>
</template>
//
<a :href="user.website">Personal Website</a>

//
<a :href="user.resume_url">Resume</a>

<style scoped>
img {
  border-radius: 50%;
  width: 150px;
}
div.home {
  padding-top: 80px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
</style>

<script>
import { Timeline } from "vue-tweet-embed";
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
        twitter: "twitterdev",
        website: "https://dexlab.com",
        resume_url: "https://resume.com/pdf",
        github: "https://github.com/dexterlab",
      },
    };
  },
  created: function() {},
  methods: {},
  components: {
    Timeline,
  },
};
</script>
