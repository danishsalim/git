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
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(name.value+" "+email.value))
    users.appendChild(li)
   if(!localStorage.getItem('userdetails')){
    localStorage.setItem('userdetails',[name.value,email.value])
   }
   else{
    localStorage.setItem('userdetails',[localStorage.getItem('userdetails'),name.value,email.value])
   } 
    console.log(localStorage.getItem('userdetails'))
   }
   else{
        console.log('please fill all input fields')
        msg.innerHTML='please fill all input fields'
        msg.style.color='red'
        setTimeout(()=>msg.innerHTML="",3000)
   }
}