function scuberGreetingForFeet(x){
  // Write your code here!
  if(x < 400) {
    return 'This one is on me!';
  } else if (x < 2000) {
    return 'That will be twenty bucks.'
  } else if (x < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(val){
  switch(val) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
  }
}