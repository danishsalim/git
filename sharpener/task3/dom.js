
let item2=document.querySelector('.list-group-item:nth-child(2)')
console.log(item2)
item2.style.backgroundColor='green'
let item3=document.querySelector('.list-group-item:nth-child(3)')
item3.style.display='none'
let items=document.querySelectorAll('.list-group-item')
items[1].style.color='green'
let odd = document.querySelectorAll('li:nth-child(odd)')
console.log(odd)
for(let item of odd)
{
   item.style.backgroundColor='green'
}





