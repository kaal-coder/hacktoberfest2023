const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const custombtn = document.getElementById("custombtn");

const h1 = document.querySelector('h1')
let timerinterval;
let remmin;
let remseconds;

const beep = () => {
    const audio = new Audio('./beep.wav')
    audio.volume = 1
    audio.play()
}

function takeInput(){
    let counter = parseInt(prompt("Enter time in seconds:" ));
    h1.innerHTML = "00" + " : " + counter;

const timer = () => {
    counter--;
    h1.innerHTML = "00" + " : " + counter;
    if(counter <= 9){
        h1.innerHTML = "00" + " : " + `0${counter}`;
    }
    if (counter === 0) {
        clearInterval(timerinterval)
        h1.innerHTML = "Time Out!";
        beep();
    }
    if(counter>60){
        remseconds = counter%60;
        remmin = Math.floor(counter/60);

        if(remmin<=9){
            h1.innerHTML = `0${remmin}` +" : " + remseconds;
        }
        else if(remseconds<=9){
            h1.innerHTML = remmin + " : " + `0${remseconds}`;
        }
        else if((remmin<=9 && remseconds<=9) || (remmin<=9 || remseconds<=9)){
            h1.innerHTML = `0${remmin}` + " : " + `0${remseconds}`;
        }
        else{
            h1.innerHTML = remmin +" : " + remseconds;
        }
    }
}

startbtn.addEventListener('click', () => {
   timerinterval = setInterval(timer, 1000)
})

stopbtn.addEventListener('click',() =>{
    clearInterval(timerinterval);
})
}

custombtn.addEventListener('click', ()=>{
    takeInput();
});

resetbtn.addEventListener('click',()=>{
    h1.innerHTML = "00" + " : " + "00";
    clearInterval(timerinterval);
})
