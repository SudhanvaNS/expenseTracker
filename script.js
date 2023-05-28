//variable to keep track of all transaction
let transaction=[];

const formEl = document.getElementById("transaction-form");

let balance=0.00;

// event Handling of submit button

formEl.addEventListener("submit", function(event){
  event.preventDefault();
  const amountEl = document.getElementById("amount");
  const descriptionEl = document.getElementById("description");
  const typeEl = document.getElementById("type");
  const desc = descriptionEl.value;
  const amount = amountEl.value;
  const type = typeEl.value;
  const trans = { desc, amount, type };
  // append an object to an array
  transaction.push(trans);
  displayTrasaction(trans);
  updateBalance(trans);
});

const transactionItems = document.querySelectorAll(".trans-item");
for (item of transactionItems) {
    item.lastElementChild.addEventListener("click", () => {
    console.log(this);
  })
}

function displayTrasaction(trans) {
  const transactionItemEl = document.createElement("li");
  transactionItemEl.className = `trans-item ${trans.type === "Income" ? "income" : "expense"}`;
  const amountEl = document.createElement("span");
  amountEl.className = "trans-amt";
  const descEl = document.createElement("span");
  descEl.className = "trans-name";
  amountEl.innerText =
    (trans.type === "Income" ? "+ " : "- ") + trans.amount;
  descEl.innerText = trans.desc;

  const editBtn = document.createElement("button");
  editBtn.className = "edit-trans";
  editBtn.innerHTML = '<i class="fa-sharp fa-solid fa-pen" style="color: #323232;"></i>';

  const delBtn = document.createElement("button");
  delBtn.className = "delete-trans";
  delBtn.innerHTML =
    '<i class="fa-solid fa-trash" style="color: #323232;"></i>';
  
  transactionItemEl.appendChild(descEl);
  transactionItemEl.appendChild(amountEl);
  transactionItemEl.appendChild(editBtn);
  transactionItemEl.appendChild(delBtn);
 
  const transactionListEl = document.getElementById("transaction-list");
  transactionListEl.prepend(transactionItemEl);
}


//function to delete a particular transaction
function deleteTransaction() {
  
}

function updateBalance(trans) {
  
  if (trans.type === "Income") {
    balance += parseFloat(trans.amount);
  } else if (trans.type === "Expense") {
    balance -= parseFloat(trans.amount);
  }

  const balanceEl = document.querySelector(".amount");
  balanceEl.innerText = balance.toFixed(2);
  if (balance < 0)
    balanceEl.classList.add("negative-balance");
  else
    balanceEl.classList.remove("negative-balance");

}
//function to update the transaction list and balance display on the webpage



 
//   deleteEl.addEventListener("click" ,deleteTransaction)
// function deleteTransaction(event){

// }
