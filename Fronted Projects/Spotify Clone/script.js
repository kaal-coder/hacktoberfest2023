let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
console.log(songItems);


let songs = [
    {songName : "Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "GOGSDAS",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName : "WADSD",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName : "adsasdasd",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName : "asdasdasdas",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName : "qweqweqwe",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName : "asdasdsf",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName : "Salam-e-Ishq",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName : "Salam-e-Ishq",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName : "Salam-e-Ishq",filePath:"song/10.mp3",coverPath:"covers/9.jpg"}
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.querySelectorAll("img")[0].src = songs[i].coverPath;
    element.querySelectorAll(".songName")[0].innerText= songs[i].songName;
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeUpdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const plays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener("click",(e)=>{        
        plays();
          e.target.classList.remove("fa-play-circle");
          e.target.classList.add("fa-play-circle");

          audioElement.src = "song/3.mp3";
          audioElement.currentTime = 0;
          audioElement.play();
    })
})
