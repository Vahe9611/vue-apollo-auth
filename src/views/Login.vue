<template>
  <div class="login__form">
    <h1>Authorization</h1>
    <form action="" method="POST" @submit.prevent="login">
      <input
        @blur="loginValidation"
        @input="validationTrue"
        type="text"
        placeholder="Login"
        v-model="user"
      />
      <div><p v-if="userNotValid">The login field is required</p></div>
      <input
        @blur="passwordValidation"
        @input="validationTrue"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <div><p v-if="passwordNotValid">The password field is required</p></div>
      <input type="submit" value="Log In" />
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      user: '',
      password: '',
      userNotValid: false,
      passwordNotValid: false,
    };
  },
  methods: {
    login() {
      console.log('login');
    },
    validationTrue() {
      this.userNotValid = false;
      this.passwordNotValid = false;
    },
    loginValidation() {
      if (!this.user.trim()) {
        this.userNotValid = true;
      } else {
        this.userNotValid = false;
      }
    },
    passwordValidation() {
      if (!this.password.trim()) {
        this.passwordNotValid = true;
      } else {
        this.passwordNotValid = false;
      }
    },
  },
};
</script>

<style scoped>
.login__form {
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 35%;
}
form {
  width: 100%;
  height: 100%;
}
form input,
form div {
  width: 100%;
  height: 9%;
  box-sizing: border-box;
}
form input[type="submit"] {
  background: rgb(53, 53, 131);
  font-size: 20px;
}
form p {
  color: red;
}
</style>
