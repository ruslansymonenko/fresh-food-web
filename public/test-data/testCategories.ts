import { ICategory } from '@/types/category.interface';

import coffeeImg from './testImages/coffee.svg';
import saladImg from './testImages/salad.svg';
import pizzaImg from './testImages/pizza.svg';
import drinksImg from './testImages/drinks.svg';

export const testCategories: ICategory[] = [
  {
    id: '1',
    name: 'Salad',
    slug: 'salad',
    image: saladImg.src,
  },
  {
    id: '2',
    name: 'Pizza',
    slug: 'pizza',
    image: pizzaImg.src,
  },
  {
    id: '3',
    name: 'Coffee',
    slug: 'coffee',
    image: coffeeImg.src,
  },
  {
    id: '4',
    name: 'Drinks',
    slug: 'drinks',
    image: drinksImg.src,
  },
];

export const sendTestCategories = (): Promise<ICategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testCategories);
    }, 5000);
  });
};
