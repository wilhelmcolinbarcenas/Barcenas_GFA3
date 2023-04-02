var num1 = Math.floor(Math.random()*20)+1;
var num2 = Math.floor(Math.random()*20)+1;
var num3 = Math.floor(Math.random()*20)+1;

var max= Math.max(num1, num2, num3);
var display;

if (max == num1){
    display = "Team A ("+num1+")"
} else if (max == num2){
    display = "Team B ("+num2+")"
} else if (max == num3){
    display = "Team C ("+num3+")"
} 

var letternumber = Math.floor(Math.random()*26)+1;
var letter;

switch (letternumber){
    case 1:
        letter = "a";
        break;
    case 2:
        letter = "b";
        break;
    case 3:
        letter = "c";
        break;
    case 4:
        letter = "d";
        break;
    case 5:
        letter = "e";
        break;
    case 6:
        letter = "f";
        break;
    case 7:
        letter = "g";
        break;
    case 8:
        letter = "h";
        break;
    case 9:
        letter = "i";
        break;
    case 10:
        letter = "j";
        break;
    case 11:
        letter = "k";
        break;
    case 12:
        letter = "l";
        break;
    case 13:
        letter = "m";
        break;
    case 14:
        letter = "n";
        break;
    case 15:
        letter = "o";
        break;
    case 16:
        letter = "p";
        break;
    case 17:
        letter = "q";
        break;
    case 18:
        letter = "r";
        break;
    case 19:
        letter = "s";
        break;
    case 20:
        letter = "t";
        break;
    case 21:
        letter = "u";
        break;
    case 22:
        letter = "v";
        break;
    case 23:
        letter = "w";
        break;
    case 24:
        letter = "x";
        break;
    case 25:
        letter = "y";
        break;
    case 26:
        letter = "z";
        break;
}

var min = num2*num3;

var hours = Math.floor(min/60);
var min2 = min%60;

window.onload = function(){
    document.getElementById("TA").innerHTML = num1;
    document.getElementById("TB").innerHTML = num2;
    document.getElementById("TC").innerHTML = num3;
    document.getElementById("most").innerHTML = display;
    document.getElementById("highscore").innerHTML = letter;
    document.getElementById("minutes").innerHTML = " ("+min+" mins): ";
    document.getElementById("time").innerHTML = hours+"hr "+min2+"min";
}