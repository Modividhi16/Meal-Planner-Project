   document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.querySelector('#signUpForm');
    const signInForm = document.querySelector('#signInForm');

    document.querySelector('#linkCreateAccount').addEventListener('click' , (event) => {
      event.preventDefault();
      signInForm.classList.add("form-hidden");
      signUpForm.classList.remove("form-hidden");
    })

    document.querySelector('#linkLogin').addEventListener('click' , (event) => {
      event.preventDefault();
      signInForm.classList.remove("form-hidden");
      signUpForm.classList.add("form-hidden");
    })

   })  
   
    //SignUp form    
     signUpForm.addEventListener('submit' , function(event){
     event.preventDefault();
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
 
 
     if(name && email && password){
        
        if(password.length < 8){
            document.getElementById('password-error').textContent = "Password must be 8 character long";
            return;
        }
        const hasNumber = /\d/; // Regular expression to match at least one digit
        if (!hasNumber.test(password)) {
        document.getElementById('password-error').textContent = "Password must contain at least one number!";
        return;
      }
        window.location.href = 'meal_planner.html';
     }
     })

     //signIn form 
     signInForm.addEventListener('submit' , function(event){
      event.preventDefault();
      console.log("inside signinform")
      const signInEmail = document.getElementById('signInEmail').value;
      const signInPassword = document.getElementById('signInPassword').value;
  

  
      if( signInEmail && signInPassword){         
         if(signInPassword.length < 8){
             document.getElementById('error-password').textContent = "Password must be 8 character long";
             return;
         }
         const hasNumber = /\d/; // Regular expression to match at least one digit
         if (!hasNumber.test(signInPassword)) {
         document.getElementById('error-password').textContent = "Password must contain at least one number!";
         return;
       }
         window.location.href = 'meal_planner.html';
      }
      })