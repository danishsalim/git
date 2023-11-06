console.log('person1:shows ticket')
console.log('person2:shows ticket')

const promiseWifeBringsTic= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getPopcorn= promiseWifeBringsTic.then((t)=>{
    console.log('husband: lets go we have '+t)
    console.log('wife : no i want popcorn')
    return new Promise((resolve,reject)=>resolve(t + '  popcorn'))
})

const getColdDrink= getPopcorn.then((m)=>{
    console.log('husband: lets go we have '+m)
    console.log('wife : wait i want coldDrink')
    return new Promise((resolve,reject)=>resolve(m + '  coldDrink'))
})

const getButter= getColdDrink.then((m)=>{
    console.log('husband: lets go we have '+m)
    console.log('wife : wait i want butter on my popcorn')
    return new Promise((resolve,reject)=>resolve(m + '  butter'))
})

getButter.then((m)=>{console.log(m)
    console.log('wife : lets go')
})

console.log('person4:shows ticket')
console.log('person5:shows ticket')