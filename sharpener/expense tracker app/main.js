let form=document.querySelector('form')
let expense=document.querySelector('#expense')
let description=document.querySelector('#description')
let category=document.querySelector('#category')
let subBtn=document.querySelector('.submit-expense')
let expenseList=document.querySelector('.expense-list')
let msg=document.querySelector('.msg')

form.addEventListener('submit',validate)

function validate(e)
{
    e.preventDefault()
    if(expense.value!="" && description.value!="")
   {
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(expense.value+"   "+description.value + "  "+category.value))
    let del=document.createElement('button')
    let val=(document.createTextNode('delete'))
    del.appendChild(val)
    li.appendChild(del)
    let edit=document.createElement('button')
    let editval=(document.createTextNode('edit'))
    edit.appendChild(editval)
    li.appendChild(edit)
    expenseList.appendChild(li)
    let mydetail=JSON.stringify({expense:expense.value,description:description.value,category:category.value})
    localStorage.setItem(description.value,mydetail)
    del.addEventListener('click',deleteElement)
    edit.addEventListener('click',editElement)
   }
   else{
        console.log('please fill all input fields')
        msg.innerHTML='please fill all input fields'
        msg.style.color='red'
        setTimeout(()=>msg.innerHTML="",3000)
   }
}

//delete
function deleteElement(e)
{
    e.target.parentElement.remove()
    localStorage.removeItem(description.value)
}
//edit
function editElement(e)
{
    let arr=e.target.parentElement.firstChild.textContent.split(" ").filter((item)=>item!="")
    console.log(arr)
    description.value=arr[1]
  expense.value=arr[0]
  category.value=arr[2]
    e.target.parentElement.remove()
    localStorage.removeItem(description.value)
    
}