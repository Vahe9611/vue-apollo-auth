<template>
  <div class="profile">
    <h1 class="title">
      Your Profile
    </h1>
    <div class="profile__content">
      <p><strong>Login: </strong>{{ user.login }}</p>
      <p><strong>Name: </strong>{{ user.name }}</p>
      <p><strong>Email: </strong>{{ user.email }}</p>
    </div>
    <div class="profile__goEdit">
      <router-link to="/profile/edit">Edit profile</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapState([
      'user',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.profile {

  &__content {
    p {
      font-size: 22px;
    }
  }

  &__goEdit {
    font-size: 20px;
    margin-top: 12px;
  }
}
</style>
