//This calculates triangle angles with one of them beeing 90 degree

function calcAngle() {
    var leg1 = document.getElementById("userInputLeg1").value;
    var leg2 = document.getElementById("userInputLeg2").value;
    var resultAngle1 = Math.round(((Math.atan(leg1 / leg2) * 180) / Math.PI)*1000)/1000;
    var resultAngle2 = Math.round((90 - resultAngle1)*1000)/1000;

// console.log(resultAngle1);
// console.log(resultAngle2);

document.getElementById("endAngle1").innerHTML = "Угол α = " + resultAngle1; 
document.getElementById("endAngle2").innerHTML = "Угол β = " + resultAngle2;
}

//This calculates triangle angles with 3 legs known

function calcAngleForThreeLegs() {
    var leg1 = document.getElementById("userInputForThreeLegs1").value;
    var leg2 = document.getElementById("userInputForThreeLegs2").value;
    var leg3 = document.getElementById("userInputForThreeLegs3").value;

    var resultAngleA = Math.round((((Math.acos((Math.pow(leg2, 2) + Math.pow(leg3, 2) - Math.pow(leg1, 2)) / (2 * leg2 * leg3))) * 180 / Math.PI))*1000)/1000;
    var resultAngleB = Math.round((((Math.acos((Math.pow(leg1, 2) + Math.pow(leg3, 2) - Math.pow(leg2, 2)) / (2 * leg1 * leg3))) * 180 / Math.PI))*1000)/1000;
    var resultAngleY = Math.round((180 - (resultAngleA + resultAngleB))*1000)/1000;
    console.log(resultAngleA);
    console.log(resultAngleB);
    console.log(resultAngleY);

document.getElementById("endAngleForThreeLegs1").innerHTML = "Угол α = " + resultAngleA; 
document.getElementById("endAngleForThreeLegs2").innerHTML = "Угол β = " + resultAngleB;
document.getElementById("endAngleForThreeLegs3").innerHTML = "Угол γ = " + resultAngleY;
}
