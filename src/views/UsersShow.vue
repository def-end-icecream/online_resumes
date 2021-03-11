<template>
  <div class="users-show" v-if="student">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none"
          >{{ student.first_name }} {{ student.last_name }}</span
        >
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
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education"
              >Education</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#capstone">Capstone</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#twitter">Twitter</a>
          </li>
        </ul>
      </div>
    </nav>
    <section class="resume-section" id="about">
      <div class="resume-section-content">
        <img
          :src="student.image_url"
          alt="User profile picture"
          class="avatar"
        />
        <h1
          >{{ student.first_name }}
          <span class="text-primary">{{ student.last_name }}</span></h1
        >
        <div class="subheading mb-5">
          {{ student.phone_number }} ·
          <a :href="`mailto:${student.email}`">{{ student.email }}</a>
        </div>

        <p class="lead mb-5">{{ student.short_bio }}</p>
        <div class="social-icons">
          <a :href="student.linkedin_url" target="_blank" class="social-icon"
            ><i class="fab fa-linkedin"></i
          ></a>

          <a :href="student.github_url" target="_blank" class="social-icon"
            ><i class="fab fa-github"></i
          ></a>

          <a
            :href="student.personal_website_url"
            target="_blank"
            class="social-icon"
            ><i class="fas fa-globe-americas"></i
          ></a>

          <a
            :href="`https://twitter.com/${student.twitter_handle}`"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="resume-section" id="experience">
      <div class="resume-section-content">
        <h2 class="mb-5">Experience</h2>
        <div
          v-for="experience in orderBy(student.experiences, 'end_date', -1)"
          :key="experience.id"
        >
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">{{ experience.job_title }}</h3>
              <div class="subheading mb-3">{{ experience.company_name }}</div>
              <p>
                {{ experience.details }}
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">
                {{ formatDate(experience.start_date) }} -
                {{ formatDate(experience.end_date) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="education">
      <div class="resume-section-content">
        <h2 class="mb-5">Education</h2>
        <div
          v-for="education in orderBy(student.educations, 'end_date', -1)"
          v-bind:key="education.id"
        >
          <div
            class="d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">{{ education.university_name }}</h3>

              <div class="subheading mb-3">{{ education.degree }}</div>

              <div>{{ education.details }}</div>

              <div class="flex-shrink-0">
                <span class="text-primary">
                  {{ formatDate(education.start_date) }} -
                  {{ formatDate(education.end_date) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <ul class="mb-0 list-inline">
          <li
            class="list-inline-item mb-2"
            v-for="skill in student.skills"
            :key="skill.id"
          >
            <span class="btn btn-primary">{{ skill.skill_name }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="resume-section" id="capstone">
      <div class="resume-section-content">
        <h2 class="mb-5">Capstone</h2>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3>{{ student.capstones.name }}</h3>
            <p>{{ student.capstones.description }}</p>
            <a
              class="btn btn-primary"
              :href="student.capstones.url"
              role="button"
              >Github repository</a
            >
            <br />
            <br />
            <img :src="student.capstones.screenshot" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="twitter">
      <div class="resume-section-content">
        <div id="tweetLoaded">
          <Timeline
            :id="student.twitter_handle"
            sourceType="profile"
            :options="{ tweetLimit: '3' }"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  width: 500px;
}
img.avatar {
  border-radius: 50%;
  width: 150px;
}
#skills .btn-primary:hover {
  background-color: #bd5d38;
  border-color: #bd5d38;
  cursor: default;
}
#skills .list-inline-item:nth-child(even) .btn {
  background-color: #6c757d;
  border-color: #6c757d;
}
</style>

<script>
import { Timeline } from "vue-tweet-embed";
import moment from "moment";
import Vue2Filters from "vue2-filters";
import axios from "axios";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Let's see if this worked!",
      student: "",
      errors: []
    };
  },
  created: function() {
    axios.get(`/api/students/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format("MMMM YYYY");
    }
  },
  components: {
    Timeline
  }
};
</script>
