import React from 'react'
import {connect} from 'react-redux'
import {checkoutCart, fetchCart} from '../store'
import {Link} from 'react-router-dom'
import DeleteCart from './DeleteCart'
import QuantityInput from './QuantityInput'

class CartView extends React.Component {
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.checkOut()
  }

  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchCart()
    }
  }

  render() {
    let totalPrice = 0

    return (
      <div>
        <h2>Cart</h2>
        {this.props.cart.length ? (
          <>
            {this.props.cart.sort((a, b) => b.id - a.id).map(eachProduct => {
              totalPrice +=
                eachProduct.price * eachProduct.orderProducts.quantity / 100
              return (
                <div key={eachProduct.id}>
                  <span>
                    <Link to={`/products/${eachProduct.id}`}>
                      <h3>{eachProduct.name}</h3>
                    </Link>
                    <span>${eachProduct.price / 100}</span>
                    <Link to={`/products/${eachProduct.id}`}>
                      <img src={eachProduct.imgUrl} style={{height: '50px'}} />
                    </Link>
                  </span>
                  <div>
                    <DeleteCart
                      product={eachProduct}
                      isLoggedIn={!!this.props.user.id}
                    />
                    <QuantityInput
                      isLoggedIn={!!this.props.user.id}
                      product={eachProduct}
                      inventory={eachProduct.inventory}
                      quantity={eachProduct.orderProducts.quantity}
                    />
                  </div>
                </div>
              )
            })}
            <p>
              Total: <span>${totalPrice.toFixed(2)}</span>
            </p>
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
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user, cart: state.cart}
}

function mapDispatchToProps(dispatch) {
  return {
    checkOut: () => dispatch(checkoutCart()),
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
