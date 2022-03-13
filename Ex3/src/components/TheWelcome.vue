
<template>
  <main class="form-signin">
    <form action="/Register">
      <div class="text-center">
        <img
          class="mb-4"
          src="../assets/woma.png"
          alt=""
          width="72"
          height="57"
        />
      </div>
      <h1 class="h3 mb-3 fw-normal"></h1>
      <label class="textUser">Usernamer</label>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Enter Email</label>
      </div>
      <label class="textUser">Password</label>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Enter Password</label>
      </div>

      <div class="checkbox mb-3"></div>
    </form>
    <a href="http://localhost:3000/home">
    <button
      class="w-100 btn btn-lg btn-primary"
      @click="LoginUser1"
      id="btnLogin"
      type="submit"
    >
      Login
    </button></a>

    <label style="display: flex; justify-content: flex-end; padding: 20px">
      Forget <span style="color: #41b883"> &nbsp password?</span>
    </label>
  </main>
</template>

<style>
a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
.btn-primary {
  background-color: #41b883;
  border-color: #41b883;
}
.mb-4 {
  height: 200px;
  width: 200px;
}
.textUser {
  padding: 12px;
}
form {
  box-shadow: 0 0 3px #ccc;
  padding: 10px;
}
.form-signin {
  width: 100%;
  max-width: 6 30px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
<script>
import "./sign-in/assets/dist/css/bootstrap.min.css";
import "../../services/l.js";
import "../../services/r.js";

export function login() {}

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMsg: `An error occurred, please try again`,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await this.axios.post(`http://localhost:1337/auth/local`, {
          identifier: this.email,
          password: this.password,
        });

        const { jwt, user } = res.data;
        window.localStorage.setItem("jwt", jwt);
        window.localStorage.setItem("userData", JSON.stringify(user));
        window.localStorage.setItem(
          "bookmarks",
          JSON.stringify(user.bookmarks)
        );
        this.$router.push("/");
      } catch (error) {
        this.error = true;
        this.password = "";
      }
    },
  },
};
</script>
