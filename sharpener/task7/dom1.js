//     //traversing dom
let itemList=document.querySelector('#items')
//     //parentnode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode)
//     //parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement)
//     //chilNode
// console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'
      //firstChild
// console.log(itemList.firstChild)
//       //firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='hello firstElementChild'
    //lastchild
// console.log(itemList.lastChild)
//     //lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='lastElementChild'
    //nextSibling
// console.log(itemList.nextSibling)
//     //nextElementSibling
// console.log(itemList.nextElementSibling)
// itemList.nextElementSibling.style.color='green'
//     //previousSibling
// console.log(itemList.previousSibling)
//     //previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='red'

    //create element
let newDiv=document.createElement('div')
    //adding class 
newDiv.className='hello'
    //adding Id
newDiv.id='hello1'
    //add attribute
newDiv.setAttribute('title','hello Div')
    //create text node
let newDivText=document.createTextNode('Hello world')
    //add text to div
newDiv.appendChild(newDivText)
    //show newDiv on Browser by adding it to Dom
let container=document.querySelector('.container')
let h1=document.querySelector('h1')
// container.insertBefore(newDiv,h1)
    //adding newDiv before item1
item1=document.querySelector('.list-group-item:nth-child(1)')
itemList.insertBefore(newDiv,item1)

console.log(newDiv)



