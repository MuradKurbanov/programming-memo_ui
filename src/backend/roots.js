import { Home } from '../app/pages/Home';
import { Content } from "../app/pages/Content";
import { Practice } from '../app/pages/Practice';
import { TechnologyCatalog } from '../app/pages/TechnologyCatalog';

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
    title: 'Технология',
    component: Content,
    path: '/technology/:name',
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

export const subMenu = {
  'server-interaction': 'Взаимодействие с сервером',
  'java-script': 'JavaScript',
  'react-and-redux': 'React and Redux',
  'git': 'Git',
  'architectures-an-patterns': 'Архитектуры и паттерны',
  'additional-libraries': 'Дополнительные библиотеки',
  'type-script': 'TypeScript',
  'java': 'Java',
};
