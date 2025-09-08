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
   Swal.fire({
  title: "✔ Correct PIN! Proceed to your transactions.",
  icon: "success",
  draggable: true
});
    userAction.style.display="block"
  }
  else{
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "please enter your correct pin!",
});
    
  }
  userInputPin.value=""
}

function inquiry(){
  Swal.fire("your current amount is "+ amount +" rupees...");
  
}

function deposit(){
  var depositAmount = +prompt("How much amount u want to deposit.....?");
  amount += depositAmount;
Swal.fire({
  title: "Amount Deposited successfully .....!",
  icon: "success",
  draggable: true
});
  
  inquiry();
  
}

function withdraw(){
  var withdrawAmount = +prompt("How much amount u want to withdraw.....?");
  if(withdrawAmount <= amount){
  amount -= withdrawAmount;
Swal.fire({
  title: "Amount withdrawn successfully .....!",
  icon: "success",
  draggable: true
});
  inquiry();
    
  }
  else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "You have isufficient amount in your account , transaction declined.....!!",
});
  }
}
function quit(){
  inputPin.style.display="none";
  userAction.style.display="none"
    }
