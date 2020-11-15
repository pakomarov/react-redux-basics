import { BUY_CAKE } from './types';

export const buyCake = (purchaseAmount = 1) => ({
  type: BUY_CAKE,
  payload: purchaseAmount,
});
