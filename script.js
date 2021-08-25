const countdown = () => {
    // setting the countdown date, current date and gap in milliseconds
    const countDate = new Date('December 31, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    console.log(gap);

    // convert milliseconds to time units
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculations
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // display in HTML
    document.querySelector('.days').innerText = textDay;
    document.querySelector('.hours').innerText = textHour;
    document.querySelector('.minutes').innerText = textMinute;
    document.querySelector('.seconds').innerText = textSecond; 
}

setInterval(countdown, 1000);