let form = document.querySelector('#addForm')
let itemList=document.querySelector('#items')
//on form submition addItem function is called
form.addEventListener('submit',addItem)
//delete items from list
itemList.addEventListener('click',removeItem)

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