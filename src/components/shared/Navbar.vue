<template>
  <nav>
    <div class="logo">
      <img alt="Vue logo" src="../../assets/logo.png" />
      <h2>Covid19</h2>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <a href="#" class="nav-link active">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">News</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">About</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: #323736;
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.logo {
  padding: 10px;
  display: flex;
  align-items: center;
}

.logo img {
  height: 30px;
}

.logo h2 {
  color: white;
  margin-left: 5px;
  font-size: 20px;
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