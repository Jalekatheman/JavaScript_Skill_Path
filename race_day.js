let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

const age = 18;

if(age > 18 && registeredEarly == true){

  raceNumber += 1000;

} 

if(age > 18 && registeredEarly == true){

  console.log(`Hello!, you will race at 9:30 am. Your race number is ${raceNumber}.`);

} else if (age > 18 && registeredEarly == false){

  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`);

} else if (age < 18){

   console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your number is ${raceNumber}.`);

} else {

  console.log("Please check the registration desk.")

}