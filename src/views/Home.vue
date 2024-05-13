<template>
  <main>
    <button type="button" class="btn btn-primary" @click="login">Login</button>
  </main>
</template>


<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect,isAuthenticated } = useAuth0();
console.log(isAuthenticated.value)

const login = () => {
  loginWithRedirect();
}

</script>