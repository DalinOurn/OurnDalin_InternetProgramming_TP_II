<template>
  <div class="card">
    <img
      class="card-img"
      :src="product.imageUrl"
      alt=""
    />
    <div class="card-title">{{ product.name }}</div>
    <br />
    <div class="card-price" v-for="p in product.prices" :key="p._id">{{ p.source }} - {{ p.price }}$</div>
  </div>
</template>

<script>
export default {
    props: ["product"]
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
