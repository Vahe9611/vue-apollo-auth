<template>
  <div class="editProfile">
    <h1 class="editProfile__title">Edit Profile</h1>
    <form class="editProfile__form" action="" method="POST" @submit.prevent="editProfile">
      <b-field
        expanded
        label="Name:"
      >
        <b-input
          v-model="name"
          placeholder="Name"
          type="text"
          required
          validation-message="The name field is required"
        />
      </b-field>
      <b-field
        expanded
        label="Email:"
      >
        <b-input
          v-model="email"
          required
          type="email"
          placeholder="Login"
        />
      </b-field>
      <b-button
        type="is-light"
        tag="input"
        native-type="submit"
        expanded
        value="Save cahnges"
      />
    </form>
    <div class="editProfile__goProfile">
      <router-link to="/profile">Show Profile</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import gql from 'graphql-tag';

export default {
  name: 'EditProfile',
  data() {
    return {
      email: '',
      name: '',
    };
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
  watch: {
    user: {
      handler(value) {
        if (!value) return;

        const { email, name } = value;
        this.email = email;
        this.name = name;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations([
      'setUser',
    ]),
    async editProfile() {
      try {
        const { data: { updateCurrentUser: data } } = await this.$apollo.mutate({
          mutation: gql`
            mutation Edit($data: UpdateCurrentUserInput!) {
              updateCurrentUser(input: $data) {
                login
                email
                name
              }
            }
          `,
          variables: {
            data: {
              name: this.name,
              email: this.email,
            },
          },
        });

        this.setUser(data);
      } catch (error) {
        console.log(error);
      }
    },

  },
};
</script>

<style lang="scss" scoped>
.editProfile {
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

  &__goProfile {
    margin-top: 16px;
  }
}
</style>
