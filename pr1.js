function bmiCalc()
{
var wt = document.getElementById("wet").value
var ht = document.getElementById("het").value
var cmht = ht * 0.01
var msqht = cmht * cmht
var bmi = wt/msqht
var bmi1 = bmi.toFixed(2);
//document.write("Your bmi is " + bmi)
document.getElementById("demo").innerHTML = "Your bmi is " + bmi1;
if (bmi1 <= 18.5){
    document.getElementById("result").innerHTML = "underweight";
    document.getElementById("result").style.color = "yellow";
}
else if(bmi1 >= 18.5 && bmi1 <= 24.9) {
    document.getElementById("result").innerHTML = "Normal";
    document.getElementById("result").style.color = "green";
}
else if(bmi1 >= 25 && bmi1 <= 29.9) {
    document.getElementById("result").innerHTML = "Overweight";
    document.getElementById("result").style.color = "orange";
}
else if(bmi1 >= 30) {
    document.getElementById("result").innerHTML = "Obese";
    document.getElementById("result").style.color = "red";
}
}

