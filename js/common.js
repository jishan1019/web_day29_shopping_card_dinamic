function subTotalPrise(){
    const AllPhnPriseElement = document.getElementById('phn-total-display');
    const AllPhnPriseString = AllPhnPriseElement.innerText;
    const AllPhnPrise = parseInt(AllPhnPriseString);

    const AllPCasePriseElement = document.getElementById('case-total-display');
    const AllCasePriseString = AllPCasePriseElement.innerText;
    const AllCasePrise = parseInt(AllCasePriseString);

    const subTotalPrise = AllPhnPrise + AllCasePrise;

    const SubTotalElement = document.getElementById('sub-total');
    const SubTotalString = SubTotalElement.innerText;
    const SubTotalDisplay = parseInt(SubTotalString);

    SubTotalElement.innerText = subTotalPrise;

    const TaxElement = document.getElementById('tax');
    const TaxString = TaxElement.innerText;
    const Tax = parseInt(TaxString);
    TaxElement.innerText = SubTotalDisplay * 0.1;


    const AllTotalDisplay = document.getElementById('all-total');
    const AllTotalString = AllTotalDisplay.innerText;
    const AllTotal = parseInt(AllTotalString);

    AllTotalDisplay.innerText = AllTotal + Tax;

}