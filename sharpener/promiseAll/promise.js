const posts = [{title: 'POST1'},{title: 'POST2'}];
let lastActive=new Date()
console.log(lastActive)
function printPost() {
        posts.forEach((post) => {
            console.log(post.title)
        })
        console.log(lastActive)
}
// updateLastUserActivityTime
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            lastActive=new Date()
            resolve(lastActive)
        },2000)    
    })
}



function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            updateLastUserActivityTime()
            resolve()
        }, 3000)
    }) 
}


function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}



Promise.all([create3rdPost(),updateLastUserActivityTime()]).then(printPost).then(deletePost).then(printPost)