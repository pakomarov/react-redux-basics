import { BUY_ICECREAM } from './types';

const initialState = {
  icecreamCount: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        icecreamCount: state.icecreamCount - 1,
      }
    default:
      return state;
  }
};

export default reducer;