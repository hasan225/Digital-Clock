function Clock(){
    let date = new Date();
    let hours =date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let timeFormat= "AM";

    if(hours > 12){
        hours =hours -12;
        timeFormat = "PM"
    }
    // if(hours <10){
    //     hours= `0${hours}`
    // }
     hours =hours <10? `0${hours}` : hours ;
     minutes =minutes <10? `0${minutes}` : minutes ;
     seconds =seconds <10? `0${seconds}` : seconds ;

    let currentTime= `${hours}:${minutes}:${seconds}` ;

    const time=document.querySelector("#time");
    const Timezone=document.querySelector("small");

    time.textContent=currentTime
    Timezone.textContent=timeFormat
    setInterval(Clock,1000)

}
Clock()
