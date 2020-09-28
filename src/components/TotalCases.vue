<template>
  <div>
    <div class="row">
      <div class="card" v-for="(kasus, key) in cases.data" :key="kasus">
        <h1>{{ kasus | formatNumber }}</h1>
        <p>{{ key | firstUppercase }}</p>
      </div>
    </div>

    <app-region-cases :cases="cases" v-if="isEmpty"></app-region-cases>
  </div>
</template>

<script>
import RegionCases from "./RegionCases.vue";
import axios from "axios";

export default {
  components: {
    appRegionCases: RegionCases,
  },
  data() {
    return {
      cases: "",
      isEmpty: false,
    };
  },
  async created() {
    await axios
      .get("https://covid2019-api.herokuapp.com/v2/total")
      .then((res) => {
        this.cases = res.data;
        this.isEmpty = true;
        console.log(this.cases.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  margin: 20px auto;
}

.card {
  background-color: #1d1e1f;
  padding: 40px;
  margin: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 9px -3px rgba(0, 0, 0, 0.75);
}

.card:hover {
  border: 1px solid #40b782;
}

.card h1 {
  color: white;
}

.card p {
  color: white;
  margin-top: 20px;
  font-size: 18px;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .row {
    width: 80%;
    flex-wrap: wrap;
  }

  .card {
    width: 200px;
    margin: 10px;
  }
}

@media screen and (max-width: 767px) {
  .row {
    width: 100%;
    flex-wrap: wrap;
  }

  .card {
    margin: 10px;
    width: 300px;
  }
}
</style>