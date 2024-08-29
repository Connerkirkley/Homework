const os = require('os')
const user = os.userInfo()
console.log(user);


let upTimeDisplay = function(){
    let sec = os.uptime();
    let min = sec / 60;
    let hour = min / 60;

    sec = Math.floor(sec);
    min = Math.floor(min);
    hour = Math.floor(hour);

    hour = hour % 60;
    min = min % 60;
    sec = sec % 60;

    return("Up time: "+ hour + " Hour(s) "+ min + " minute(s) and "+ sec + " second(s)");
}

console.log(upTimeDisplay());


const currentOS = {
    name: os.type(),
    relese: os.release(),
    arch: os.arch(),
    device: os.platform()
}



console.log(currentOS);
