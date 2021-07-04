<template>
  <div class>
    <h1>Medical Device Type</h1>
    <br />
    <button @click="GoDeviceModel">Add New Device</button>
    <br />
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col" v-for="(value, key) in this.DataList" :key="key">
          <Card v-bind:msg="value.TypeName" />
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import Card from "../Components/Card.vue";
import Vue from "vue";

export default {
  components: {
    Card,
  },

  data() {
    return {
      DataList: [],
    };
  },
  created() {
    axios
      .get("http://localhost:8081/data.json")
      .then((res) => {
        this.DataList = res.data.devicetype;
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  },
  methods: {
    GoDeviceModel() {
      this.$router.push({ name: "devicemodel_add", query: { data: this.msg } });
    },
  },
};
</script>

