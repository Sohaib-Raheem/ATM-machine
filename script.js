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
    inputPin.style.display="none";
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
  Swal.fire({
    title: "Enter deposit amount",
    input: "number",
    inputAttributes: {
      min: 1
    },
    showCancelButton: true,
    confirmButtonText: "Deposit",
    cancelButtonText: "Cancel",
    customClass: {
      input: "my-input",   // custom CSS class for input
      confirmButton: "my-confirm-btn",
      cancelButton: "my-cancel-btn"
    }
  }).then((result) => {
    if (result.isConfirmed) {
      let depositAmount = +result.value;
      if (depositAmount > 0) {
        amount += depositAmount;
        Swal.fire({
          title: "Amount Deposited Successfully!",
          text: "Your new balance is " + amount + " rupees.",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid amount",
          text: "Please enter a valid deposit amount!"
        });
      }
    }
  });
}

function withdraw(){
  Swal.fire({
    title: "Enter withdrawal amount",
    input: "number",
    inputAttributes: {
      min: 1
    },
    showCancelButton: true,
    confirmButtonText: "Withdraw",
    cancelButtonText: "Cancel",
    customClass: {
      input: "my-input",   // same CSS class for styling
      confirmButton: "my-confirm-btn",
      cancelButton: "my-cancel-btn"
    }
  }).then((result) => {
    if (result.isConfirmed) {
      let withdrawAmount = +result.value;
      if (withdrawAmount > 0 && withdrawAmount <= amount) {
        amount -= withdrawAmount;
        Swal.fire({
          title: "Amount Withdrawn Successfully!",
          text: "Your new balance is " + amount + " rupees.",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Transaction Declined",
          text: "Insufficient balance or invalid amount!"
        });
      }
    }
  });
}
function quit(){
  inputPin.style.display="none";
  userAction.style.display="none"
    }
