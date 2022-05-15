<template>
  <div>
    <page-auth
      v-if="show"
      msg1="You cannot attamp to home yet. Please sing in!"
      msg2="Go to sign in"
      msg3="/"
    />
    <div class="container2" v-else>
      <div class="home" v-if="userData != null">
        <h3>Welcome to Home Page</h3>
        <div>
          Hello, {{ userData.message.firstname }}
          {{ userData.message.lastname }}
        </div>
        <div>Your email: {{ userData.message.email }}</div>
        <div>Your id: {{ userData.message._id }}</div>
        <button type="submit" id="btn_logout" @click="created()">
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PageAuth from "./PageAuth.vue";
export default {
  components: { PageAuth },
  props: {
    data: Object,
  },
  data() {
    return {
      show: false,
      id: Number,
      userData: null,
    };
  },
  async mounted() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.email,
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
      }),
    };
    const response = await fetch(
      "http://localhost:3001/user/623c05d22eea1e0fcf4254fc",
      requestOptions
    );
    const data = await response.json();
    this.userData = data;

    if (data.message == "Attemp to get user info failed") {
      this.show = true;
    }
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/auth/logout",
        requestOptions
      );

      const data = await response.json();
      console.log("data: ", data);

      //check password and email matched or correct
      if (data.status == "false") {
        console.log("Message: ", data.message);
      } else {
        location.href = "/";
      }
    },
  },
};
</script>

<style>
header {
  display: none;
}
h3 {
  background-color: rgba(111, 168, 220, 0.8);
  text-align: center;
  margin-bottom: 20px;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#btn_logout {
  cursor: pointer;
  background-color: rgba(239, 54, 54);
  color: white;
  border-style: outset;
  border-color: #0066a2;
  height: 2rem;
  width: 4rem;
  font: sans-serif;
  text-shadow: none;
  margin-top: 0.645rem;
  border-radius: 0.165rem;
  margin: 0.5rem 0 0.67rem 0;
}
</style>
