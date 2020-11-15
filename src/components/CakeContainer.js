import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer({ cakeCount, buyCake}) {
  return (
    <div>
      <h2>Number of cakes - {cakeCount}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => ({ cakeCount: state.cakeCount });

const mapDispatchToProps = dispatch => ({ buyCake: () => dispatch(buyCake())});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);
