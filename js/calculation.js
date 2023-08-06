function getEelementByIDInnerText(id){
    const expenseInputField=document.getElementById(id);
    const innerTextString=expenseInputField.value;
    const innerText=parseFloat(innerTextString);
    expenseInputField.value='';
    return innerText;
}
document.getElementById('btn-calculator').addEventListener('click',function(){
    const forFood=getEelementByIDInnerText('food');
    const forRent=getEelementByIDInnerText('rent');
    const forCloth=getEelementByIDInnerText('Clothe');
    const income=getEelementByIDInnerText('income')

    const AllExpense=forFood+forRent+forCloth;
    const balanceNow=income-AllExpense;


    const expenseField=document.getElementById('total-expenses');
    const balanceField=document.getElementById('balance');

    
    if(isNaN(balanceNow && AllExpense)){
        alert('Enter number please');
        return;
    }
    else if(AllExpense>income){
        alert('Expense is bigger then your income');
        return;
    }
    else{
        // total expense
        expenseField.innerText=AllExpense;
    // After all expense the balance now
        balanceField.innerText=balanceNow;
    }

})

// saving
document.getElementById('save-btn').addEventListener('click',function(){
    // where to show
    const saveField=document.getElementById('saving');
    const Remaining=document.getElementById('remaining');
    // inputfield
    const InputField=getEelementByIDInnerText('save');
    // balance field
    const balanceField=document.getElementById('balance');
    const balanceString=balanceField.innerText;
    const balanceInnertext=parseFloat(balanceString);
    
    const inputFieldPercentageValue=InputField/100;
    const saving=balanceInnertext*inputFieldPercentageValue;

    const remainingBalance=balanceInnertext-saving;

    if(isNaN(saving && remainingBalance)){
        alert('Enter Number please');
        return;
    }
    else{
        saveField.innerText=saving.toFixed(2);
        Remaining.innerText=remainingBalance.toFixed(2);
    }

})