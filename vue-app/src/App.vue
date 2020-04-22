<template>
  <div id="app">
    <div id="header" class="header">
      <div></div>
      <button class="icon-button">
        <span class="fas fa-th-large"></span>
      </button>
    </div>
    <div id="menu" class="menu">
      <router-link to="/">
        <div class="menu-item">
          <span class="fas fa-home"></span>Home
        </div>
      </router-link>
      <router-link to="/clients">
        <div class="menu-item">
          <span class="fas fa-users"></span>Clients
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 200px calc(100vw - 200px);
  grid-template-rows: 50px auto;
  margin: 0;
  padding: 0;
  height: 100vh;
}

a {
  text-decoration: none;
}

.header {
  grid-column: 1 / -1;
  background-color: #4ceb66;
  display: grid;
  grid-template-columns: calc(100% - 50px) 50px;
}

.menu {
  background: linear-gradient(to bottom, #4ceb66, #94eea3);
}

.menu-item {
  display: grid;
  grid-template-columns: 40px calc(100% - 40px);
  column-gap: 5px;
  padding: 20px 0;
  border-left: 2px solid #4ceb66;
  box-sizing: border-box;
  cursor: pointer;
  color: #333;
  transition: background-color 500ms ease;
}

.menu-item .fas {
  justify-self: end;
}

.menu-item:hover, .router-link-exact-active div {
  border-left: 2px solid #fff;
  box-sizing: border-box;
  background-color: #94eea3;
}

/* Button */

.icon-button {
  margin: 5px;
  margin-right: 15px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 0;
  background: #5f857b;
  color: #fff;
  box-shadow: 0px 3px 5px #333;
  cursor: pointer;
  outline: none;
}

.icon-button:active,
.button:active {
  box-shadow: inset 0px 3px 5px #333;
}

.icon-button:active .fas,
.button:active span {
  transform: translateY(1px);
}
</style>
