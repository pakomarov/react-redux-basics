import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIcecream } from '../redux';

function HooksIcecreamContainer() {
  const icecreamCount = useSelector(state => state.icecream.icecreamCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of icecreams - {icecreamCount}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
    </div>
  );
}

export default HooksIcecreamContainer;
