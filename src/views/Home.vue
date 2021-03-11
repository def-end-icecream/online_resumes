<template>
  <div class="home" v-if="students">
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <span class="navbar-brand">Online Resumes</span>
    </nav>
    <div class="container">
      <h1 class="pt-4">Students</h1>
      <form class="d-flex align-items-center my-3">
        <label for="search" class="mr-3 sr-only">Search</label>
        <input
          type="text"
          class="form-control"
          id="search"
          placeholder="First name, last name, job title..."
          v-model="search"
        />
        <button type="submit" class="btn btn-primary ml-3">
          Search
        </button>
      </form>
      <div class="row row-cols-1 row-cols-md-3">
        <div
          class="col mb-4"
          v-for="student in filterBy(
            students,
            search,
            'first_name',
            'last_name',
            'experiences'
          )"
          :key="student.id"
        >
          <div class="card">
            <router-link :to="`/students/${student.id}`" class="stretched-link">
              <img
                :src="student.image_url"
                class="card-img-top"
                :alt="`${student.first_name} ${student.last_name}`"
              />
            </router-link>
            <div class="card-body">
              <h5 class="card-title"
                >{{ student.first_name }} {{ student.last_name }}</h5
              >
              <h6
                v-if="student.experiences[0]"
                class="card-subtitle text-muted"
              >
                {{ student.experiences[0].job_title }}
              </h6>
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
}
.home {
  background-color: #eaeaea;
  padding-top: 3.375rem;
}
@media (min-width: 992px) {
  .students-show {
    padding-left: 17rem;
  }
}
</style>
<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      students: "",
      search: ""
    };
  },
  created: function() {
    axios.get("/api/students").then(response => {
      console.log("student index", response);
      this.students = response.data;
    });
  },

  methods: {}
};
</script>
