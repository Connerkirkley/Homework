const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let Game = true;
let pressedKey = "";
let canLogInput = true;
let keyLog = [];

let keyLogger = function (Key) {
    const previousKey = keyLog[keyLog.length - 1];
    if (previousKey !== Key) {
        if (Array.isArray(previousKey) && previousKey[0] === Key) {
            previousKey[1]++;
            console.log(keyLog);
        } else {
            keyLog.push([Key, 1]);
            console.log(keyLog);
        }
    }
};

window.addEventListener("keydown", (e) => {
    if (canLogInput) {
        pressedKey = e.key;
        console.log(pressedKey);
        canLogInput = false;
        keyLogger(pressedKey);
    }
});

async function game() {
    let startTime, elapsedTime;
    while (Game) {
        startTime = Date.now();
        await sleep(Math.max(0, 1000 / 30 - elapsedTime));
        canLogInput = true;
        pressedKey = "";
        elapsedTime = Date.now() - startTime;
    }
}

game();
