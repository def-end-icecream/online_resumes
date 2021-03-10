<template>
  <div class="users-show">
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
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
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
      </div>
    </section>
    <section class="resume-section" id="experience">
      <div class="resume-section-content">
        <h2 class="mb-5">Experience</h2>
        <div v-for="experience in orderBy(user.experiences, 'end_date', -1)" :key="experience.id">
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">{{ experience.job_title }}</h3>
              <div class="subheading mb-3">{{ experience.company_name }}</div>
              <p>
                {{ experience.details }}
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">
                {{ formatDate(experience.start_date) }} - {{ formatDate(experience.end_date) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="education">
      <div class="resume-section-content">
        <h2 class="mb-5">Education</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">University of Colorado Boulder</h3>
            <div class="subheading mb-3">Bachelor of Science</div>
            <div>Computer Science - Web Development Track</div>
            <p>GPA: 3.23</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">James Buchanan High School</h3>
            <div class="subheading mb-3">Technology Magnet Program</div>
            <p>GPA: 3.56</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">August 2002 - May 2006</span></div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item"><i class="fab fa-html5"></i></li>
          <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
          <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
          <li class="list-inline-item"><i class="fab fa-angular"></i></li>
          <li class="list-inline-item"><i class="fab fa-react"></i></li>
          <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
          <li class="list-inline-item"><i class="fab fa-sass"></i></li>
          <li class="list-inline-item"><i class="fab fa-less"></i></li>
          <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
          <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
          <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
          <li class="list-inline-item"><i class="fab fa-npm"></i></li>
        </ul>
        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li"><i class="fas fa-check"></i></span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span class="fa-li"><i class="fas fa-check"></i></span>
            Cross Browser Testing & Debugging
          </li>
          <li>
            <span class="fa-li"><i class="fas fa-check"></i></span>
            Cross Functional Teams
          </li>
          <li>
            <span class="fa-li"><i class="fas fa-check"></i></span>
            Agile Development & Scrum
          </li>
        </ul>
      </div>
    </section>

    <section class="resume-section" id="twitter">
      <div class="resume-section-content">
        <div id="tweetLoaded">
          <Timeline :id="user.twitter" sourceType="profile" :options="{ tweetLimit: '3' }" />
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
</style>

<script>
import { Timeline } from "vue-tweet-embed";
import moment from "moment";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Let's see if this worked!",
      user: {
        id: 1,
        last_name: "Amores",
        first_name: "Casee",
        email: "casee.amores@gmail.com",
        phone_number: "111-1111",
        short_bio:
          "As an adept web developer with experience in a consulting environment, I understand that being a developer means being in a constant state of learning. I've fixed broken code that I inherited, deployed cloud servers for the first time by reading documentation, and learned Salesforce to support a client who used it. I am eager to dive further into backend development and overcome new challenges.",
        linkedin_url: "linkedin.com/in/camores",
        twitter_handle: "cassee twit",
        personal_website_url: "n/a",
        resume_url: "linkedin.com/in/camores",
        github_url: "https://github.com/davidcalhoun4?tab=repositories",
        image_url:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHUGZ-q868W9A/profile-displayphoto-shrink_200_200/0/1572832092439?e=1620864000&v=beta&t=ZpD5706ZRVpQqajyMK_d4Ca-DGytu3JHDbwSK7wOt8c",
        experiences: [
          {
            id: 1,
            student_id: 1,
            start_date: "2021-01-01",
            end_date: "2021-03-02",
            job_title: "Job",
            company_name: "company",
            details: "work",
          },
          {
            id: 2,
            student_id: 1,
            start_date: "2020-08-03",
            end_date: "2020-12-04",
            job_title: "big time job",
            company_name: "super duper company",
            details: "workin hard",
          },
          {
            id: 3,
            student_id: 1,
            start_date: "2020-01-05",
            end_date: "2020-04-12",
            job_title: "whatever",
            company_name: "ya know",
            details: "ugh",
          },
          {
            id: 4,
            student_id: 1,
            start_date: "2020-07-05",
            end_date: "2020-05-12",
            job_title: "who's asking?",
            company_name: "why do u wanna know, huh?",
            details: "leave me alone",
          },
        ],
      },
    };
  },
  created: function() {},
  methods: {
    formatDate: function(date) {
      return moment(date).format("MMMM YYYY");
    },
  },
  components: {
    Timeline,
  },
};
</script>
