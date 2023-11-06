console.log('person1:shows ticket')
console.log('person2:shows ticket')



const prevMovie = async()=>{
    const promiseWifeBringsTic= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    const getPopcorn=  new Promise((resolve,reject)=>resolve('popcorn'))
    const getColddrink= new Promise((resolve,reject)=>resolve('ColdDrink'))
    const getButter=  new Promise((resolve,reject)=>resolve(' butter'))

    let ticket= await promiseWifeBringsTic;
    console.log('husband: lets go we have '+ticket)
    console.log('wife : no i want popcorn')
    let popcorn = await getPopcorn;
    console.log('husband: '+ticket+" "+popcorn)
    console.log('wife : wait i want butter on my popcorn')
    let butter = await  getButter;
    console.log('husband: '+ticket+" "+popcorn+" "+butter)
    console.log('wife : wait i want coldDrink ')
    let coldDrink=await getColddrink;
    console.log('husband: '+ticket+" "+popcorn+" "+butter+" "+coldDrink)
    console.log('wife : lets go')

  return ticket
}
prevMovie().then((m)=>console.log('person 3 : shows '+m))


console.log('person4:shows ticket')
console.log('person5:shows ticket')