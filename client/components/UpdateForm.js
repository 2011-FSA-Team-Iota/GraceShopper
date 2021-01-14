import React, {Component} from 'react'

class UpdateForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      price: '',
      description: ''
    }
  }

  handleChange = evt => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit = evt => {
    evt.preventDefault()
  }

  render() {
    return (
      <form>
        <label htmlFor="title">
          <input name="title" />
        </label>
        <label htmlFor="price">
          <input name="price" />
        </label>
        <label htmlFor="description">
          <input name="description" />
        </label>
      </form>
    )
  }
}
