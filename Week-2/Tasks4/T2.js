console.log("OTP Sent Successfully")
let seconds = 5;
let interval = setInterval(()=>{
    seconds--;
    console.log(`OTP can resend after ${seconds} secs`)
    if(seconds===0) {
        console.log("Resend OTP")
        clearInterval(interval)
    }
},1000)