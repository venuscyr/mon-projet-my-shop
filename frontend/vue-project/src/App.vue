<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/login">Login/Register</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      
      <router-view>
        
      </router-view>
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: #42b983;
}

nav ul li a.router-link-active {
  font-weight: bold;
  color: #35495e;
}

footer {
  margin-top: 20px;
  font-size: 0.8rem;
  color: #aaa;
}
</style>
