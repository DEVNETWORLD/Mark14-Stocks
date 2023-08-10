var initialPrice = document.querySelector("#initial-prc");
var stockQty = document.querySelector("#stock-qty");
var currentPrice = document.querySelector("#current-prc");
var checkButton = document.querySelector("#check-btn");
var showOutput = document.querySelector("#output");


checkButton.addEventListener('click' , clickHandler)
 
function clickHandler(int,quant,curr){
    var int = Number(initialPrice.value);
  
    var quant = Number(stockQty.value);

    var curr = Number(currentPrice.value);

    calculateProfitAndLose(int,quant,curr);
}

function calculateProfitAndLose(initial, qty, current)
{
    if(initial > current){
        var loss= (initial-current)*qty;
        var lossPercentage = (loss / initial)*100;
        showOutput.style.color=  "#f50a16"
        showMessage("Your loss is "+ loss.toFixed(2) +" and your loss percentage is "+lossPercentage.toFixed(2)+"%")

    }
    else  if(initial < current){
        var profit = (current-initial)*qty;
        var profitPercentage = (profit / initial)*100
        showOutput.style.color = "#26c40e"
        showMessage("Your profit is "+ profit.toFixed(2) +" and your profit percentage is "+profitPercentage.toFixed(2)+"%")

    }
    else {
        showOutput.style.color= "#FBBF24"
        showMessage("No results yet, have patience!!!");
    }
  
    errorHandler();
}
function showMessage(message){
    showOutput.innerHTML= message;
    
}
function errorHandler()
{
    let p = initialPrice.value;
    let q =stockQty.value;
   let r = currentPrice.value;
   let message= "please fill out all fields";
   if (p === ''){
    showMessage(message);
   }
   if (q === ''){
    showMessage(message);
   }
   if (r === ''){
    showMessage(message);
   }
   if(p < 0|| q < 0 || r < 0){
    showMessage("Plz enter valid values");
   }
   
   
}