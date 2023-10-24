//examine the document object
// console.log(document.domain)
// console.log(document.title)
// document.title=666
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent="hello"
//  console.log(document.forms)
//  console.log(document.forms[0])

//  console.log(document.forms[0][1].value="hello")
//  console.log(document.links)

 let headerTitle= document.getElementById('header-title')
// console.log(headerTitle.innerText)
// headerTitle.innerText="innerText"
// console.log(headerTitle.textContent)
// headerTitle.textContent="textContent"
// console.log(headerTitle.innerHTML)
//  headerTitle.innerHTML="innerHTML"
headerTitle.innerHTML= '<h6>innerHtmlwithH6</h6>'
let header=document.querySelector('header')
header.style.borderBottom='solid 5px #000'
let formTitle=document.querySelector(".title")
formTitle.style.fontWeight='bold'
formTitle.style.color='green'

