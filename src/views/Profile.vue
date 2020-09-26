<template>
  <div>
    Profile
    <a href="#" @click.prevent="logout">Logout</a>
    <div>
      <p>{{ currentUser.login }}</p>
      <p>{{ currentUser.email }}</p>
      <p>{{ currentUser.name }}</p>
      <router-link to="/profile/edit">Edit profil</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      currentUser: {},
    };
  },
  methods: {
    logout() {
      console.log('logout');
    },
  },
};
</script>

<style></style>
