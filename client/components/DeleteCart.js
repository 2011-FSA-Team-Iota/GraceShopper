import React, {Component} from 'react'
import {removeFromCart} from '../store/cart'
import {connect} from 'react-redux'

class DeleteCart extends Component {
  onClickHandler = () => {
    const {product, user, removeFromCart} = this.props
    removeFromCart(product, user.isGuest)
  }
  render() {
    return (
      <form>
        <button
          type="submit"
          onClick={this.onClickHandler}
          className="cart-remove-item-button"
        >
          Remove From Cart
        </button>
      </form>
    )
  }
}

function mapState(state) {
  return {user: state.user}
}

const mapDispatch = dispatch => {
  return {
    removeFromCart: (product, isGuest) =>
      dispatch(removeFromCart(product, isGuest))
  }
}

export default connect(mapState, mapDispatch)(DeleteCart)
