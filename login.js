document.getElementById('btn').addEventListener('click',function(){
   const email1=document.getElementById('email');
   const email2= email1.value;

   const password1=document.getElementById('password');
   const password2= password1.value;

   if(email2==='fayeja@gmail.com'&& password2==='fayeja'){
        window.location.href='Bank.html';
   }
   else{
        alert('Invalid User!!!');
   }
})