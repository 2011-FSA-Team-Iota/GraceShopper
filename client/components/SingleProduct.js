import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import DeleteProductBtn from './DeleteProductBtn'
import UpdateForm from './UpdateForm'
import {addToCart} from '../store'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {
      quantity: ''
    }
  }

  componentDidMount() {
    try {
      this.props.fetchSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.error(error)
    }
  }

  onChangeHandler = evt => {
    evt.preventDefault()

    this.setState({[evt.target.name]: Number(evt.target.value)})
  }

  onSubmitHandler = evt => {
    evt.preventDefault()

    const productAndQuantity = {
      quantity: this.state.quantity,
      product: this.props.product
    }
    this.props.product.orderProducts = {}
    this.props.product.orderProducts.quantity = this.state.quantity

    this.props.addToCart(productAndQuantity)
    this.setState({quantity: ''})
  }

  render() {
    let {product} = this.props
    let {isAdmin} = this.props.user

    return (
      <>
        {Object.keys(product).length ? (
          <div id="single-item-page">
            <div id="single-item-wrapper">
              <h1>{product.name}</h1>
              <form className="add-to-cart" onSubmit={this.onSubmitHandler}>
                <input
                  type="number"
                  name="quantity"
                  min={0}
                  max={this.props.product.inventory}
                  value={this.state.quantity}
                  placeholder="0"
                  onChange={e => this.onChangeHandler(e)}
                />
                <button type="submit">Add to Cart</button>
              </form>
            </div>
            <div className="single-item-container">
              <p className="single-item-price">${product.price / 100}</p>
              <span>
                <img src={product.imgUrl} alt={product.id} />
              </span>
              <p className="item-description">{product.description}</p>
              {isAdmin && (
                <div>
                  <DeleteProductBtn
                    productId={this.props.match.params.id}
                    history={this.props.history}
                  />
                  <UpdateForm
                    product={product}
                    productId={this.props.match.params.id}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <h1>LOADING...</h1>
        )}
      </>
    )
  }
}
const mapState = state => {
  return {
    product: state.singleProductReducer,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addToCart: productAndQuantity => dispatch(addToCart(productAndQuantity))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
