function allNumberInput(inCrease){
   const allInputFild = document.getElementById('case-number-fild');
   const allInputFildString = allInputFild.value;
   const allInputFildNumber = parseInt(allInputFildString);

   let newInputFildNumber;

   if(inCrease){
        newInputFildNumber = allInputFildNumber + 1;
   }else{
        newInputFildNumber = allInputFildNumber - 1;
        if(newInputFildNumber <= -1){
            return
        }
   }
   allInputFild.value = newInputFildNumber;
   
   return newInputFildNumber;
}

function tvResultPrise(newInputFildResult){
    const totalCasePrise = newInputFildResult * 59 ;
    const caseTotalDisplay = document.getElementById('case-total-display');
    caseTotalDisplay.innerText = totalCasePrise;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newInputFildResult =  allNumberInput(true);
    tvResultPrise(newInputFildResult);

    subTotalPrise();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newInputFildResult = allNumberInput(false);
    tvResultPrise(newInputFildResult);

    subTotalPrise();
})
   
    
    