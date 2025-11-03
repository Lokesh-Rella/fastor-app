import { mockRestaurants } from './mockData';

export const fetchRestaurants = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: mockRestaurants }), 500);
  });
};
