

const Input = (props) => {
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(e.target,e.target.productId)
        props.dataHandler(e.target.productId.value,e.target.price.value,e.target.name.value,e.target.category.value)   
    }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="productId">ProductId:</label>
      <input type="number" name='productId' required ></input>
      <label htmlFor="sellingPrice">SellingPrice:</label>
      <input type="number" id='price' required></input>
      <label htmlFor="productName">ProductName:</label>
      <input type="text" id='name' required></input>
      <label htmlFor="Category">Choose a Category:</label>
      <select id='category'>
        <option>electronics</option>
        <option>food-Items</option>
        <option>skin-Care</option>
      </select>
      <button type="submit">Add Product</button>
    </form> 
  )
}

export default Input