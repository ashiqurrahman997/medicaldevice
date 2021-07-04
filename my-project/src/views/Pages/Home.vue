<template >
  <div id="">
    <h1>Welcome to Medical Device Management System</h1>
    <div class="login" id="card">
      <h1 id="feild">LOGIN</h1>
      <hr />
      <form @submit="Login" method="post">
        <input type="text" placeholder="Username" v-model="email" />
        <br /><br />
        <input type="password" placeholder="Username" v-model="password" />
        <br />
        <br />
        <button type="submit">Login</button>

      </form>
      <p style="color: red" v-if="!this.usernameConfirm">
        Username is required
      </p>
      <p style="color: red" v-if="this.passwordConfirm == false">
        Password is required
      </p>
      <a href="/api/devicetype">Login as a guest</a>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
export default {
  name: "login",

  data() {
    return {
      DataList: [],
      usernameConfirm: true,
      passwordConfirm: true,
      email: null,
      password: null,
    };
  },
  methods: {
    Login(e: Event) {
      e.preventDefault();

      this.usernameConfirm = true;
      this.passwordConfirm = true;

      if (!this.email) {
        this.usernameConfirm = false;
      }
      if (!this.password) {
        this.passwordConfirm = false;
      }
      let data = {
        email: this.email,
        password: this.password,
      };

      axios.get("http://localhost:8081/data.json").then((res) => {
          this.DataList = res.data.login[0];
          console.log(this.DataList);

          if (
            this.email == this.DataList.email &&
            this.password == this.DataList.password
          ) {
            alert("Sucessfull Login");

            this.$router.push("/api/devicetype");
            //   this.$LoinConfirm =false
          } else {
            alert("Email or Password is not correct");
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
  },
};

</script>

<style scoped>
#card {
  background-color: azure;
  box-shadow: 5px 10px 10px rgb(22, 20, 20);
  padding-top: 0.2px;
  margin: 12px;
  border-radius: 10px;
  height: 400px;
  width: 300px;
  display: inline-block;
  justify-content: center;
  text-align: center;
}
</style>