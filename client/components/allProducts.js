import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    const {isAdmin} = this.props.user

    return (
      <div>
        {isAdmin && <Link to="/addproduct">Add Product</Link>}
        <h2>Our Products</h2>
        {this.props.products.sort((a, b) => b.id - a.id).map(eachProduct => {
          return (
            <span key={eachProduct.id}>
              <Link to={`/products/${eachProduct.id}`}>
                <h3>{eachProduct.name}</h3>
              </Link>
              <span>{eachProduct.price / 100}</span>
              <Link to={`/products/${eachProduct.id}`}>
                <img src={eachProduct.imgUrl} style={{height: '100px'}} />
              </Link>
              <label>Description: </label>
              <p>{eachProduct.description}</p>
              <p>{`${eachProduct.inventory} left in stock.`}</p>
            </span>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsReducer,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
