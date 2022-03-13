<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <div>
    <div class="trainner">
      <div  ><img class="background_pic" src="../assets/woma.png" alt=""></div>
      
      Username
      <div><input class="fill_inn" type="text" placeholder="Enter Uername"></div>
      Password
      <div><input class="fill_inn" type="text" placeholder="Enter Password"></div>
      <button class="push-r">Login</button>
      
    </div>
    <p class="drop" >Forgot <a href="">Password?</a></p>
    </div>

  </main>
</template>
<style>
.trainner{
    width: 400px;
    height: 450px;
    border: 2px solid rgb(201, 199, 199);
    padding: 10px;
    
  }
.background_pic{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%,-50%);
  margin-top: 20%;
  
}
.fill_inn{
  width: 100%;
  background-color: rgb(230, 228, 228);
  padding: 10px;
  margin-bottom: 5px;
  border: 1px;
}
.fill_inn:hover{
  border: 1px solid lightseagreen;
}
.push-r{
  width: 100%;
  height: 8%;
  background-color: #41b883;
  border: 1px solid white;
  color: white;
}
.drop{
  padding-left: 50%;
}
.push-r:hover{
  color: rgb(0, 255, 17);
}

</style>
