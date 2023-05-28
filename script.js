//variable to keep track of all transaction
let transaction=[];
const deleteEl=document.querySelectorAll('.btn');
console.log(deleteEl[1]);

const formEl=document.getElementById("transaction-form");

const amountEl=document.getElementById("amount");
const descriptionEl=document.getElementById("description");
const typeEl=document.getElementById("type");
var balance=0.00;

// event Handling of submit button

formEl.addEventListener("submit", function(event){
  event.preventDefault();
  const desc = descriptionEl.value;
  const amount = amountEl.value;
  const type = typeEl.value;
  const trans = { desc, amount, type };
  // append an object to an array
  transaction.push(trans);
  console.log(transaction);
  displayTrasactions(trans);
});
//funciotn to update the transaction list and balance display on the webpage
function displayTrasactions(trans){
  const transactionListEl = document.getElementById("transaction-list");
  const transactionItemEl = document.createElement("li");
  const amountEl = document.createElement("span");
  amountEl.className = "trans-amt";
  const descEl = document.createElement("span");
  descEl.className = "trans-name";
  const btnEl = document.createElement("button");
  btnEl.className = "btn";
  amountEl.innerText = "₹ " + trans.amount;
  descEl.innerText = trans.desc;
  btnEl.innerText = "-";
  transactionItemEl.appendChild(descEl);
  transactionItemEl.appendChild(amountEl);
  transactionItemEl.appendChild(btnEl);
  
  
  // transactionItemEl.appendChild(typeEl);

  transactionListEl.appendChild(transactionItemEl);
  if (trans.type === "Income") {
    balance += parseFloat(trans.amount);
  } else if (trans.type === "Expense") {
    balance -= parseFloat(trans.amount);
  }

  const balanceEl = document.getElementById("balance");
  balanceEl.innerText = "Balance: ₹" + balance.toFixed(2);
  if (balance < 0)
    balanceEl.classList.add("negative-balance");
  else
    balanceEl.classList.remove("negative-balance");

}

//function to delete a particular transaction

 
//   deleteEl.addEventListener("click" ,deleteTransaction)
// function deleteTransaction(event){

// }
