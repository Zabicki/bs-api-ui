<template>
  <div id="app">
    <nav class="nav-container">
      <router-link class="nav-link" to="/postgres">Postgres</router-link>
      <router-link class="nav-link" to="/cassandra">Cassandra</router-link>
      <router-link class="nav-link" to="/elasticsearch">Elasticsearch</router-link>
      <router-link class="nav-link" to="/redis">Redis</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
  .nav-container {
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
  }

  .nav-link {
    margin-right: 10px;
    padding: 8px 15px;
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
  }

  .nav-link:hover {
    background-color: #ddd;
    color: #555;
  }

  .nav-link:active {
    background-color: #bbb;
    color: #444;
  }

  .nav-link.router-link-active {
    background-color: #007BFF;  /* Example color; you can choose any other */
    color: white;               /* Set text color to white for contrast */
  }
</style>