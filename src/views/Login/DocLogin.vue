<template>
  <div class="container vh-100">
   <div class="h-100 d-flex flex-column align-items-center justify-content-center">
    <h2>Good To See You Doc!</h2>
    <div class="container-fluid rounded shadow p-5">
      <input type="text" placeholder="username" class="form-control">
      <input type="password" placeholder="password" class="form-control mt-3">
      <button class="btn btn-primary w-100 mt-3">Login</button>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      // your data here
    };
  },
  methods: {
    // your methods here
  },
}
</script>

<style scoped>
/* your styles here */
</style>