

function collarCalc() {

    let userStep = document.getElementById("step").value;
    let userRad = document.getElementById("collarRadius").value;
    let userRadConst = document.getElementById("collarRadius").value;
    let userDia = document.getElementById("diametrStart").value;
    let count = userRad


        while (count >= 2){
            //Main calculation
            count = userRad - userStep; 
            let countConst = Math.pow(userRadConst, 2)
            let result = Math.pow(count, 2);
            let constAndStepDiff = countConst - result;
            let diaMinusDiff = userDia - Math.sqrt(constAndStepDiff)*2;
            //number rounding
            diaMinusDiff = Math.round(diaMinusDiff * 10) / 10;
            count = Math.round(count * 10) / 10;
    
            //Creating element in HTML
            var p = document.createElement("p");
            p.setAttribute("class","endResultCollarCalc");
            p.innerHTML = (count.toString() + "mm" + " " + "Ø" + diaMinusDiff.toString());
            var elem = document.getElementById("result");
            elem.parentNode.insertBefore(p, elem.previousSibling);
            
            //Counter for a loop
            userRad = count;
    
            // console.log(count);
            // console.log(countConst);
            // console.log(result);
            // console.log(constAndStepDiff);
            // console.log(diaMinusDiff);
            }
}


