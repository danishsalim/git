import  { useState,useEffect } from 'react'

const Products = (props) => {
  const [electronicsItems,setElectronicsItems] = useState([])
  const [foodItems,setFoodItems] = useState([])
  const [skinCare,setSkinCare] = useState([])
  useEffect(() => {
    if(localStorage.getItem(props.product.productId))
    {
      return alert('product with given id already listed')
    }
    props.product.productId?localStorage.setItem(props.product.productId, JSON.stringify(props.product)):"";
    if (props.product.productCategory === 'electronics') {
      setElectronicsItems((prev) => [...prev, props.product]);
    } else if (props.product.productCategory === 'skin-Care') {
      setSkinCare((prev) => [...prev, props.product]);
    } else if (props.product.productCategory === 'food-Items') {
      setFoodItems((prev) => [...prev, props.product]);
    }
  }, [props.product]);

  const deleteHandler = (id,category) =>{
    const updatedItems = category.filter((item) => item.productId !== id);
    localStorage.removeItem(id.toString());
    if (category === electronicsItems) {
      setElectronicsItems(updatedItems);
    } else if (category === foodItems) {
      setFoodItems(updatedItems);
    } else if (category === skinCare) {
      setSkinCare(updatedItems);
    }
  }
  return (
    <>
    <h2>Products:</h2>
    <h3>Electronics Items :</h3>
    {
      electronicsItems.map((item,idx)=>(
        <ul key={idx}>
          <li>
            <span>₹ {item.productPrice} - {item.productCategory} - {item.productName}</span>
            <button onClick={()=>deleteHandler(item.productId,electronicsItems)}>Delete Product</button>
          </li>
        </ul>
      ))
    }
    <h3>Food Items :</h3>
    {
      foodItems.map((item,idx)=>(
        <ul key={idx}>
          <li>
            <span>₹ {item.productPrice} - {item.productCategory} - {item.productName}</span>
            <button onClick={()=>deleteHandler(item.productId,foodItems)}>Delete Product</button>
          </li>
        </ul>
      ))
    }
    <h3>Skin Care :</h3>
    {
      skinCare.map((item,idx)=>(
        <ul key={idx}>
          <li>
            <span>₹ {item.productPrice} - {item.productCategory} - {item.productName}
            <button onClick={()=>deleteHandler(item.productId,skinCare)}>Delete Product</button>
          </span></li>
        </ul>
      ))
    }
    </>
  )
}

export default Products