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
        <img :src="user.image_url" alt="User profile picture" class="avatar" />
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
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Senior Web Developer</h3>
            <div class="subheading mb-3">Intelitec Solutions</div>
            <p>
              Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
              going forward, a new normal that has evolved from generation X is on the runway heading towards a
              streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
              offshoring.
            </p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">March 2013 - Present</span></div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Web Developer</h3>
            <div class="subheading mb-3">Intelitec Solutions</div>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
              digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information
              highway will close the loop on focusing solely on the bottom line.
            </p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">December 2011 - March 2013</span></div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">Junior Web Designer</h3>
            <div class="subheading mb-3">Shout! Media Productions</div>
            <p>
              Podcasting operational change management inside of workflows to establish a framework. Taking seamless key
              performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a
              deep dive on the start-up mentality to derive convergence on cross-platform integration.
            </p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">July 2010 - December 2011</span></div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">Web Design Intern</h3>
            <div class="subheading mb-3">Shout! Media Productions</div>
            <p>
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
              users after installed base benefits. Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">September 2008 - June 2010</span></div>
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

    <section class="resume-section" id="capstone">
      <div class="resume-section-content">
        <h2 class="mb-5">Capstone</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3>{{ capstone.name }}</h3>
            <p>{{ capstone.description }}</p>
            <a class="btn btn-primary" href="capstone.url" role="button">Github repository</a>
            <br />
            <br />
            <img :src="capstone.screenshot" alt="" />
          </div>
        </div>
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
img.avatar {
  border-radius: 50%;
  width: 150px;
}
img {
  width: 500px;
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
      capstone: {
        name: "Cheesehub",
        description: "This is a website where you can talk about and share pictures of cheese",
        url: "www.github.com",
        screenshot: "https://cdn.cnn.com/cnnnext/dam/assets/200623110902-cheddar-cubes-full-169.jpg",
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
