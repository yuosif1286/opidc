<template>
  <div v-if="isAuthenticated">
    <h1>{{ user.name }}</h1>
    <h1>{{ user.email }}</h1>
    <button type="button" class="btn btn-primary" @click="logoutt">Logout</button>

  </div>
  <div v-if="!isAuthenticated">
    <h1 >Not Authenticated Login First</h1>
  </div>
</template>
<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
const {user, isAuthenticated, logout} = useAuth0()

const logoutt = () => {
  logout();
}
</script>
<style>

</style>