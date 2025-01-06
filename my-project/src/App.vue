<template>
  <router-view></router-view>
</template>

<style>
/* bolje da pustimo App.vue prazan da ga ne prekrcavamo, kao landing page bolje napraviti zaseban landing.vue */

body {
  margin: 0;
  padding: 0;
  background-color: #2148c0;
  min-height: 100vh;
}

#app {
  background-color: #2148c0;
  min-height: 100vh;
}
</style>
