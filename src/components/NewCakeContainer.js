import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer({ cakeCount, buyCake }) {
  const [purchaseAmount, setPurchaseAmount] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {cakeCount}</h2>
      <input type='number' value={purchaseAmount} onChange={evt => setPurchaseAmount(evt.target.value)} />
      <button onClick={() => buyCake(purchaseAmount)}>Buy {purchaseAmount} Cakes</button>
    </div>
  );
}

const mapStateToProps = state => ({ cakeCount: state.cake.cakeCount });

const mapDispatchToProps = dispatch => ({ buyCake: (purchaseAmount) => dispatch(buyCake(purchaseAmount))});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer);