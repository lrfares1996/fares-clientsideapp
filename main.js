document.getElementById("areaButton").addEventListener("click", areaCalc);
                                                   
function areaCalc()
{
    "use strict";
    var sqWidth = document.getElementById("width").value;
    var sqHeight = document.getElementById("length").value;
    document.getElementById("ans").innerHTML = "Area = " + (sqHeight * sqWidth);
};