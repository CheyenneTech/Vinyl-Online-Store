const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');



hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

let countDownDate = new Date("April 22, 2023 00:00:00").getTime()

let x = setInterval(function(){
    let now = new Date().getTime()
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

},1000)

