<template>
  <div class="Parent">
    <h1>{{ msg }}</h1>
    <div>
       <form></form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thetest",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
