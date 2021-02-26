const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const userName = document.getElementById('userName');
const focus = document.getElementById('focus');
const showAmPm = true;

let showTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

let addZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n
}

let setGreetingAndBg = () => {

  let today = new Date();
  let hour = today.getHours();

  if (hour > 18) {

    greeting.textContent = 'Good afternoon,';
    document.querySelector('.main').style.backgroundImage = "url('./src/img/afternoon.jpg')";
    document.querySelector('.main').style.color = '#fff';


  } else if (hour > 12) {

    greeting.textContent = 'Good day,';
    document.querySelector('.main').style.backgroundImage = "url('./src/img/day.jpg')";

  } else if (hour > 6) {

    greeting.textContent = 'Good morning,';
    document.querySelector('.main').style.backgroundImage = "url('./src/img/morning.jpg')";
    document.querySelector('.main').style.color = '#fff';


  } else {

    greeting.textContent = 'Good night,';
    document.querySelector('.main').style.backgroundImage = "url('./src/img/night.jpg')";
    document.querySelector('.main').style.color = '#fff';

  }
}

let getUserName = () => {

  if (localStorage.getItem('userName') === null) {
    userName.textContent = '[Enter name]';

  } else {
    userName.textContent = localStorage.getItem('userName');
  }
}

let setUserName = (e) => {

  if (e.type === 'keypress') {

    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('userName', e.target.innerText);
      userName.blur();
    }
  } else {
    localStorage.setItem('userName', e.target.innerText);
  }
}


let setFocus = (e) => {

  if (e.type === 'keypress') {

    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

let getFocus = () => {

  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter focus]';

  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

userName.addEventListener('keypress', setUserName);
userName.addEventListener('blur', setUserName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


getUserName();
getFocus();
showTime();
setGreetingAndBg();

