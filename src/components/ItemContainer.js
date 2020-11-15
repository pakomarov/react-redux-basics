import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';
import { buyIcecream } from '../redux';

function ItemContainer({itemCount, buyItem}) {
  return (
    <div>
      <h2>Item - {itemCount}</h2>
      <button onClick={buyItem}>Buy item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  itemCount: ownProps.cake
    ? state.cake.cakeCount
    : state.icecream.icecreamCount
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  buyItem: () => dispatch(ownProps.cake ? buyCake() : buyIcecream())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
