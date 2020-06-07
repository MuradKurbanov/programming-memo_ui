import { Home } from '../app/pages/Home';
import { Content } from "../app/pages/Content";
import { Practice } from '../app/pages/Practice';
import { TechnologyCatalog } from '../app/pages/technologyCatalog/TechnologyCatalog';

export const Roots = [
  {
    title: 'Главная',
    component: Home,
    path: '/',
    menu: true
  },
  {
    title: 'Технологии',
    component: TechnologyCatalog,
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
    title: 'Задачи на собесодовании',
    component: Practice,
    path: '/practice',
    menu: true
  },
  {
    title: 'Ссылка на GitHub',
    component: '',
    path: '',
    menu: true
  },
];
