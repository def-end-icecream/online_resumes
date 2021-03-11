<template>
  <div class="users-show">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{student.first_name}} {{student.last_name}}</span>
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
        <img :src="student.image_url" alt="User profile picture" class="avatar" />
        <h1>{{ student.first_name }} {{ student.last_name }}</h1>
        <h3>
          <a :href="`mailto:${student.email}`">{{ student.email }}</a>
          |
          <a :href="`tel:${student.phone_number}`">
            {{ student.phone_number }}
          </a>
        </h3>

        <p>Bio bio bio</p>
        <div class="social-icons">
          <a :href="student.linkedin_url" class="social-icon"><i class="fab fa-linkedin"></i></a>

          <a :href="student.github" class="social-icon"><i class="fab fa-github"></i></a>

          <a :href="`https://twitter.com/${student.twitter_handle}`" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="resume-section" id="experience">
      <div class="resume-section-content">
        <h2 class="mb-5">Experience</h2>
        <div v-for="experience in orderBy(student.experiences, 'end_date', -1)" :key="experience.id">
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
         <div v-for="education in student.educations" v-bind:key="education.university_name">
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            
            <h3 class="mb-0">{{education.university_name}}</h3>
            
            
          <div class="subheading mb-3">{{education.degree}}</div>
            
            <div>{{education.details}}</div>
            
           
          
          <div class="flex-shrink-0"><span class="text-primary">{{education.start_date}} - {{education.end_date}}</span></div>
        </div>
        </div>
        </div>
        
        
      </div>
      
    </section>

    <section class="resume-section" id="skills">
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <ul class="mb-0 list-inline">
          <li class="list-inline-item mb-2" v-for="skill in student.skills" :key="skill.id">
            <span class="btn btn-primary">{{ skill.skill_name }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="resume-section" id="capstone">
      <div class="resume-section-content">
        <h2 class="mb-5">Capstone</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3>{{ student.capstone.name }}</h3>
            <p>{{ student.capstone.description }}</p>
            <a class="btn btn-primary" :href="student.capstone.url" role="button">Github repository</a>
            <br />
            <br />
            <img :src="student.capstone.screenshot" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="twitter">
      <div class="resume-section-content">
        <div id="tweetLoaded">
          <Timeline :id="student.twitter_handle" sourceType="profile" :options="{ tweetLimit: '3' }" />
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
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Let's see if this worked!",
      student: {
        id: 1,
        last_name: "Amores",
        first_name: "Casee",
        email: "casee.amores@gmail.com",
        phone_number: "111-1111",
        short_bio:
          "As an adept web developer with experience in a consulting environment, I understand that being a developer means being in a constant state of learning. I've fixed broken code that I inherited, deployed cloud servers for the first time by reading documentation, and learned Salesforce to support a client who used it. I am eager to dive further into backend development and overcome new challenges.",
        linkedin_url: "linkedin.com/in/camores",
        twitter_handle: "hamillhimself",
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
        capstone: {
          name: "Cheesehub",
          description: "This is a website where you can talk about and share pictures of cheese",
          url: "https://www.github.com",
          screenshot: "https://cdn.cnn.com/cnnnext/dam/assets/200623110902-cheddar-cubes-full-169.jpg",
        },
        skills: [
          { id: 1, skill_name: "HTML" },
          { id: 2, skill_name: "Javascript" },
          { id: 3, skill_name: "Ruby" },
          { id: 4, skill_name: "Rails" },
          { id: 5, skill_name: "Vue.js" },
          { id: 6, skill_name: "Git" },
          { id: 7, skill_name: "Github" },
        ],
        educations:[{
          start_date:"August 2006",
          end_date:"May 2010",
          degree:"Bachelor of Science",
          university_name:"UNIVERSITY OF COLORADO BOULDER",
          details:"Computer Science - Web Development Track GPA: 3.23"
          },
          {
          start_date:"August 2002",
          end_date:"May 2006",
          degree:"TECHNOLOGY MAGNET PROGRAM",
          university_name:"JAMES BUCHANAN HIGH SCHOOL",
          details:"GPA: 3.56"
          }]
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
