import { Home } from '../app/pages/home/Home';
import { Content } from "../app/pages/content/Content";
import { Practice } from '../app/pages/practice/Practice';
import { Technologies } from '../app/pages/technologies/Technologies';

export const Roots = [
  {
    title: 'PM',
    component: Home,
    path: '/',
    menu: false
  },
  {
    title: 'Технологии',
    component: Technologies,
    path: '/technologies',
    menu: true,
    subMenu: true,
  },
  {
    title: 'Темы',
    component: Content,
    path: '/themes/:name',
    menu: false,
  },
  {
    title: 'Практика',
    component: Practice,
    path: '/practice',
    menu: true
  },
  {
    title: 'О проекте',
    component: '',
    path: '/',
    menu: true
  },
  {
    title: 'Gh',
    component: '',
    path: '/',
    menu: false,
    socialNetwork: true
  },
  {
    title: 'Tw',
    component: '',
    path: '/',
    menu: false,
    socialNetwork: true
  },
  {
    title: 'Fb',
    component: '',
    path: '/',
    menu: false,
    socialNetwork: true
  },
];
