const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');


function check(){
   

    // If password not entered 
    if (password.value == '') 
        alert ("Please enter Password"); 
          
    // If confirm password not entered 
    else if (passwordConfirmation.value == '') 
        alert ("Please enter confirm password"); 
          
    // If Not same return False.     
    else if (password.value != passwordConfirmation.value) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        alert("Password Match: Welcome to Wizzidom!") 
        return true; 
    } 
} 
