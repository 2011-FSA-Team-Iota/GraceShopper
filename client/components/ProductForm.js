import React from 'react'

const ProductForm = props => {
  const {product, handleSubmit, handleChange} = props
  return (
    <div>
      <h1>Add Product</h1>
      <form id="productForm" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Product's Name"
            value={product.name}
          />
        </label>

        <button onSubmit={handleSubmit} type="submit" disabled={!product.name}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductForm
