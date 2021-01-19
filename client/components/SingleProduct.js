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
      quanity: this.state.quantity,
      product: this.props.product
    }

    this.props.addToCart(this.props.user.id, productAndQuantity)
  }

  render() {
    let {product} = this.props
    let {isAdmin} = this.props.user

    return (
      <>
        {Object.keys(product).length ? (
          <div>
            <div>
              <h1>{product.name}</h1>
            </div>
            <div>
              <p>${product.price / 100}</p>
              <p>{product.description}</p>
              <img src={product.imgUrl} alt={product.id} />
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
              <form onSubmit={this.onSubmitHandler}>
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
    addToCart: (userId, productAndQuantity) =>
      dispatch(addToCart(userId, productAndQuantity))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
