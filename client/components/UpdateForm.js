import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editProduct} from '../store'
class UpdateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      description: ''
    }
  }

  handleChange = evt => {
    evt.preventDefault()
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    const {name, price, description} = this.state
    const {product} = this.props
    if (name !== '' || price !== '' || description !== '') {
      if (name === '') await this.setState({name: product.name})
      price === ''
        ? await this.setState({price: Number(product.price)})
        : await this.setState({price: Number(this.state.price)})
      if (description === '')
        await this.setState({description: product.description})
      this.props.editProduct(this.props.productId, this.state)
      console.log(this.state)
      this.setState({
        name: '',
        price: '',
        description: ''
      })
    }
  }

  render() {
    const {name, price, description} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={this.handleChange}
          value={name}
          placeholder="Product Name"
        />

        <label htmlFor="price">Price</label>
        <input
          name="price"
          onChange={this.handleChange}
          value={price}
          placeholder="Product Price"
        />

        <label htmlFor="description">Description</label>
        <input
          name="description"
          onChange={this.handleChange}
          value={description}
          placeholder="Product Description"
        />

        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    editProduct: (productId, product) =>
      dispatch(editProduct(productId, product))
  }
}

export default connect(null, mapDispatch)(UpdateForm)
