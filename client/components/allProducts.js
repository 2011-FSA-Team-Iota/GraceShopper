import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Our Products</h2>
        {this.props.products.map(eachProduct => {
          return (
            <span key={eachProduct.id}>
              <Link to={`/products/${eachProduct.id}`}>
                <h3>{eachProduct.name}</h3>
              </Link>
              <span>{eachProduct.price}</span>
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
    products: state.productsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
