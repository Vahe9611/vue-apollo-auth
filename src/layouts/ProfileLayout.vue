<template>
  <div class="profileLayout">
    <b-navbar fixed-top shadow>
      <template slot="brand">
        <span class="profileLayout__name title">
          {{user.name}}
        </span>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons" @click="logout">
            <a class="button is-primary">
                <strong>Log Out</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="profileLayout__content container">
      <slot />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { mapMutations, mapState } from 'vuex';
import { onLogout } from '../services/apollo-auth';

export default {
  data() {
    return {
      currentUser: {},
    };
  },
  watch: {
    currentUser(value) {
      this.setUser(value);
    },
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
  apollo: {
    currentUser: gql`
      query getUser {
        currentUser {
          login
          email
          name
        }
      }
    `,
  },
  methods: {
    ...mapMutations([
      'setUser',
    ]),

    logout() {
      onLogout(this.$apollo.provider.defaultClient);
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style lang="scss">
.profileLayout {
  height: 100%;

  &__name {
    display: inline-flex;
    align-items: center;
    margin: 0px 8px!important;
  }

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
