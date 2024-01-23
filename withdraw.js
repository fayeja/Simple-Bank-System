document.getElementById("btn-withdraw").addEventListener('click',function(){
    // take withdraw tk
    const withdrawField =document.getElementById('withdraw-field');
    const withdrawField2= withdrawField.value;
    const withdrawField3=parseFloat(withdrawField2);

    if(isNaN(withdrawField3)){
        alert('Please enter a number!!!');
        withdrawField.value='';
        return;
    }
    
    // field blank
    withdrawField.value='';
    
    // take total withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotal2=withdrawTotal.innerText;
    let withdrawTotal3=parseFloat(withdrawTotal2);

    
    // take total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotal2=balanceTotal.innerText;
    let balanceTotal3=parseFloat(balanceTotal2);
 
    // alert sms
    if(balanceTotal3<withdrawField3){
        alert("you don't have too much amount!!");
        return;
    }   
      // total withdraw
      withdrawTotal3=withdrawTotal3+withdrawField3; 
      // print withdraw
      withdrawTotal.innerText=withdrawTotal3;

     // total balance
     balanceTotal3=balanceTotal3-withdrawField3; 
     // print balance
     balanceTotal.innerText=balanceTotal3;

})