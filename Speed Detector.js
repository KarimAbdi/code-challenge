function getSpeed(){
    let speed = parseInt(prompt("Enter car speed"))
}
if (speed <= 70){
    console.log(window.alert("OK"))
}
else{
    let demeritpoints = math.floor((speed - 70)/5);
    console.log(window.alert('points: ${demeritPoints}'));
    if(demeritpoints > 12){
        console.log(Window.alert("Licence Suspended"));
        
    }else{
        console.log('Points: ${demeritpoints}');
    }
    
}
getSpeed();