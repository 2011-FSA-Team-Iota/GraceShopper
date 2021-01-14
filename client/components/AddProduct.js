import React from 'react'
import ProductForm from './ProductForm'
import {addProductThunk} from '../store/products'
import {connect} from 'react-redux'

class AddProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      description: '',
      imgUrl: '',
      inventory: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    try {
      this.props.addProduct(this.state)
      this.props.history.push('/products')
    } catch (error) {
      console.error(error)
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <ProductForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        product={this.state}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  addProduct: product => dispatch(addProductThunk(product))
})

export default connect(null, mapDispatch)(AddProduct)
