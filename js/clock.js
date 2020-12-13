const time = document.querySelector(".time"),
    mainTime = time.querySelector(".main-time"),
    // clockTitle = mainTime.querySelector("span");
    clockHours = mainTime.querySelector(".hours"),
    clockMinutes = mainTime.querySelector(".minutes"),
    subTime = time.querySelector(".sub-time"),
    clockPeriod = subTime.querySelector(".time-period"),
    clockSeconds = subTime.querySelector(".seconds"),
    currentDate = document.querySelector(".date");

function getDate() {
    const week = ['일','월','화','수','목','금','토'];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    currentDate.innerHTML = `${year}년 ${month}월 ${day}일 ${week[dayOfWeek]}요일`

}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const pmam = hours >= 12 ? 'PM' : 'AM';
    clockHours.innerHTML = `${hours < 10 ? `0${hours}` : hours % 12}`;
    clockMinutes.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`;
    clockSeconds.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;
    clockPeriod.innerHTML = pmam;
}

function init() {
    getTime();
    getDate();
    setInterval(getTime, 1000); //해당 함수를 1초마다 실행 -> 새로고침
}

init();