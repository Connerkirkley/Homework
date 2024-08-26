//This logs a synchronous message
console.log("This is synchronous");








//This logs an asynchronous message by pushing it to the queue 2 seconds later
setTimeout(()=>{
    console.log("This is asynchronous");
}, 2000)

//This logs a final synchronous message
console.log("End of script");