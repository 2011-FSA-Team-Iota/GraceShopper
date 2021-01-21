import React from 'react'
import {connect} from 'react-redux'
import {checkoutCart, fetchCart} from '../store'
import {Link} from 'react-router-dom'
import DeleteCart from './DeleteCart'
import QuantityInput from './QuantityInput'

class CartView extends React.Component {
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.checkOut(this.props.user.isGuest, this.props.cart)
  }

  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchCart()
    }
  }

  render() {
    let totalPrice = 0
    this.props.cart.sort((a, b) => b.id - a.id).map(eachProduct => {
      totalPrice += eachProduct.price * eachProduct.orderProducts.quantity / 100
    })

    return (
      <div id="cart-view-wrapper">
        <div id="cart-view-total">
          <h2>
            Cart Total: <span>${totalPrice.toFixed(2)}</span>
          </h2>
        </div>
        <div id="cart-item-list">
          {this.props.cart.length ? (
            <>
              {this.props.cart.sort((a, b) => b.id - a.id).map(eachProduct => {
                return (
                  <div key={eachProduct.id} className="each-cart-item">
                    <span>
                      <Link to={`/products/${eachProduct.id}`}>
                        <h3>{eachProduct.name}</h3>
                      </Link>
                      <Link to={`/products/${eachProduct.id}`}>
                        <img src={eachProduct.imgUrl} className="item-image" />
                      </Link>
                    </span>
                    <div>
                      <span>${eachProduct.price / 100}</span>
                      <QuantityInput
                        product={eachProduct}
                        inventory={eachProduct.inventory}
                        quantity={eachProduct.orderProducts.quantity}
                      />
                    </div>
                    <DeleteCart product={eachProduct} />
                  </div>
                )
              })}
              <button type="submit" onClick={evt => this.handleSubmit(evt)}>
                Checkout
              </button>
            </>
          ) : !this.props.cart.length ? (
            <h1>Cart is empty.</h1>
          ) : (
            <h1>LOADING</h1>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user, cart: state.cart}
}

function mapDispatchToProps(dispatch) {
  return {
    checkOut: (isGuest, cart) => dispatch(checkoutCart(isGuest, cart)),
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
