function setDate() {

    let date = new Date();
    //Seconds to Degree
    let seconds = date.getSeconds();
    let secondsDegree = (seconds / 60 * 360);

    //Minutes to Degree
    let minutes = date.getMinutes();
    let minutesDegree = (minutes / 60 * 360);
  

    //Hours to Date
    let hours = date.getHours();
    let hoursDegree = (hours / 12 * 360);
    
    document.querySelector(".hour-hand").style.transform = `rotate(${hoursDegree}deg)`;
    document.querySelector(".min-hand").style.transform = `rotate(${minutesDegree}deg)`;
    document.querySelector(".second-hand").style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(setDate, 1000);

