let form=document.querySelector('form')
let msg=document.querySelector('.msg')
let name=document.querySelector('#name')
let email=document.querySelector('#email')
let subBtn=document.querySelector('#submit')
let users=document.querySelector('.userlists')

subBtn.addEventListener('mouseover',()=>subBtn.style.background='orange')

form.addEventListener('submit',validate)


function validate(e)
{
    e.preventDefault()
   if(name.value!="" && email.value!="")
   {
    let mydetail={name:name.value,email:email.value}
    //network call on crudcrud.com
    axios
      .post("https://crudcrud.com/api/81ab0d65143043dcb43f49d8e0fcb979/booking",mydetail)
      .then(res=>{
        displayResponse(res)
        console.log(res.data)
    })
      .catch((err)=>console.log(err))
    // localStorage.setItem(email.value,mydetail)
    
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
    // localStorage.removeItem(email.value)
}
//edit
function editElement(e)
{
    // console.log(e.target.parentElement.firstChild.textContent)
  email.value=e.target.parentElement.firstChild.textContent.split(" ").filter((item)=>item.includes("@")).join("")
  name.value=e.target.parentElement.firstChild.textContent.split(" ").filter((item)=>{
    if(!item.includes("@")){return item}}).join(" ")
    e.target.parentElement.remove()
    // localStorage.removeItem(email.value)
    
}
//show output function

function displayResponse(res){
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(res.data.name+"   "+res.data.email))
    let del=document.createElement('button')
    let val=(document.createTextNode('delete'))
    del.appendChild(val)
    li.appendChild(del)
    let edit=document.createElement('button')
    let editval=(document.createTextNode('edit'))
    edit.appendChild(editval)
    li.appendChild(edit)
    users.appendChild(li)
    del.addEventListener('click',deleteElement)
    edit.addEventListener('click',editElement)
}