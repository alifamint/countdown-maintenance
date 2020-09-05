/* 
    Designed & Developed by Purnama Code & Masdzik
    Type    : Countdown Timer Script
    Date    : 05 Sept 2020
    email   : dzlabsid@gmail.com
*/

const day       = document.querySelector('#days');
const hour      = document.querySelector('#hours');
const minute    = document.querySelector('#minutes');
const second    = document.querySelector('#seconds');

const target    = new Date('Sep 25, 2020 12:00:00').getTime();

const countDate = setInterval(() => {
    const now           = new Date().getTime();
    const finished      = target - now;

    const days          = Math.floor(finished / (1000 * 60 * 60 * 24));
    const hours         = Math.floor(finished % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes       = Math.floor(finished % (1000 * 60 * 60) / (1000 * 60));
    const seconds       = Math.floor(finished % (1000 * 60) / (1000));

    day.innerHTML       = days;
    hour.innerHTML      = hours;
    minute.innerHTML    = minutes;
    second.innerHTML    = seconds;

    if (finished < 0) {
        clearInterval(countDate);
        window.location = 'index.html';
        // change index.html with URL what you want
    }

}, 1000)