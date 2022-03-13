<template>
  <div class="trainer">
    <h2>Sign Up</h2>
    <p>Please fill in this form to create an account</p>
    <hr> <br>
    Email
    <div><input class="fill_in" type="text" placeholder="Enter Email"></div>
    Username
    <div><input class="fill_in" type="text" placeholder="First Name"></div>
    Username
    <div><input class="fill_in" type="text" placeholder="First Name"></div>
    Last Name
    <div><input class="fill_in" type="text" placeholder="Last Name"></div>
    Password
    <div><input class="fill_in" type="text" placeholder="Enter password"></div>
    Repeat Password
    <div><input class="fill_in" type="text" placeholder="Repeat Password"></div>
    <p>By creating an account you agree to our <a href="">Terms & Privacy</a></p>
    <button class="push" >Sign Up</button>
  </div>

</template>

<style>
.trainer{
  border: 1px solid rgb(204, 203, 203);
  padding: 10px;
  width: 400px;
  height: 600px;
  
}
.fill_in{
  width: 100%;
  background-color: rgb(230, 228, 228);
  padding: 10px;
  margin-bottom: 5px;
  border: 1px;
  
}
.fill_in:hover{
  border: 1px solid lightseagreen;
}
.push{
  width: 48%;
  height: 8%;
  background-color: #41b883;
  border: 1px solid white;
  color: white;
}
button:hover{
  color: red;
}

</style>
