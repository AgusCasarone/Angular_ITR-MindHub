import { NavButton } from "../app/interfaces/nav-button";

export const navButtons: NavButton[] = [
  {
    title: 'Home',
    route: '/',
    active: true,
    order: 1
  },
  {
    title: 'Login',
    route: '/login',
    order: 2
  },
  {
    title: 'Products',
    route: '/products',
    order: 3
  },
  {
    title: 'Profile',
    route: '/profile/1',
    order: 4
  },
  {
    title: 'Users',
    route: '/users',
    order: 5
  },
]
