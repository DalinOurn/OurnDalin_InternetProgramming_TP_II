<template>
  <div>
    <page-auth
      v-show="show"
      msg1="You cannot register a user. Please log out!"
      msg2="Go to home"
      msg3="/home"
    />
    <div class="container" v-show="!show">
      <div class="log_in">
        <h3>Sign Up</h3>
        <h4>Please fill this form below to sign up</h4>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          v-model="email"
        />
        <label for="username">Username</label>
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Username"
          v-model="username"
        />
        <label for="firstname">First name</label>
        <input
          type="firstname"
          name="firstname"
          id="firstname"
          placeholder="First name"
          v-model="firstname"
        />
        <label for="lastname">Last name</label>
        <input
          type="lastname"
          name="lastname"
          id="lastname"
          placeholder="Last name"
          v-model="lastname"
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Create your Password"
          v-model="password"
        />
        <h5>
          By creating an account you agree to our
          <a href="http://#">Term & Privacy</a>.
        </h5>
        <button type="submit" id="btn_signup" @click="created">Sign up</button>
        <div v-text="msg" v-bind:style="{ backgroundColor: input_color }"></div>
      </div>
      <div style="margin: 10px 0 0 18vw"><a href="/">Log in instead</a>!</div>
    </div>
  </div>
</template>

<script>
import PageAuth from "./PageAuth.vue";
export default {
  components: { PageAuth },
  data() {
    return {
      show: false,
      email: "",
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      msg: "",
      input_color: "",
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
      "http://localhost:3001/auth/register",
      requestOptions
    );
    const data = await response.json();
    if (data.message == "You can not register again") {
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
        body: JSON.stringify({
          email: this.email,
          username: this.username,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
        }),
      };
      const response = await fetch(
        "http://localhost:3001/auth/register",
        requestOptions
      );
      const data = await response.json();
      console.log("data: ", data);

      //check if user is not existed
      if (data.status == "true") {
        this.msg = data.message;
        this.input_color = "rgba(106,168,79,.8)";

        //clear input value
        this.email = "";
        this.username = "";
        this.lastname = "";
        this.firstname = "";
        this.password = "";
      } else if (data.message.code == 11000) {
        if (data.message.keyValue.email) {
          this.msg = data.message.keyValue.email + " already token";
        } else {
          this.msg = data.message.keyValue.username + " already token";
        }
        this.input_color = "rgba(204,0,0,.8)";
      } else {
        this.msg = data.message.details[0].message;
        this.input_color = "rgba(204,0,0,.8)";
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

a {
  font-weight: 700;
  color: #00a271;
}

.log_in {
  background-color: rgba(170, 170, 170, 0.8);
  width: 28vw;
  padding: 1rem;
  border-radius: 2%;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 6px;
}

.log_in > div {
  text-align: center;
}

.log_in h3 {
  color: #ecf3f7;
}

.log_in h4 {
  margin-bottom: 10px;
}

.log_in > label {
  color: rgb(255, 255, 255);
}

.log_in > input {
  background-color: #fafafa;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

.log_in > input:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}

#btn_signup {
  cursor: pointer;
  background-color: rgb(61, 133, 198);
  color: white;
  border-style: outset;
  border-color: #0066a2;
  width: 4rem;
  font: sans-serif;
  text-shadow: none;
  height: 2rem;
  margin-top: 0.645rem;
  border-radius: 0.165rem;
  margin: 0.5rem 0 0.67rem 0;
}
</style>
