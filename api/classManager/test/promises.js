//A normal, synchronous function may return a promise.
function querySomething(a){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(a=="error"){
        //in the promise, the resolve and reject arguments are
        //actually callable.
        reject()
      }
      //Whatever is passed as the argument of resolve will be the data
      //returned when the promise resolves.
      resolve({data: "it resolved."})
      
    }, 1000)
  })
}

//Now in an async function, we can consume this Promise.
async function consumePromiseAsync(){
  //try to execute this promise
  try{
    //we await for the result of the function
    const result = await querySomething("error");
    console.log(result)
  }
  //if the promise rejects:
  catch{
    console.error('the promise was rejected')
  }
}

consumePromiseAsync()