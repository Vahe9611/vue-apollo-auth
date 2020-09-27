import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import EditProfile from '../views/EditProfile.vue';

export default [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      guard: 'guest',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      guard: 'private',
      layout: 'profile',
    },
  },
  {
    path: '/profile/edit',
    name: 'editProfile',
    component: EditProfile,
    meta: {
      guard: 'private',
      layout: 'profile',
    },
  },
];
