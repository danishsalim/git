let form = document.querySelector('#addForm')
let itemList=document.querySelector('#items')
let filter=document.querySelector('#filter')
let description=document.querySelector('#description')
//addItem function is called
form.addEventListener('submit',addItem)
//adddescription function is called
form.addEventListener('submit',addDescription)
//delete items from list
itemList.addEventListener('click',removeItem)
//filter event
filter.addEventListener('keyup',filterItems)


function addItem(e)
{
    e.preventDefault()
    // getting newItem from input 
    let newItem=document.querySelector('#item').value
    //create new li element
    let li= document.createElement('li')
    li.className='list-group-item'
    //Append textnode to li
    li.appendChild(document.createTextNode(newItem))
    //create del btn
    let deleteBtn=document.createElement('button')
     //create edit btn
     let editBtn=document.createElement('button')
    //add classes to deletebtn
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    //add classes to editbtn
    editBtn.className='btn  btn-sm float-right '
    //append textnode delete btn
    deleteBtn.appendChild(document.createTextNode('X'))
     //append textnode to edit btn
     editBtn.appendChild(document.createTextNode('Edit'))
    //append delbtn to li
    li.appendChild(deleteBtn)
    //append editbtn to li
    li.appendChild(editBtn)
    //append li to list item
    itemList.appendChild(li)

}


//addDescription

function addDescription(e)
{
    e.preventDefault()
    // getting newItem from input 
    let newDescription=document.querySelector('#description').value
    //create new li element
    let li= document.createElement('li')
    // li.className='list-group-item'
    //Append textnode to li
    li.appendChild(document.createTextNode(newDescription))
    //highlighting description
    li.style.backgroundColor='#f4f4f4'
    li.style.listStyle='none'
    //append li to list item
    itemList.lastChild.appendChild(li)

}


//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure ?'))
        {
            let li=e.target.parentElement
            itemList.removeChild(li)
        }
    }
}



//filter items
function filterItems(e){
    //converting input value to lower case
 let text=e.target.value.toLowerCase()
   //getting all items as nodelists
 let items=itemList.querySelectorAll('.list-group-item')
 items.forEach((item)=>
    {
        //getting text value of item
        let itemName=item.firstChild.textContent
        let itemDesciption=item.lastElementChild.firstChild.textContent
        console.log(itemDesciption)
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemDesciption.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    }
)
 
 
}