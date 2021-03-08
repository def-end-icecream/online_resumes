<template>
  <div class="home">
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <span class="navbar-brand">Online Resumes</span>
    </nav>
    <div class="container">
      <h1>Students</h1>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="student in students" :key="student.id">
          <div class="card">
            <router-link :to="`/users/${student.id}`" class="stretched-link">
              <img :src="student.image_url" class="card-img-top" alt="..."
            /></router-link>
            <div class="card-body">
              <h5 class="card-title">
                {{ student.first_name }} {{ student.last_name }}
              </h5>
              <h6 class="card-subtitle text-muted">Job Title</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  padding: 0;
  background-color: #eaeaea;
}
.home {
  padding-top: 3.375rem;
}
</style>
<script>
export default {
  data: function() {
    return {
      students: [
        {
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
          experience: [
            {
              student_id: 1,
              start_date: "2021-01-01",
              end_date: "2021-01-02",
              job_title: "Job",
              company_name: "company",
              details: "work",
            },
          ],
        },
        {
          last_name: "Calhoun",
          first_name: "David",
          email: "calhoun5321@gmail.com",
          phone_number: "222-2222",
          short_bio:
            "Budding full stack web developer with a passion for the arts and health.",
          linkedin_url: "linkedin.com/in/davidcalhoun4",
          twitter_handle: "david twit",
          personal_website_url: "davidcalhoun4.github.io",
          resume_url: "linkedin.com/in/davidcalhoun4",
          github_url: "https://github.com/davidcalhoun4",
          image_url:
            "https://media-exp1.licdn.com/dms/image/C4E03AQHsGMgLJHOJxw/profile-displayphoto-shrink_200_200/0/1611181156789?e=1620864000&v=beta&t=Rg9vCmUGaG0xSU5v_ic2hLJ20NeRABgJk9aunsPYUVE",
          experience: [
            {
              student_id: 2,
              start_date: "2021-01-03",
              end_date: "2021-01-04",
              job_title: "big time job",
              company_name: "super duper company",
              details: "workin hard",
            },
          ],
        },
        {
          last_name: "Evans",
          first_name: "Mackenzie",
          email: "evans.mackenzie@gmail.com",
          phone_number: "333-3333",
          short_bio:
            "Full stack web developer with a past life in labor and delivery/women's health nursing.",
          linkedin_url: "https://www.linkedin.com/in/mackenzieevans1/",
          twitter_handle: "mackenzie twit",
          personal_website_url: "n/a",
          resume_url: "https://www.linkedin.com/in/mackenzieevans1/",
          github_url: "https://github.com/evansmackenzie",
          image_url:
            "https://media-exp1.licdn.com/dms/image/C4D03AQHFXFvCXjyc0Q/profile-displayphoto-shrink_200_200/0/1607708328167?e=1620864000&v=beta&t=BipzboHis6CWTKdZm8peTZnxhxdfMXcZLSqHqsyQqmg",
          experience: [
            {
              student_id: 3,
              start_date: "2021-01-05",
              end_date: "2021-01-06",
              job_title: "whatever",
              company_name: "ya know",
              details: "ugh",
            },
          ],
        },
        {
          last_name: "Genco-Kamin",
          first_name: "Nix",
          email: "ngencokamin@gmail.com",
          phone_number: "444-4444",
          short_bio:
            "Passionate full-stack web developer with an eye for detail",
          linkedin_url: "https://www.linkedin.com/in/ngencokamin/",
          twitter_handle: "nix twit",
          personal_website_url: "ngencokamin.github.io",
          resume_url: "https://www.linkedin.com/in/ngencokamin/",
          github_url: "https://github.com/ngencokamin",
          image_url:
            "https://media-exp1.licdn.com/dms/image/C4D03AQEU9bojr3QH2g/profile-displayphoto-shrink_200_200/0/1609352591726?e=1620864000&v=beta&t=xGKu-4qvU_D4MGTVvxERzZVCcb8KAH98VKcjqONhPHE",
        },
      ],
    };
  },
  created: function() {},
  methods: {},
};
</script>
