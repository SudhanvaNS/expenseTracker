//variable to keep track of all transaction
var transaction=[];
const formEl=document.getElementById("transaction-form");
const amountEl=document.getElementById("amount");
const descriptionEl=document.getElementById("description");
const typeEl=document.getElementById("type");

// event Handling of submit button

formEl.addEventListener("submit" ,function(event){
  event.preventDefault();
  const desc=descriptionEl.value;
  const amount=amountEl.value;
  const type=typeEl.value;
  const obj=new Object(desc,amount,type);
  // append an object to an array
  transaction.push(obj);
  displayTrasactions();
});
//object constructor
function Object(desc,amount,type){
    this.desc=desc;
    this.amount=amount;
    this.type=type;
}

//funciotn to update the transaction list and balance display on the webpage