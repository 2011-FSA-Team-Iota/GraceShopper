import React from 'react'
import {connect} from 'react-redux'
import {checkoutCart} from '../store'
import {Link} from 'react-router-dom'

class CartView extends React.Component {
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.checkoutCart(this.props.user.id)
  }

  render() {
    console.log('USER -->', this.props.user)
    console.log('CART-->', this.props.cart)
    return (
      <div>
        <h2>Carts</h2>
        {this.props.cart.sort((a, b) => b.id - a.id).map(eachProduct => {
          return (
            <div key={eachProduct.id}>
              <span>
                <Link to={`/products/${eachProduct.id}`}>
                  <h3>{eachProduct.name}</h3>
                </Link>
                <span>{eachProduct.price / 100}</span>
                <Link to={`/products/${eachProduct.id}`}>
                  <img src={eachProduct.imgUrl} style={{height: '50px'}} />
                </Link>
              </span>
            </div>
          )
        })}
        <label>Total: </label>
        <span>
          {this.props.cart.reduce((acc, curr) => acc.price + curr.price)}
        </span>
        <button type="submit" onClick={evt => this.handleSubmit(evt)}>
          Checkout
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user, cart: state.cart}
}

function mapDispatchToProps(dispatch) {
  return {
    checkOut: userId => dispatch(checkoutCart(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
