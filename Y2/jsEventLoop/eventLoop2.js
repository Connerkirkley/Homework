console.log('Interval started');





let repeatingMessage = setInterval(()=>{
    console.log("Repeating message...");
}, 3000)

//So the variable runs without being called because it's only being set to the result of a function correct?

setTimeout(() => {
    clearInterval(repeatingMessage);
    console.log('Interval stopped');
}, 10000)

