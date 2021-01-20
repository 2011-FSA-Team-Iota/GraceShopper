import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setQuantity} from '../store'

class QuantityInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.quantity
    }
  }

  onChange = async evt => {
    evt.preventDefault()
    await this.setState({
      quantity: evt.target.value
    })
    this.props.setQuantity(this.props.product, this.state.quantity)
  }

  render() {
    console.log(this.props.isLoggedIn)
    return (
      <div className="quantity-container">
        <label htmlFor="quantity">
          Quantity:{' '}
          <input
            type="number"
            min={1}
            max={this.props.inventory}
            name="quantity"
            onChange={this.onChange}
            value={this.state.quantity}
          />
        </label>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    setQuantity: (product, quantity) => dispatch(setQuantity(product, quantity))
  }
}

export default connect(null, mapDispatch)(QuantityInput)
