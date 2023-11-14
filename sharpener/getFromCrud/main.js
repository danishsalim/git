let form=document.querySelector('form')
let msg=document.querySelector('.msg')
let name=document.querySelector('#name')
let email=document.querySelector('#email')
let subBtn=document.querySelector('#submit')
let users=document.querySelector('.userlists')

subBtn.addEventListener('mouseover',()=>subBtn.style.background='orange')

form.addEventListener('submit',validate)



//getting data from server on loading
window.addEventListener("DOMContentLoaded",()=>{
      axios
          .get("https://crudcrud.com/api/81ab0d65143043dcb43f49d8e0fcb979/booking")
          .then(res=>{
            res.data.map((item)=>displayResponse(item))
            // console.log(res.data)
          })
          .catch((err)=>console.log(err))
    })

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
        displayResponse(res.data)
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
    let id=e.target.id 
    axios
        .delete("https://crudcrud.com/api/81ab0d65143043dcb43f49d8e0fcb979/booking/"+id)
        .catch((err)=>console.log(err))
    e.target.parentElement.remove()
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

function displayResponse(resData){
    let li=document.createElement('li')
    let del=document.createElement('button')
    let val=(document.createTextNode('delete'))
    let edit=document.createElement('button')
    let editval=(document.createTextNode('edit'))
    del.appendChild(val)
    edit.appendChild(editval)
    del.setAttribute("id",resData._id)
    edit.setAttribute("id",resData._id)
    li.appendChild(document.createTextNode(resData.name+"   "+resData.email))
    li.appendChild(del)
    li.appendChild(edit)
    users.appendChild(li)
    del.addEventListener('click',(e)=>deleteElement(e))
    edit.addEventListener('click',editElement)
}
