import Login from "./../views/Login";
import Profile from "./../views/Profile";
import EditProfile from "./../views/EditProfile";

export default [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      guard: 'guest',
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      guard: 'private',
    },
  },
  {
    path: "/profile/edit",
    name: "editProfile",
    component: EditProfile,
    meta: {
      guard: 'private',
    },
  },
]