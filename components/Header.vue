<template>
<div id="header-box">

  <img :src="LogoCook" alt="cook image">

  <div id="header-nav">
    <NuxtLink to="#feature-section" class="header-nav-item">FEATURES</NuxtLink>
    <NuxtLink to="#wait-box" class="header-nav-item">JOIN WAITLIST</NuxtLink>
    <!-- <a href="#" class="header-nav-item">FOLLOW JOURNEY</a> -->
  </div>

</div>
</template>

<script setup>
import LogoCook from "../assets/img/logo.svg"
</script>

<style scoped>

#header-box {
  border: 5px solid var(--white);
  margin: 30px;
  margin-top: 5px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}

#header-box img {
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
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid var(--bg);

}

.header-nav-item:hover {

  border-bottom: 1px solid salmon;
}

</style>
