<template>
  <div class="child-container">
    <div class="child-container-inner">
      This is the child component.
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Child extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child-container {
  color: white;
  background-color: red;
}
</style>
