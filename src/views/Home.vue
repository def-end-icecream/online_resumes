<template>
  <div class="home">
    <div v-for="student in students" :key="student.id">
      <h3>{{ student.first_name }} {{ student.last_name }}</h3>
      <img :src="student.image_url" alt="student's image" style="width:25%" />
      <br />
      <router-link :to="`/students/${student.id}`">
        <button>More Info</button>
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      students: [],
    };
  },
  created: function() {
    axios.get("/api/students").then(response => {
      console.log(response.data);
      this.students = response.data;
    });
  },
  methods: {},
};
</script>
