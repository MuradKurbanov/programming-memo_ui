import { Home } from '../app/pages/Home';
import { Content } from "../app/pages/Content";
import { Practice } from '../app/pages/Practice';

export const Roots = [
  {
    title: 'Главная',
    component: Home,
    path: '/'
  },
  {
    title: 'Технологии',
    component: Content,
    path: '/theme/:name',
    subMenu: true,
  },
  {
    title: 'Задачи на собесодовании',
    component: Practice,
    path: '/practice',
  },
  {
    title: 'Ссылка на GitHub',
    component: '',
    path: '',
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
