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
      <div id="our-products">
        {isAdmin && <Link to="/addproduct">Add Product</Link>}
        <h2>Our Products</h2>
        <div id="products-wrapper">
          {this.props.products.sort((a, b) => b.id - a.id).map(eachProduct => {
            return (
              <span key={eachProduct.id} className="each-item">
                <Link to={`/products/${eachProduct.id}`}>
                  <img src={eachProduct.imgUrl} style={{height: '100px'}} />
                </Link>
                <Link to={`/products/${eachProduct.id}`}>
                  <h3>{eachProduct.name}</h3>
                </Link>
                <p>{`$${eachProduct.price / 100}`}</p>
                <p
                  className={`${
                    Number(eachProduct.inventory) < 8
                      ? 'inventory-red'
                      : 'inventory'
                  }`}
                >{`${eachProduct.inventory} left in stock.`}</p>
              </span>
            )
          })}
        </div>
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
