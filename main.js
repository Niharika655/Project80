function getParagraph1(){
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++){
        inputs.push(document.getElementById("para1_input" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showPara1").innerHTML = inputs.join(". ");
}

function getParagraph2(){
    var inputs1 = [];
    for(var j = 1 ; j<=6 ; j++){
        inputs1.push(document.getElementById("para2_input" + j).value);
    }
    inputs1.join(". ");
    document.getElementById("showPara2").innerHTML = inputs1.join(". ");
}