<template>
  <div class="about">
    <main class="form-signin">
      <form>
        <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
        <label class="textUser"
          >please fill in this form to create an account.</label
        >
        <div class="text-center">
          <!-- <img
          class="mb-4"
          src="../assets/logo.png"
          alt=""
          width="72"
          height="57"
        /> -->
        </div>
        <h1 class="h3 mb-3 fw-normal"></h1>
        <label class="textUser">Email</label>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Enter Email</label>
        </div>

        <label class="textUser">Usernamer</label>
        <div class="form-floating">
          <input
            type=""
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Username</label>
        </div>

        <label class="textUser">First name</label>
        <div class="form-floating">
          <input
            type=""
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">First name</label>
        </div>

        <label class="textUser">Last name</label>
        <div class="form-floating">
          <input
            type=""
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Last name</label>
        </div>

        <label class="textUser">Password</label>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Create you password</label>
        </div>
        <label style="display: flex; justify-content: flex-start; padding: 20px">
          By creating an account you agree to our <span style="color: #4285F4"> &nbsp Terms & Privay</span>
        </label>
        <div class="checkbox mb-3"></div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
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
