const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

let showTime = () => {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

let addZero = (n) =>{
    return (parseInt(n,10) < 10 ? "0" : "") + n
}

let showGreetingAndBg = () => {

    let today = new Date();
    let hour = today.getHours();

    if (hour > 18){

        greeting.innerHTML = "good afternoon,";
        document.querySelector('.main').style.backgroundImage = "url('./src/img/day.jpg')";

    } else if (hour > 12){

        greeting.innerHTML = "good day,";
        document.querySelector('.main').style.backgroundImage = "url('./src/img/day.jpg')";

    } else if (hour > 6){

        greeting.innerHTML = "good morning,";
        document.querySelector('.main').style.backgroundImage = "url('./src/img/day.jpg')";

    } else {

        greeting.innerHTML = "good night,";
        document.querySelector(".main").style.backgroundImage = "url('./src/img/day.jpg')";
    }
}


showTime();
showGreetingAndBg();
