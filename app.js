// let number = 0;
// let start = 0;
// let answer= " ";

//for loop to add to the number variable
// for (let i=10;i>0; i--) {
//     number=number+2;
// }

//while loop set up similar to a for loop
// while(start<4){
//     number=number+2;
//     start++;
// }

//Establish Variables
let attackCount;
let attackHit;
let dragonHit;
let totalDragonDamageTaken = 0;
let totalPersonDamageTaken = 0;
let whoWins;
let stopMe = false;

while (stopMe === false) {
//Prompt the user to input the number of hits they are going to attempt to hit the dragon with up to 5.
    attackCount = Number(prompt("How many times would you like to attempt to hit the dragon? Max of 5!"));

//Have the user deal a random amount of damage, between 1 and the number they input, to the dragon.
    attackHit = Math.floor(Math.random() * (attackCount + 1)) + 1;
    console.log("Attack Hit is: "+attackHit);

//If the random number is above 5, have the user deal only 1 damage to the dragon.
    if (attackHit > 5) {
        attackHit = 1;
        console.log("Attack Hit changed to: "+attackHit);
    }
    totalDragonDamageTaken = attackHit + totalDragonDamageTaken;

//Then, have the dragon randomly deal either 1 damage or 2 damage to the user. If clause is to make sure dragon has not been slain.
    if (totalDragonDamageTaken < 10) {
        dragonHit = Math.floor(Math.random() * (2)) + 1;
        console.log("Dragon Hit is: "+dragonHit);
        totalPersonDamageTaken = dragonHit + totalPersonDamageTaken;
    }

//Checking to stop loop
    if (totalDragonDamageTaken >= 10 || totalPersonDamageTaken >= 5) {
        stopMe = true;
    }
}

if (totalDragonDamageTaken >= 10) {
    whoWins="Person wins!";
}
else {
    whoWins="Dragon wins!";
}
document.body.innerHTML="Total Dragon Damage Taken: "+totalDragonDamageTaken+". "+"Total Person Damage Taken: "+totalPersonDamageTaken+". "+whoWins;
