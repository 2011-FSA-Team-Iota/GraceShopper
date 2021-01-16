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

  async handleSubmit(event) {
    event.preventDefault()

    const {price, inventory, imgUrl, description} = this.state
    try {
      await this.setState({price: Number(price) * 100})
      inventory.length
        ? await this.setState({inventory: Number(inventory)})
        : await this.setState({inventory: 10})
      if (imgUrl.length === 0) {
        await this.setState({imgUrl: ''})
      }
      if (description.length === 0) {
        await this.setState({
          description: 'No product descrition at this time.'
        })
      }
      await this.props.addProduct(this.state)
      this.props.history.push('/products')
    } catch (error) {
      console.error(error)
    }
  }

  handleChange(event) {
    event.preventDefault()
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
