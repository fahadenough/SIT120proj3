<template>
  <!-- Navigation bar using vue router -->
  <nav>
    <h1>TasteBuddy</h1>
    <!-- router links/buttons besides the logo on the navbar -->
      <div class="menu"> 
        <ul>
          <li><router-link :to="{ name: 'roll'}">home</router-link></li>
          <li><router-link :to="{ name: 'restaurants'}">restaurants</router-link> </li>
          <li><router-link :to="{ name: 'contact'}">contact</router-link> </li>
          <li><router-link :to="{ name: 'profile'}">profile</router-link> </li>
        </ul>
    </div>

  </nav>
  <router-view/>
</template>

<script>

</script>

<style>

*{
  font-family: sans-serif;
}
nav{
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
}
nav h1{
  color: white;
}

nav li, a, button {
  font-weight: 500;
  font-size: 16px;
  color: white;
  text-decoration: none;
  list-style: none;
}

nav li {
  display: inline-block;
  padding: 0px 20px;
}

nav li a:hover{
  color: red;
}

button {
  padding: 9px 25px;
  background-color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.menu {
    display: flex;
    justify-content: space-between;
  }


@media (max-width: 768px){

  .menu {
    right: 3%;
    top: 8px;
    gap: 0;
    flex-direction: column;
    background-color: rgb(43, 43, 43);
    text-align: left;
    width: 42%;
  }

  nav li {
    margin: 2px 0;
  }
}
</style>
