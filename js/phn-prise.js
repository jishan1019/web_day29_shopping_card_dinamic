function phnPriseInput(inCrease){
    const allInputFild = document.getElementById('phn-number-fild');
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
 
 function tvResultPrisePhn(newInputFildResult){
     const totalCasePrise = newInputFildResult * 1219 ;
     const caseTotalDisplay = document.getElementById('phn-total-display');
     caseTotalDisplay.innerText = totalCasePrise;
 }

document.getElementById('btn-phn-plus').addEventListener('click',function(){
    const newInputFildResult =  phnPriseInput(true);
    tvResultPrisePhn(newInputFildResult);

    subTotalPrise();

})

document.getElementById('btn-phn-minus').addEventListener('click', function(){
    const newInputFildResult = phnPriseInput(false);
    tvResultPrisePhn(newInputFildResult);

    subTotalPrise();
})
   