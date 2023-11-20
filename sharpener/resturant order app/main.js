let form=document.querySelector('form')
let subBtn=document.querySelector('#submit')
let price=document.querySelector('#price')
let dish=document.querySelector('#dish')
let tableNumber=document.querySelector('#tableNumber')


form.addEventListener('submit',submission)


function submission(e)
{
    e.preventDefault()
    console.log(price.value,dish.value,tableNumber.value)
    post()
}

//Get data
window.addEventListener("load", (event) => {
    axios
    .get("https://crudcrud.com/api/8cbf6033b31a45a2974e19662e5a738b/orders")
    .then(res=>
        {
        res.data.map((item)=>{
            displayResponse(item)
            })
        console.log(res)
        })
    .catch(err=>console.error(err))
  });
  
//post data 
function post()
{
    let order={
        price:price.value,
        dish:dish.value,
        tableNumber:tableNumber.value
    }
    axios
      .post("https://crudcrud.com/api/8cbf6033b31a45a2974e19662e5a738b/orders",order)
      .then(res=>{
        displayResponse(res.data)
        console.log(res.data)
      })
      .catch((err)=>console.log(err))
}

function displayResponse(res)
{
    let table=document.querySelector("."+res.tableNumber)
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(res.price+"  "+res.dish+" "))
    li.setAttribute("id",res._id)
    let del=document.createElement('button')
    let val=(document.createTextNode('delete'))
    del.appendChild(val)
    li.appendChild(del)
    table.appendChild(li)
    del.addEventListener('click',deleteElement)
}

//delete
function deleteElement(e)
{
    let id=e.target.parentElement.id
    console.log(id)
    e.target.parentElement.remove()
    axios
        .delete("https://crudcrud.com/api/8cbf6033b31a45a2974e19662e5a738b/orders/"+id)
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
}