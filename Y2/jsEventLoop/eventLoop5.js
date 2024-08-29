console.log('Countdown initiated...');




let count = 10



setTimeout(() => {
    let message = setInterval(() => {
        console.log(count);
        if (count == 0) {
            clearInterval(message);
            setTimeout(() => {
                console.log("Liftoff!");
            })
        
        }
        count--;
    }, 1000);
},3000)















