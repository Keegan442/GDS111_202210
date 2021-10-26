//RIDDLES JavaScript File

//JS is a scripting language that can CHANGE stuff on the HTML page; it is NOT a markup language so it will follow more fundamental logic related to other computer programming styles

//VARIABLES - variables store data (information) to be used in the script/program; they are friendly names to refer to info as

//each variable will store the answer to a riddle question
//JS requires vars to be declared as such

var store1 = "Nothing!" //answer to question 1
var store2 = "The Post Office!" //answer to question 2
var store3 = "NOON" //answer to question 3
var store4 = "Time to fix the fence" //answer to question 4
var store5 = "An umbrella" //answer to question 5
var store6 = "Your left hand" //answer to question 6
var store7 = "A cold" //answer to question 7


//***VARIABLE NAMES MUST BE UNIQUE! They are also cAsE sEnSiTiVe
//        total != Total != TOTAL


//FUNCTIONS - perform tasks; they have a set of processes assigned to them, and when they are CALLED their tasks are performed

//function below will talk to the HTML DOM (Document Objct Model) and get specific elements by their id, then push info to thir innerHTML (inbetween the open and close of the tag)

function answer1() {

    document.getElementById("question1").innerHTML = store1;
}

function answer2() {

    document.getElementById("question2").innerHTML = store2;
}

function answer3() {

    document.getElementById("question3").innerHTML = store3;
}

function answer4() {

    document.getElementById("question4").innerHTML = store4;
}

function answer5() {

    document.getElementById("question5").innerHTML = store5;
}

function answer6() {

    document.getElementById("question6").innerHTML = store6;
}

function answer7() {

    document.getElementById("question7").innerHTML = store7;
}