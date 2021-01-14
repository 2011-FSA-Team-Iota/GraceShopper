import React, {Component} from 'react'
import {removeProduct} from '../store'
import {connect} from 'react-redux'

class DeleteProductBtn extends Component {
  render() {
    const {productId, history} = this.props

    return (
      <form onSubmit={evt => evt.preventDefault()}>
        <button
          type="submit"
          onClick={() => this.props.deleteProduct(Number(productId), history)}
        >
          DELETE
        </button>
      </form>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    deleteProduct: (productId, history) =>
      dispatch(removeProduct(productId, history))
  }
}

export default connect(null, mapDispatch)(DeleteProductBtn)
