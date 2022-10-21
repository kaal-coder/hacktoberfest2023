console.log("Welcome in Javascript tutorial after few days !")
setInterval(() => {
    d=new Date();
    second=d.getSeconds();
    hour=d.getHours();
    minutes=d.getMinutes();
    hrotation=30*hour +minutes/2;
    mrotation=6*minutes;
    srotation=6*second;

    htime.style.transform=`rotate(${hrotation}deg)`;
    mtime.style.transform=`rotate(${mrotation}deg)`;
    stime.style.transform=`rotate(${srotation}deg)`;
}, 
1000);