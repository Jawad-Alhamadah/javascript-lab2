// Question one--  Animal Diet 

let eatsPlants = false;
let eatsAnimals = true;
let type =
    eatsAnimals ? (eatsPlants ? 'omnivore' : 'carnivore')
        :
        (eatsPlants ? 'herbivore' : undefined)
console.log(`(${eatsPlants} ,${eatsAnimals} ,${type})`)

// Question one-- Animal Diet   End


//Question Two -- Musical Groups

// Prints "not a group" if musicians is less than or equal to 0
// Prints "solo" if musicians is equal to 1
// Prints "duet" if musicians is equal to 2
// Prints "trio" if musicians is equal to 3
// Prints "quartet" if musicians is equal to 4
// Prints "this is a large group" if musicians is greater than 4

var musicians = 5;

if (musicians <= 0) {
    console.log('not a group')
}


if (musicians === 1) {
    console.log('solo')
}

if (musicians === 2) {
    console.log('duet')
}

if (musicians === 3) {
    console.log('trio')
}


if (musicians === 4) {
    console.log('quartet')
}

if (musicians > 4) {
    console.log('this is a large group')
}
//Question Two -- Musical Groups ---- end










var weapon1 = "poison";
var weapon2 = "trophy";
var weapon3 = "pool-stick"
var weapon4 = "knife"

let suspect1 = "Kalehoff"
let suspect2 = "Cleve"
let suspect3 = "Sparr"
let suspect4 = "Kalehoff "

let room1 = "dining"
let room2 = "gallery"
let room3 = "billiards"
let room4 = "ballroom"


var weapon = "knife"
var suspect = "Kalehoff"
var room = "ballroom"
var solved = false;


if (room === room1) {
    if (weapon === weapon1) {
        suspect = suspect1
        solved = true
    }
}


if (room === room2) {
    if (weapon === weapon2) {
        suspect = suspect2
        solved = true
    }
}

if (room === room3) {
    if (weapon === weapon3) {
        suspect = suspect3
        solved = true
    }
}

if (room === room4) {
    if (weapon === weapon4) {
        suspect = suspect3
        solved = true
    }
}

if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`)
} else {
    console.log(`no suspect found`)
}

//Question 4 --Checking Your Balance

let balance = 2
let checkBalance = true
let isActive = true

if (checkBalance) {
    if (isActive) {
        if (balance < 0) {
            console.log(`Your balance is : ${balance} You are In debt! `)

        } else {
            console.log(`Your balance is : ${balance} `)
        }

    }
    else {
        console.log("your account is inactive")
    }


}



// Question 5 - Ice cream



let allowed_flavor1 = "vanilla"
let allowed_flavor2 = "chocolate"

let allowed_toppings1 = "sprinkles"
let allowed_toppings2 = "peanuts"

let allowed_vessels1 = "bowl"
let allowed_vessels2 = "cone"

let flavor = "chocolate"
let vessel = "bowl"
let toppings = "sprinkles"


let isAllowedFlavor = (flavor === allowed_flavor1 || flavor === allowed_flavor2) 
let isAllowedTopping =  (toppings === allowed_toppings1 || toppings === allowed_toppings2)
let isAllowedVessel = (vessel === allowed_vessels1) || (vessel === allowed_vessels2) 

if ( isAllowedFlavor && isAllowedTopping && isAllowedVessel){

    console.log(`I'd like two scoops of ${flavor} ice cream in a ${ vessel} with ${toppings}.`)
}

