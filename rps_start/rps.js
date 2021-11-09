//RPS Part 1 Javascript -- W6D1 class

//create an array that will store the images being used
//ARRAY: it's just like a variable (so it's a data storage device) BUT it can contain more than one value

var pics = new Array() //creates an empty array

//assign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array name + index gives access to the indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

//arrays that store the player & computer options (one array for each)
//Player ID = pId
var pId = new Array("rock_p", "paper_p", "scissors_p") 
//pId[1] = "paper_p"
//Computer ID = cId
var cId = new Array("rock_c", "paper_c", "scissors_c")

//create a funcion that will swap the regular images with the highlighted ones (series 2 pics)
function swap(id, image) {

    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image

}

//play function
function play(id) {

    //setting up the stored image paths (src) in JS to match the HTML ones
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the game choices to variables (player & comp)
    var p_choice = id

    //randomize the computer's choice! math.floor and * 2.9 
    var c_choice = Math.floor(Math.random() * 2.9)

    //swap the strating images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    //SWITCH TIME - switch statements give us the option to determine a set of code to run based on a predetermined case value

    switch(p_choice) {
        //cases need to be build for *every* option p_choice can be!

        //0 is ROCK
        case 0://case for when p_choice == 0
        if (c_choice == 0){

            //alert the user that there has been a draw
            alert("Bloody hell let's call it a DRAW!")
        }
        else if (c_choice == 1){

            alert("You LOST to the computer!")
        }
        else {
            alert("You WIN with your ROCK!")
        }

        break

        //1 is PAPER
        case 1:
            if (c_choice == 1){

                //alert the user that there has been a draw
                alert("Bloody hell let's call it a DRAW!")
            }
            else if (c_choice == 2){
    
                alert("You LOST to the computer!")
            }
            else {
                alert("You WIN with your PAPER!")
            }
    
            break

        //2 is SCISSORS
        case 2:
            if (c_choice == 2){

                //alert the user that there has been a draw
                alert("Bloody hell let's call it a DRAW!")
            }
            else if (c_choice == 0){
    
                alert("You LOST to the computer!")
            }
            else {
                alert("You WIN with your SCISSORS!")
            }
    
            break
    }

}