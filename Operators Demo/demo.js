//start by declaring know variables with starting values
//variable: data storage device; friendly name for info

var totalAmmo = 6 //ammo cache value
var maxAmmo = 6 //gun capacity for ammo

//below ensures the current gun capacity for ammo is full before we start
var currentAmmo = maxAmmo

//shoot function -- handles unpdating the current ammo on screen (so as button is clicked, current ammo goes down -1)
function shoot() {

    //contitional statement --> checks for TRUTH; uses relational (contional) operators
    if (currentAmmo > 0) {

        //lower current ammo in gun by 1
        //long math way (right of = happens FIRST, storage happens right to left)
        //currentAmmo = currentAmmo - 1

        //faster way
        currentAmmo-- //decrementation; minus 1

    }//if ends HERE

    //once the if statement code has run, update the screen
    //call the updating screen function --> call by stating the name
    updatescreen()

}//shoot() END

//function to update the total and current ammo values on screen
function updatescreen() {

    //first, connect the HTML elements holding the ammo values to your JS, and write *inside of the elements* the current ammo values from JS
    document.getElementById("total-ammo").innerHTML = "" + totalAmmo
    document.getElementById("current-ammo").innerHTML = "" + currentAmmo

}//updatescreen() CLOSE

//functions can also be PASSED VALUES; these values are called PARAMETERS and must be sent to the function during the call in order for the fucntion to work (func relies on this data to do its job!)
function getDiff(a,b) {

    var c = a - b

    //once c is calculated, the value will be returned to where the function was CALLED
    return c

}//getDiff() CLOSE

//reload funcion --> reloading the current gun's ammo to fire again
function reload() {
   
    //find the value of difference by calling getDiff() and sending ammo values
    //once getDiff() does its job, it returns 'c' to where it was called
    //REMEMBER: storage( = ) happens from right to left
    var difference = getDiff(maxAmmo, currentAmmo) //getDiff(a = maxAmmo, b = currentAmmo)

    if (totalAmmo >= difference) {

        currentAmmo += difference //currentAmmo = currentAmmo + difference
        totalAmmo -= difference //totalAmmo = totalAmmo - difference
    }

    else {//when the if contion is FALSE, the else runs

        currentAmmo += totalAmmo
        totalAmmo -= totalAmmo //totalAmmo = 0
    }

    updatescreen()


}//reload()