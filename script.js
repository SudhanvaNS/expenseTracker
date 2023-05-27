var transaction=[];
let object ={
  description: "expense for college" ,
  amount: 2000,
  type: "expense"
}
const formEl=document.getElementById("transaction-form");
const amountEl=document.getElementById("amount");
const descriptionEl=document.getElementById("description");
const typeEl=document.getElementById("type");
formEl.addEventListener("submit" ,function(event){
  event.preventDefault();
  const desc=descriptionEl.value;
  const amount=amountEl.value;
  const type=typeEl.value;
  const obj=new Object(desc,amount,type);
  console.log(obj);
});
// program to append an object to an array
insertObject(transaction, object);
function insertObject(arr, obj) {

  // find the last index
   let index = arr.length;

   // appending object to end of array
   arr.splice(index, 0, object);
   
}
//object constructor
function Object(desc,amount,type){
    this.desc=desc;
    this.amount=amount;
    this.type=type;
}

// original arra

// object to add

// call the function
