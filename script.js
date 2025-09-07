var inputPin = document.getElementById("input-pin")
var userInputPin = document.getElementById("pin")
var correctPin=1234;
var userAction = document.getElementById("user-action")
var amount = 20000;

function insert(){
inputPin.style.display="block";

}

function submit(){
  if(userInputPin.value == correctPin){
    alert("you have entered correct Pin")
    userAction.style.display="block"
  }
  else{
    alert("Please input correct Pin")
  }
  userInputPin.value=""
}

function inquiry(){
  alert("your current amount is "+ amount +" rupees...")
}

function deposit(){
  var depositAmount = +prompt("How much amount u want to deposit.....?");
  amount += depositAmount;
  alert("amount deposited successfuly......!")
  inquiry();
  
}

function withdraw(){
  var withdrawAmount = +prompt("How much amount u want to withdraw.....?");
  if(withdrawAmount <= amount){
  amount -= withdrawAmount;
  alert("amount withdrawn successfuly......!")
  inquiry();
    
  }
  else{
    alert("You have isufficient amount in your account , transaction declined.....!")
  }
}
function quit(){
  inputPin.style.display="none";
  userAction.style.display="none"
    }
