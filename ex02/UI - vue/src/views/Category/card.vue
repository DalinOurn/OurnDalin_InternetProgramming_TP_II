<template>
  <div class="card">
    <img
      class="card-img"
      src="https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg"
      alt=""
    />
    <div class="card-title">{{ products.name }}</div>
    <br />
    <div class="card-price">{{ products.desc }}</div>
  </div>
</template>

<script>
export default {
    props: ["products"]
};
</script>

<style scoped>
.card {
  width: 160px;
  height: 220px;
  border: 1px solid;
}

.card-img {
  width: 100%;
}

.card-title {
  text-align: center;
}

.card-price {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>
