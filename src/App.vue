<template>
  <div id="app">
    <navigation id="nav" title="Main title"/>
    <div id="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/layout/navigation';

  export default {
    name : 'App',
    components : {
      Navigation,
    },
  };
</script>

