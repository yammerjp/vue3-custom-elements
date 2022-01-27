<template>
  <div class="parent-container">
    This is parent container
    <Child />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Child from './Child.vue'

@Options({
  components: {
    Child
  }
})
export default class Parent extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent-container {
  color: white;
  background-color: blue;
  padding: 8px;
}
.child-container-inner {
  color: white;
  background-color: green;
  padding: 8px;
}
</style>
