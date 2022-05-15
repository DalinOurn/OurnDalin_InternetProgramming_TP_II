<template>
  <div class="frem">
    <p>404</p>
    <h2>{{ msg1 }}</h2>
    <h5>the page you are looking for not available</h5>
    <a v-bind:href="msg3">{{ msg2 }}</a>
  </div>
</template>

<script>
export default {
  layout: "empty",
  name: "PageAuth",
  props: {
    msg1: String,
    msg2: String,
    msg3: String,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.frem {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/src/assets/gif.gif");
  background-position: center;
  background-repeat: no-repeat;
}

.frem p {
  position: absolute;
  top: 3rem;
  font-size: 7rem;
  color: #00000063;
}

.frem h2 {
  position: absolute;
  bottom: 8rem;
  font-size: 34px;
  color: #0e0d0d;
}

.frem h5 {
  position: absolute;
  bottom: 6rem;
  color: #0e0d0d;
}

.frem a {
  position: absolute;
  bottom: 1rem;
  background: linear-gradient(45deg, #4563b4, #8081ce);
  padding: 7px;
  color: white;
  text-decoration: none;
  font-size: 23px;
  border-radius: 13px;
}
</style>
