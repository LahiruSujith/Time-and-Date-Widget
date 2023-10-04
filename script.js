let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekdays =[
    "sunday",
    "monday",
    "tuesday",
    "wendsday",
    "thursday",
    "friday",
    "saturday"

];

const monthNames =[
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "octomber",
    "november",
    "december"
];

function formatTime(time){
    return time < 10 ? "0" +time : time;
}

function updateClock(){

    const today = new Date();
    //console.log(today);
    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
    hoursContainer.textContent = hours + ":";
    minutesContainer.textContent = minutes + ":";
    secondsContainer.textContent = seconds;
}
setInterval(updateClock,1000);