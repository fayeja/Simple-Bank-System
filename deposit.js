document.getElementById("btn-deposit").addEventListener('click',function(){
    // take deposit tk
    const depositField =document.getElementById('deposit-field');
    const depositField2= depositField.value;
    const depositField3=parseFloat(depositField2);
    
    if(isNaN(depositField3)){
        alert('Please enter a number!!!');
        depositField.value='';
        return;
    }

    // take total deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotal2=depositTotal.innerText;
    let depositTotal3=parseFloat(depositTotal2);
 
    // total deposit
    depositTotal3=depositTotal3+depositField3; 
    // print deposit
    depositTotal.innerText=depositTotal3;
    
    // take total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotal2=balanceTotal.innerText;
    let balanceTotal3=parseFloat(balanceTotal2);
 
     // total balance
     balanceTotal3=balanceTotal3+depositField3; 
     // print balance
     balanceTotal.innerText=balanceTotal3;

    depositField.value='';

})