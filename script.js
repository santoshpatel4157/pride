const countdown = document.querySelector('.countdown-timer');

// Set the countdown time in seconds
let countdown_time = ;

const timer = setInterval(function() {
    // Convert remaining time to minutes and seconds
    let minutes = Math.floor(countdown_time / 60);
    let seconds = countdown_time % 60;

    // Format minutes and seconds with leading zeros
    let formatted_minutes = ('0' + minutes).slice(-2);
    let formatted_seconds = ('0' + seconds).slice(-2);

    // Update the countdown timer display
    countdown.innerHTML = `<span class="minutes">${formatted_minutes}</span>:<span class="seconds">${formatted_seconds}</span>`;

    // Decrement countdown time
    countdown_time--;

    // Check if countdown is finished
    if (countdown_time < 0) {
        clearInterval(timer);
        countdown.innerHTML = "<strong>Time's up!</strong>";
    }
}, 1000);
