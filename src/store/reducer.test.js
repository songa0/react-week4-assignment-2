import reducer from './reducer';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
} from './actions';

describe('reducer', () => {
  describe('updateRestaurantName', () => {
    it('changes restaurant name', () => {
      const previousState = { restaurantName: '' };
      const nextState = reducer(previousState, updateRestaurantName('시카고피자'));

      expect(nextState.restaurantName).toBe('시카고피자');
    });
  });

  describe('updateRestaurantCategory', () => {
    it('changes restaurant category', () => {
      const previousState = { restaurantCategory: '' };
      const nextState = reducer(previousState, updateRestaurantCategory('양식'));

      expect(nextState.restaurantCategory).toBe('양식');
    });
  });

  describe('updateRestaurantAddress', () => {
    it('changes restaurant address', () => {
      const previousState = { restaurantAddress: '' };
      const nextState = reducer(previousState, updateRestaurantAddress('서울시 강남구'));

      expect(nextState.restaurantAddress).toBe('서울시 강남구');
    });
  });
});
