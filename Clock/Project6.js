const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

console.log(hourEl);

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock , 1000);
    // console.log(currentDate);

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    console.log(hours , minutes , seconds)
    
    const hourDeg = (hours/12)*360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    
    const minuteDeg = (minutes/60)*360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    
    const secondDeg = (seconds/60)*360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;

}

updateClock();










































