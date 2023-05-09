import { IconType } from 'react-icons/lib';

import {
  IoHomeOutline,
  IoCamera,
} from 'react-icons/io5';

export type RouteOption = {
  path: string;
  icon: IconType
  label: string;
};

const list:RouteOption[] = [
  {
    path: "/",
    icon: IoHomeOutline,
    label: 'Home'
  },
  {
    path: "/photos",
    icon: IoCamera,
    label: 'Your Photos'
  },
];

export default list;