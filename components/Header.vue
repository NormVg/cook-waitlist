<template>
<div id="header-box">

  <img :src="LogoCook" alt="cook image">

  <div id="header-nav">
    <div class="header-nav-item">FEATURES</div>
    <div class="header-nav-item">JOIN WAITLIST</div>
    <div class="header-nav-item">FOLLOW JOURNEY</div>

  </div>

</div>
</template>

<script setup>
import LogoCook from "../assets/img/logo.svg"

</script>

<style scoped>

#header-box{
  border: 5px solid var(--white);
  margin: 30px;
  margin-top: 5px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}

#header-box img{
  height: 45px;
}

#header-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: max-content;
  height: 100%;
}

.header-nav-item {
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
  cursor: pointer;
  transition: color 0.3s ease;
}

.header-nav-item:hover {
  color: var(--primary-color);
}



</style>
