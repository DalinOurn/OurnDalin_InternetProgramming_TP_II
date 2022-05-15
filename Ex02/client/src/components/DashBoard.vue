<template>
  <div class="container-dashboard">
    <div class="header-product">
      <div>ADMIN DASHBOARD</div>
      <div>PRODUCT IN CAMBODIA</div>
    </div>
    <div class="log-in" v-show="show != false">
      <div class="container">
        <div class="log_in">
          <div><img src="/src/assets/robot.png" alt="" /></div>
          <label for="email">Username</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Input username"
            v-model="email"
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Input password"
            v-model="password"
            @keyup.enter="created()"
          />
          <button type="submit" @click="logged()" id="btn_login">Log In</button>
          <div
            v-text="msg"
            v-bind:style="{ backgroundColor: input_color }"
          ></div>
        </div>
      </div>
    </div>
    <div class="items" v-show="show != true">
      <div class="item-1">
        <ul>
          <li>
            <router-link to="?category" @click="category()"
              >Category</router-link
            >
          </li>
          <li>
            <router-link
              to="?item"
              @click="items()"
              style="padding: 0.5vh 3.5vw"
              >Items</router-link
            >
          </li>
          <li>
            <router-link to="?product" @click="products()"
              >Products</router-link
            >
          </li>
        </ul>
      </div>
      <div class="item-2">
        <div
          style="display: flex; justify-content: space-between; margin: 0 1vw"
        >
          <div>{{ titleData.message }}</div>
          <button v-on:click="deleteBtn(0)">Add new</button>
        </div>
        <div v-html="display"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      email: "",
      password: "",
      show: true,
      msg: "",
      input_color: "",
      titleData: [],
      numOfCate: 0,
      display: "",
      display_item: "",
    };
  },
  async mounted() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      "http://localhost:3001/category/all",
      requestOptions
    );
    const data = await response.json();
    this.titleData = data;
    this.numOfCate = this.titleData.data.length;
    this.display =
      `<table><tr>` +
      `<th>Name</th>` +
      `<th>Description</th>` +
      `<th>imageURL</th>` +
      `<th>action</th>` +
      `</tr>`;
    for (var i = 0; i < this.numOfCate; i++) {
      this.display_item =
        this.display_item +
        `<tr>` +
        `<td>${this.titleData.data[i].name}</td>` +
        `<td>${this.titleData.data[i].description}</td>` +
        `<td>${this.titleData.data[i].imageURL}</td>` +
        `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
        `</tr>`;
    }
    this.display = this.display + this.display_item + `</table>`;

    console.log(this.titleData);
    console.log(this.numOfCate);
  },
  methods: {
    deleteBtn(id) {
      alert(id);
    },
    logged() {
      if (!this.email || !this.password) {
        this.msg = "Username or password cannot empty.";
        this.input_color = "rgba(240,0,0,.6)";
      } else {
        if (this.email == "admin" && this.password == "12345") {
          this.show = false;
        } else {
          this.msg = "Username or password is incorrect.";
          this.input_color = "rgba(240,0,0,.6)";
        }
      }
    },
    async category() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:3001/category/all",
        requestOptions
      );
      const data = await response.json();
      this.titleData = data;
      this.numOfCate = this.titleData.data.length;
      this.display = "";
      this.display_item = "";
      this.display =
        `<table><tr>` +
        `<th>Name</th>` +
        `<th>Description</th>` +
        `<th>imageURL</th>` +
        `<th>action</th>` +
        `</tr>`;
      for (var i = 0; i < this.numOfCate; i++) {
        this.display_item =
          this.display_item +
          `<tr>` +
          `<td>${this.titleData.data[i].name}</td>` +
          `<td>${this.titleData.data[i].description}</td>` +
          `<td>${this.titleData.data[i].imageURL}</td>` +
          `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
          `</tr>`;
      }
      this.display = this.display + this.display_item + `</table>`;

      console.log(this.titleData);
      console.log(this.numOfCate);
    },
    async items() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:3001/item/all",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.titleData = data;
      this.numOfCate = this.titleData.data.length;
      this.display = "";
      this.display_item = "";
      this.display =
        `<table><thead><tr>` +
        `<th>Name</th>` +
        `<th>Description</th>` +
        `<th>Category</th>` +
        `<th>action</th>` +
        `</tr></thead><tbody>`;
      for (var i = 0; i < this.numOfCate; i++) {
        this.display_item =
          this.display_item +
          `<tr>` +
          `<td>${this.titleData.data[i].name}</td>` +
          `<td>${this.titleData.data[i].description}</td>` +
          `<td>${this.titleData.data[i].category}</td>` +
          `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
          `</tr>`;
      }
      this.display = this.display + this.display_item + `</tbody></table>`;

      console.log(this.titleData);
      console.log(this.numOfCate);
    },
    async products() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "http://localhost:3001/product/all",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.titleData = data;
      this.numOfCate = this.titleData.data.length;
      this.display = "";
      this.display_item = "";
      this.display =
        `<table><thead><tr>` +
        `<th>Name</th>` +
        `<th>imageURL</th>` +
        `<th>Item</th>` +
        `<th>action</th>` +
        `</tr></thead><tbody>`;
      for (var i = 0; i < this.numOfCate; i++) {
        this.display_item =
          this.display_item +
          `<tr>` +
          `<td>${this.titleData.data[i].name}</td>` +
          `<td>${this.titleData.data[i].imageURL}</td>` +
          `<td>${this.titleData.data[i].item}</td>` +
          `<td><button @click="editBtn(${i})">Edit</button><button @click="deleteBtn(${i})">Delete</button></td>` +
          `</tr>`;
      }
      this.display = this.display + this.display_item + `</tbody></table>`;

      console.log(this.titleData);
      console.log(this.numOfCate);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-size: 18px;
  display: block;
  color: rgba(91, 91, 91, 0.7);
  background-color: rgba(247, 247, 247);
}
header {
  display: none;
}
#app {
  padding: 0;
  margin: 0;
}
.container-dashboard {
  width: 100%;
}
.container-dashboard .header-product {
  background-color: rgba(139, 157, 195, 0.8);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 5vw;
  width: 99vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-dashboard .log-in {
  height: 92.5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.log_in {
  background-color: rgba(170, 170, 170, 0.8);
  width: 27vw;
  padding: 1rem;
  border-radius: 2px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 6px;
}

.log_in > div {
  text-align: center;
}

.log_in > label {
  color: rgb(255, 255, 255);
}

.log_in > div > img {
  width: 13rem;
  margin-bottom: 0.78rem;
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

.container2 {
  margin: -45rem 0 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 93vw;
  height: 93vh;
}

#btn_login {
  cursor: pointer;
  background-color: rgb(61, 133, 198);
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

.container-dashboard .items {
  display: flex;
  width: 100vw;
  height: 92.5vh;
  border: 2px solid black;
}
.items .item-1 {
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid black;
  position: relative;
}
.items .item-2 {
  width: 90%;
  border: 2px solid black;
}
ul {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
li {
  list-style-type: none;
}
li > a {
  border: 2px solid black;
  padding: 0.5vh 2.7vw;
}
li > a:focus {
  background-color: rgb(24, 54, 33, 0.8);
}

table {
  font-family: arial, sans-serif;
  border-collapse: separate;
  font-size: 16px;
  width: 90%;
  margin: 1% 5% 0 5%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

/* thead tr {
  display: block;
} */
</style>
