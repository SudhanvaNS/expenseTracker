//variable to keep track of all transaction
var transaction=[];
const formEl=document.getElementById("transaction-form");
const amountEl=document.getElementById("amount");
const descriptionEl=document.getElementById("description");
const typeEl=document.getElementById("type");
var balance=0.00;

// event Handling of submit button

formEl.addEventListener("submit" ,function(event){
  event.preventDefault();
  const desc=descriptionEl.value;
  const amount=amountEl.value;
  const type=typeEl.value;
  const obj=new Object(desc,amount,type);
  // append an object to an array
  transaction.push(obj);
  displayTrasactions(transaction[transaction.length-1]);
});
//object constructor
function Object(desc,amount,type){
    this.desc=desc;
    this.amount=amount;
    this.type=type;
}
function displayTrasactions(arr){
  const transactionListEl = document.getElementById("transaction-list");
  const transactionItemEl = document.createElement("li");
  const amountEl = document.createElement("span");
  const descEl = document.createElement("span");
  const typeEl=document.createElement("span");
  amountEl.innerText = arr.amount;
  descEl.innerText = arr.desc;
  transactionItemEl.appendChild(descEl);
  transactionItemEl.appendChild(amountEl);
  
  // transactionItemEl.appendChild(typeEl);

  transactionListEl.appendChild(transactionItemEl);
  if (arr.type === "income") {
    balance += parseFloat(arr.amount);
  } else if (arr.type === "expense") {
    balance -= parseFloat(arr.amount);
  }

  const balanceEl = document.getElementById("balance");
  balanceEl.innerText = "Balance: ₹"+balance.toFixed(2);
}
//funciotn to update the transaction list and balance display on the webpage

