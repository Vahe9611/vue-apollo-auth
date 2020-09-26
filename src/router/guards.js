const isAuthenticated = () => localStorage.getItem('apollo-token');
const isPrivateRoute = (route) => route.meta.guard === 'private';
const isGuestRoute = (route) => route.meta.guard === 'guest';

export default (to, from, next) => {
  if (to.matched.some(isPrivateRoute) && !isAuthenticated()) next({ name: 'login' });
  if (to.matched.some(isGuestRoute) && isAuthenticated()) next({ name: 'profile' });
  next();
};
