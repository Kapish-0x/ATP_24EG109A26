// Displays message when OTP is sent
console.log("OTP Sent Successfully");

// Initial countdown value
let seconds = 5;

// Runs every 1 second
let interval = setInterval(() => {
    // Decrease countdown value
    seconds--;
    // Display remaining time for OTP resend
    console.log(`OTP can resend after ${seconds} secs`);
    // Stop timer when countdown reaches 0
    if (seconds === 0) {
        console.log("Resend OTP");
        // Clear interval to stop execution
        clearInterval(interval);
    }
}, 1000);