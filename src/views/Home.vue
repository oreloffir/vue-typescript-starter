<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/monkey.svg">
    <HelloWorld msg="Welcome to Your Vue.js & TypeScript starter"/>
  </div>
</template>

<script>
import HelloWorld from '../components/helloWorld/Index';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
