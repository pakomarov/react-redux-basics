import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
  const cakeCount = useSelector(state => state.cake.cakeCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {cakeCount}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
