<template >
  <div id="card">
    <h1>{{ this.DataList.Name }}</h1>
    <hr />
    <hr />
    <label> {{ this.DataList.Description }}</label>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      DataList: [],
    };
  },
  created() {
    this.DataList = this.$route.query.data;
    console.log(this.$route.query.data);
  },
};
</script>




<style scoped>
#card {
  /* box-shadow: 5px 10px 10px rgb(22, 20, 20); */
  padding-top: 0.2px;
  margin: 12px;
  border-radius: 10px;
  height: 600px;
  width: 600px;
  display: inline-block;
  justify-content: center;
  text-align: center;
}
</style>
