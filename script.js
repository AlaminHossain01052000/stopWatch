let minitueDisplay = document.getElementById('display-minitue');
let secondDisplay = document.getElementById('display-second');
let miliDisplay = document.getElementById('display-miliSecond');


minitueDisplay.innerText = "00";
secondDisplay.innerText = "00";
miliDisplay.innerText = "00";


const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
let i = 0;
let second = 0;
let minitue = 0;


function startTimer() {

    i++;
    if (i < 9) {
        miliDisplay.innerText = '0' + i;

    }
    if (i > 9) {
        miliDisplay.innerText = i;
    }
    if (i > 99) {
        second++;
        i = 0;

        secondDisplay.innerText = '0' + second;
        if (second > 9) {

            secondDisplay.innerText = second;
        }
        if (second > 59) {
            minitue++;
            second = 0;

            secondDisplay.innerText = 00;
            minitueDisplay.innerText = '0' + minitue;
            if (minitue > 9) {
                minitueDisplay.innerText = minitue;
            }
            if (minitue > 59) {
                minitueDisplay.innerText = 0;
            }
        }
    }


}


startButton.addEventListener('click', function () {
    interval = setInterval(startTimer, 10);
})

stopButton.addEventListener('click', function () {
    clearInterval(interval);
})

resetButton.addEventListener('click', function () {
    clearInterval(interval);
    i = "00";
    second = "00";
    minitue = "00";
    miliDisplay.innerText = i;
    secondDisplay.innerText = second;
    minitueDisplay.innerText = minitue;
})