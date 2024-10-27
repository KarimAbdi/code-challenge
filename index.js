var name = parseInt (prompt("Insert name") );
var sub  = parseInt(prompt("Insert sub1 marks"))
var sub =parseInt(prompt("insert percent"))
var tot = parseInt(sub)
var per = parseInt(((tot)/500)*100)
alert ('Total: ' + tot + 'Out of 500')
if (sub=>79){
    alert('pass --A Grade');
}else if(per >=60 && per <79){
    alert ("pass --B Grade");
}else if (per >=50 && per <59){
    alert("pass ---C Grade");
}else if (per >=40 && per <49){
    alert("D Grade")
}else if (per <40){
    alert("Grade E")
}