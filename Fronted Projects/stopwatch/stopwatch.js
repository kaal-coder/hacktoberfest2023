//define var to hold values
let sec=00;
let min=00;
let hr=00;

let displaysec=0;
let displaymin=0;
let displayhr=0;

var interval=null;
var status="stopped";


function stopwatch() {
    sec++;
    if(sec/60===1){
        min++;
        sec=0;

        if(min/60===1){
            hr++;
            min=0; 
    
            
        }
    }
     
    if(sec<10){
        displaysec="0"+sec.toString();
    }else{
        displaysec=sec;
    }
    if(min<10){
        displaymin="0"+min.toString();
    }else{
        displaymin=min;
    }
    if(hr<10){
        displayhr="0"+hr.toString();
    }else{
        displayhr=hr;
    }

    //display time values
    document.getElementById("display").innerHTML=displayhr+":"+displaymin+":"+displaysec;
    
}

function clockstart(){
    if(status=="stopped"){
        interval=window.setInterval( stopwatch ,1000);
        status="started";
    }
}
function clockstop(){
    status="stopped";
    window.clearInterval(interval);
}
function clockreset(){
    status="stopped";
    window.clearInterval(interval);
    document.getElementById("display").innerHTML="00:00:00";
    sec=0;min=0;hr=0;
}