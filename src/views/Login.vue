<template>
  <div class="login">
    <h1 class="login__title">Authorization</h1>
    <form class="login__form" action="" method="POST" @submit.prevent="login">
      <b-field
        expanded
        label="Login:"
      >
        <b-input
          v-model="user"
          required
          validation-message="The login field is required"
          type="text"
          placeholder="Login"
        />
      </b-field>
      <b-field
        expanded
        label="Password:"
      >
        <b-input
          placeholder="Password"
          type="password"
          required
          validation-message="The password field is required"
          v-model="password"
        />
      </b-field>
      <b-button
        type="is-light"
        tag="input"
        native-type="submit"
        expanded
        value="Log In"
      />
      <p class="login__error" v-if="isError">You are not authenticated</p>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { onLogin } from '../services/apollo-auth';

export default {
  name: 'Login',
  data() {
    return {
      user: '',
      password: '',
      isError: false,
    };
  },
  methods: {
    async login() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: gql`
            mutation Auth($data: AuthInput!) {
              auth(input: $data)
            }
          `,
          variables: {
            data: {
              login: this.user,
              password: this.password,
            },
          },
        });

        onLogin(this.$apollo.provider.defaultClient, data.auth);
        this.$router.push({ name: 'profile' });
      } catch (error) {
        this.isError = true;
        console.log(error);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 35%;

  &__title {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
  }

  &__form {

    .field {
      margin: 24px 0;
    }
  }

  &__error {
    margin-top: 12px;
    color: red;
    font-size: 12px;
  }
}
</style>
