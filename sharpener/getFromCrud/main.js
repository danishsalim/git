let form=document.querySelector('form')
let msg=document.querySelector('.msg')
let name=document.querySelector('#name')
let email=document.querySelector('#email')
let subBtn=document.querySelector('#submit')
let users=document.querySelector('.userlists')
let editflag=false
let editId;
subBtn.addEventListener('mouseover',()=>subBtn.style.background='orange')

form.addEventListener('submit',(e)=>submit(e,editflag,editId))



//getting data from server on loading
window.addEventListener("DOMContentLoaded",()=>{
      axios
          .get("https://crudcrud.com/api/efb65da49d7f4461a4edff673c10fb60/booking")
          .then(res=>{
            res.data.map((item)=>displayResponse(item))
            // console.log(res.data)
          })
          .catch((err)=>console.log(err))
    })

function submit(e,editflag,editId)
{
    e.preventDefault()
    let mydetail={name:name.value,email:email.value,id:editId}
   if(name.value!="" && email.value!="" && !editflag)
   {
    //network call on crudcrud.com
    axios
      .post("https://crudcrud.com/api/efb65da49d7f4461a4edff673c10fb60/booking",mydetail)
      .then(res=>{
        displayResponse(res.data)
        console.log(res.data)
    })
      .catch((err)=>console.log(err))   
   }
   else if(editflag)
   { 
      axios
      .put("https://crudcrud.com/api/efb65da49d7f4461a4edff673c10fb60/booking/"+editId,mydetail)
      .then(res=>{
        displayResponse(mydetail)
        console.log(res.data)
    })
      .catch((err)=>console.log(err))
        editflag=false
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
    editflag=false
    axios
        .delete("https://crudcrud.com/api/efb65da49d7f4461a4edff673c10fb60/booking/"+id)
        .catch((err)=>console.log(err))
    e.target.parentElement.remove()
}
//edit
function editElement(e)
{
    email.value=e.target.parentElement.firstChild.textContent.split(" ").filter((item)=>item.includes("@")).join("")
    name.value=e.target.parentElement.firstChild.textContent.split(" ").filter((item)=>{
      if(!item.includes("@")){return item}}).join(" ")
    e.target.parentElement.remove()
    editflag=true
    editId= e.target.id
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
    if(!editId){
      del.setAttribute("id",resData._id)
      edit.setAttribute("id",resData._id)
    }
    else{
      del.setAttribute("id",editId)
      edit.setAttribute("id",editId)
    }
    
    li.appendChild(document.createTextNode(resData.name+"   "+resData.email))
    li.appendChild(del)
    li.appendChild(edit)
    users.appendChild(li)
    del.addEventListener('click',deleteElement)
    edit.addEventListener('click',editElement)
}
