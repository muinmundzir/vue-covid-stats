<template>
  <nav>
    <div class="logo">
      <img alt="Vue logo" src="../../assets/logo.png" />
      <a href="#">Covid19</a>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #2f3034;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 60px;
  box-shadow: 0px 2px 9px -3px rgba(0, 0, 0, 0.75);
}

.logo {
  padding: 10px;
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.logo img {
  height: 30px;
}

.logo a {
  text-decoration: none;
  color: white;
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.nav {
  display: flex;
  align-items: center;
  list-style-type: none;
}

.nav-item {
  margin-right: 20px;
  height: 100%;
}

.nav-link {
  padding: 20px 10px;
  display: inline-block;
  height: 100%;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #3a3f3e;
  font-size: 17px;
}

.nav-link.active {
  font-size: 17px;
  font-weight: bold;
}
</style>