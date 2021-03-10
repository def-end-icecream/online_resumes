<template>
  <div class="users-show">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
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
        <img :src="student.image_url" alt="User profile picture" />
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
          <a :href="student.linkedin_url" class="social-icon"
            ><i class="fab fa-linkedin"></i
          ></a>

          <a :href="student.github" class="social-icon"
            ><i class="fab fa-github"></i
          ></a>

          <a
            :href="`https://twitter.com/${student.twitter_handle}`"
            class="social-icon"
            ><i class="fab fa-twitter"></i
          ></a>
        </div>
      </div>
    </section>

    <section class="resume-section" id="experience">
      <div class="resume-section-content">
        <h2 class="mb-5">Experience</h2>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Senior Web Developer</h3>
            <div class="subheading mb-3">Intelitec Solutions</div>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">March 2013 - Present</span>
          </div>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Web Developer</h3>
            <div class="subheading mb-3">Intelitec Solutions</div>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line.
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">December 2011 - March 2013</span>
          </div>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">Junior Web Designer</h3>
            <div class="subheading mb-3">Shout! Media Productions</div>
            <p>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance indicators
              offline to maximise the long tail. Keeping your eye on the ball
              while performing a deep dive on the start-up mentality to derive
              convergence on cross-platform integration.
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">July 2010 - December 2011</span>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">Web Design Intern</h3>
            <div class="subheading mb-3">Shout! Media Productions</div>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">September 2008 - June 2010</span>
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section" id="education">
      <div class="resume-section-content">
        <h2 class="mb-5">Education</h2>
        <div
          class="d-flex flex-column flex-md-row justify-content-between mb-5"
        >
          <div class="flex-grow-1">
            <h3 class="mb-0">University of Colorado Boulder</h3>
            <div class="subheading mb-3">Bachelor of Science</div>
            <div>Computer Science - Web Development Track</div>
            <p>GPA: 3.23</p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">August 2006 - May 2010</span>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">James Buchanan High School</h3>
            <div class="subheading mb-3">Technology Magnet Program</div>
            <p>GPA: 3.56</p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">August 2002 - May 2006</span>
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
export default {
  data: function() {
    return {
      message: "Let's see if this worked!",
      student: {
        id: 1,
        first_name: "Casee",
        last_name: "Amores",
        email: "casee.amores@gmail.com",
        phone_number: "111-1111",
        short_bio:
          "As an adept web developer with experience in a consulting environment, I understand that being a developer means being in a constant state of learning. I’ve fixed broken code that I inherited, deployed cloud servers for the first time by reading documentation, and learned Salesforce to support a client who used it. I am eager to dive further into backend development and overcome new challenges.",
        linkedin_url: "linkedin.com/in/camores",
        twitter_handle: "PS5StockAlerts",
        personal_website_url: "n/a",
        resume_url: "linkedin.com/in/camores",
        github_url: "https://github.com/davidcalhoun4?tab=repositories",
        image_url:
          "https://media-exp1.licdn.com/dms/image/C4E03AQHUGZ-q868W9A/profile-displayphoto-shrink_200_200/0/1572832092439?e=1620864000&v=beta&t=ZpD5706ZRVpQqajyMK_d4Ca-DGytu3JHDbwSK7wOt8c",
        created_at: "2021-03-10T18:15:11.965Z",
        updated_at: "2021-03-10T18:15:11.965Z",
        password_digest:
          "$2a$12$NwJQpp0LByxS/LyecD/CVeOlJ5ID63BmfU0EexL5/Jhi/0/qE8WXq",
        skills: [
          { id: 1, skill_name: "HTML" },
          { id: 2, skill_name: "Javascript" },
          { id: 3, skill_name: "Ruby" },
          { id: 4, skill_name: "Rails" },
          { id: 5, skill_name: "Vue.js" },
          { id: 6, skill_name: "Git" },
          { id: 7, skill_name: "Github" }
        ]
      }
    };
  },
  created: function() {},
  methods: {},
  components: {
    Timeline
  }
};
</script>
