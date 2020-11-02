<template>
  <main>
    <div class="row">
      <input
        type="text"
        class="search"
        placeholder="Country Search"
        v-model="search"
      />
      <div class="command">
        <button class="btn search" @click="searchRegion" :disabled="!search">
          <span v-if="!isLoading">Search</span>
          <half-circle-spinner
            :animation-duration="1000"
            :size="20"
            color="#0000FF"
            v-else
          ></half-circle-spinner>
        </button>
        <button class="btn delete" @click="clearRegion">Clear</button>
      </div>
    </div>
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="global">
            <h2 style="color: white">Global Cases</h2>
            <app-global-chart :cases="cases"></app-global-chart>
          </div>
          <transition name="fade">
            <div class="region" v-if="!isEmpty">
              <h2 style="color: white">{{ regionCase.data.location }} Cases</h2>
              <app-region-chart :case="regionCase"></app-region-chart>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import GlobalChart from "./GlobalChart.vue";
import RegionChart from "./RegionChart.vue";
import { HalfCircleSpinner } from "epic-spinners";

export default {
  props: ["cases"],
  components: {
    appGlobalChart: GlobalChart,
    appRegionChart: RegionChart,
    HalfCircleSpinner,
  },
  data() {
    return {
      search: null,
      regionCase: null,
      isLoading: false,
      isEmpty: true,
    };
  },
  methods: {
    searchRegion() {
      this.isLoading = true;
      axios
        .get("https://covid2019-api.herokuapp.com/v2/country/" + this.search)
        .then((res) => {
          if (Object.entries(res.data.data).length === 0) {
            this.$toasted.show("Country Not Found!!", {
              theme: "bubble",
              position: "top-right",
              duration: 4000,
            });
            this.isLoading = false;
          } else {
            this.regionCase = res.data;
            this.isLoading = false;
            this.isEmpty = false;
          }
        })
        .catch((err) => console.log(err));
    },
    clearRegion() {
      // alert(`This Works!`);
      this.search = null;
      this.regionCase = null;
      this.isEmpty = true;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  margin: auto;
}

.search {
  font-family: inherit;
  font-weight: bold;
  font-size: 20px;
  margin: 10px auto;
  width: 300px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  outline: none;
}

.search:focus {
  border: 3px solid #40b782;
}

.btn {
  padding: 5px 10px;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100px;
  margin: 5px;
}

.command {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn.search {
  background-color: #40b782;
  margin: auto;
}

.btn.search:hover {
  cursor: pointer;
  background-color: #75b89a;
}

.btn.search[disabled] {
  background-color: #b9b9b9;
  text-decoration: line-through;
}

.btn.search:hover[disabled] {
  background-color: #b9b9b9;
  cursor: unset;
}

.btn.delete {
  background-color: red;
}

.btn.delete:hover {
  cursor: pointer;
  background-color: rgb(250, 91, 91);
}

.card {
  background-color: #1d1e1f;
  padding: 20px;
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 9px -3px rgba(0, 0, 0, 0.75);
}

.card-body {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body h2 {
  text-align: center;
}

.global,
.region {
  margin: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition-delay: 0.5s;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .card-body {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .search {
    width: 250px;
  }

  .command {
    flex-direction: column;
  }

  .btn {
    width: 200px;
    margin: 5px auto;
  }

  .btn.search:hover {
    cursor: pointer;
    background-color: #75b89a;
  }

  .btn.search[disabled] {
    background-color: #b9b9b9;
    text-decoration: line-through;
  }

  .btn.search:hover[disabled] {
    background-color: #b9b9b9;
    cursor: unset;
  }

  .card {
    width: 100vw;
  }

  .card-body {
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
  }
}
</style>