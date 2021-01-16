import React from 'react'

const ProductForm = props => {
  const {product, handleSubmit, handleChange} = props
  return (
    <div>
      <h1>Add Product</h1>
      <form id="productForm" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Product's Name"
            value={product.name}
            required
          />
        </label>
        <label htmlFor="price">
          Price
          <br />
          <input
            required
            onChange={handleChange}
            name="price"
            placeholder="Number"
            value={product.price}
          />
        </label>
        <label htmlFor="description">
          Description
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
            value={product.description}
          />
        </label>
        <label htmlFor="imgUrl">
          Image URL
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="imgUrl"
            placeholder="image URL"
            value={product.imgUrl}
          />
        </label>
        <label htmlFor="inventory">
          Starting Inventory Amount
          <br />
          <input
            onChange={handleChange}
            name="inventory"
            placeholder="Number"
            value={product.inventory}
          />
        </label>

        <button
          onSubmit={handleSubmit}
          type="submit"
          disabled={!product.name || !product.price}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductForm
