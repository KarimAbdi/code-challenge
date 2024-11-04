function getSpeed() {
    let speed = parseInt(prompt("Enter car speed"));

    if (speed < 70) {
        window.alert("OK");
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5);
        window.alert(`Points: ${demeritPoints}`);
        
        if (demeritPoints > 12) {
            window.alert("License Suspended");
        }
    }
}

getSpeed();
