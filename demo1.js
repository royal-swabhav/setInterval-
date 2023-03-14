let blinkerOn = false;
const toggleBlinder = () => {
    if (blinkerOn) {
        console.log('blinker off');
        blinkerOn = false;
        
    } else{
        console.log('blinker on');
        blinkerOn = true;
        
    }
}

setInterval(toggleBlinder, 500)