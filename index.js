function scuberGreetingForFeet(ride = 119){
  // Write your code here!
  if (ride <= 400){
    return 'This one is on me!';
  }
  else if (ride >= 2000 && ride <= 2500 ){
    return 'I will gladly take your thirty bucks.'
  }
  else if (ride >2500){
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return 'Ok, sounds good.'
  }
  else if (city==="Pittsburgh"){
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous"){
    return "Thank you so much."
  }
  else if (tip === "not as generous"){
    return "Thank you."
  }
  else {
    return "Bye."
  }
}