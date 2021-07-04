<template >
  <div id="">
    <div class="login" id="card">
      <h1 id="feild">ADD DEVICE</h1>
      <hr />
      <form @submit="Submit" method="post">
        <input type="text" placeholder="TypeID" v-model="this.ADD.id" />
        <br />

        <br />
        <input type="text" placeholder="Name" v-model="this.ADD.Name" />
        <br />
        <br />
        <input type="text" placeholder="Brand Name" v-model="this.ADD.Bname" />

        <br />
        <br />

        <input type="text" placeholder="Price" v-model="this.ADD.price" />
        <br />
        <br />

        <textarea
          placeholder="Descripttion"
          v-model="this.ADD.Description"
        ></textarea>

        <br />
        <br />
        <button type="submit">Add Device</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "login",

  data() {
    return {
      ADD: [null],
    };
  },
  methods: {
    Submit() {
      axios.post("http://localhost:8081/data.json", this.ADD).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
#card {
  box-shadow: 5px 10px 10px rgb(22, 20, 20);
  padding-top: 0.2px;
  margin: 12px;
  border-radius: 10px;
  height: 500px;
  width: 300px;
  display: inline-block;
  justify-content: center;
  text-align: center;
}
</style>