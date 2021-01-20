import React, {Component} from 'react'
import {removeFromCart} from '../store/cart'
import {connect} from 'react-redux'

class DeleteCart extends Component {
  onSubmit = evt => {
    evt.preventDefault()
    this.props.removeFromCart(this.props.product)
  }
  render() {
    return (
      <form onSubmit={evt => evt.preventDefault()}>
        <button type="submit" onClick={this.onSubmit}>
          Remove From Cart
        </button>
      </form>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    removeFromCart: product => dispatch(removeFromCart(product))
  }
}

export default connect(null, mapDispatch)(DeleteCart)
