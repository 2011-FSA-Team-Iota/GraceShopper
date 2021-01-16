import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import DeleteProductBtn from './DeleteProductBtn'
import UpdateForm from './UpdateForm'

class SingleProduct extends Component {
  componentDidMount() {
    try {
      this.props.fetchSingleProduct(this.props.match.params.id)
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    let {product} = this.props

    return (
      <>
        {Object.keys(product).length ? (
          <div>
            <div>
              <h1>{product.name}</h1>
            </div>
            <div>
              <p>{product.price / 100}</p>
              <p>{product.description}</p>
              <img src={product.imgUrl} alt={product.id} />
              <DeleteProductBtn
                productId={this.props.match.params.id}
                history={this.props.history}
              />
              <UpdateForm
                product={product}
                productId={this.props.match.params.id}
              />
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
    product: state.singleProductReducer
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
