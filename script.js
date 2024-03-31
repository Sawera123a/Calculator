
function setvalue(num){
    display.value += num;
}
function back(){
    var val = display.value;
    display.value= val.slice(0,-1);
}
function clearvalue(){
    display.value="";
}
function answer(){
   var val = display.value;
   display.value = eval(val);
}
function SquareRoot(){
 var squareRootValue=Math.sqrt(display.value);
 display.value =squareRootValue;
}
function pi(){
    display.value = 3.14159265359;
}
function e(){
    display.value = 2.71828182846;
}