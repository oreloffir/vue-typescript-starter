<template>
  <div class="exampleView">
    <takeOrder title="Take Order"/>
  </div>
</template>
<script>
  import TakeOrder from '../components/takeOrder/Index';

  export default {
    name: 'TakeOrderView',
    components: {
      TakeOrder,
    },
  };
</script>
