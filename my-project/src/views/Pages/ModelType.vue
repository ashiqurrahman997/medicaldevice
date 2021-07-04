<template>
  <div class="devicetype">
    <h1>{{ Heading }}</h1>

    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">TypeId</th>
          <th scope="col">Name</th>
          <th scope="col">Brand Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, key) in this.DataList"
          :key="key"
          @click="OnClick(value)"
        >
          <td>{{ value.TypeId }}</td>
          <td>{{ value.Name }}</td>
          <td>{{ value.BrandName }}</td>

          <td>{{ value.Price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import axios from "axios";
import router from "../../router/index";

export default Vue.extend({
  data() {
    return {
      Heading: null,
      DataList: [],
    };
  },

  created() {
    this.Heading = this.$route.query.data;
    const a = this.Heading;
    axios
      .get("http://localhost:8081/data.json")
      .then((res) => {
        for (let key in res.data) {
          if (key == "TestingDevices") {
            this.DataList = res.data.TestingDevices;
          }
          if (key == "OperationDevices") {
            this.DataList = res.data.OperationDevices;
          }
          if (key == "HospitalDevices") {
            this.DataList = res.data.HospitalDevices;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        //   alert(err)
      });
  },

  methods: {
    OnClick(typeid: []) {
      // console.log(typeid)
      alert("Will you want to see this Modeldata");
      this.$router.push({ name: "modeldata", query: { data: typeid } });
    },
  },
});
</script>

