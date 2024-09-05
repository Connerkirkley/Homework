// //We are going to get the custom emitter class needed if you want to custom extend from class otherwise for emitting and handles events create an instance of this class\


const EventEmitter = require('events')

const customEmitter = new EventEmitter()


// //The on and emit methods are to keep track of the order. You can also use additional arguments/parameters and the built in function/module can utilize it

customEmitter.on('responce', (name,id) => {
    console.log(`data is ${name}, with id of ${id}`);
})

customEmitter.on('testing', () => {
    console.log('test');
})





customEmitter.emit('responce', 'jhon', 34)

// customEmitter.emit('testing')



//Emample:

class TempSensor extends EventEmitter{
    constructor(){
        super()
        this.temp = 95
    }
    updateTemp(newTemp){
        this.temp = newTemp
        this.emit('tempUpdate', newTemp)
    }
}

const sensor = new TempSensor

sensor.on('tempUpdate', (temp)=>{
    console.log('temp updated, its now ' + temp);
    //this logic can be used for just about anything.
})



sensor.updateTemp(37)
sensor.updateTemp(101)

