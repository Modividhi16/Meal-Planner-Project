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



    //   function getValue() {
    //     const input = document.querySelector('.input');
    //     const inputValue = input.value.trim(); // Trim extra spaces
    //     const mealType = document.getElementById("meal_options").value; // Get selected meal type
    
    //     if (!inputValue) {
    //         alert("Please enter a meal name.");
    //         return;
    //     }
    
    //     if (!mealType || mealType === "mealType") {
    //         alert("Please select a meal type.");
    //         return;
    //     }
    
    //     // Get existing meals from localStorage or initialize an empty object
    //     let storedMeals = JSON.parse(localStorage.getItem('meals')) || { breakfast: [], lunch: [], dinner: [] };
    
    //     if (!storedMeals[mealType].includes(inputValue)) {  // Prevent duplicates
    //         storedMeals[mealType].push(inputValue);
    //         localStorage.setItem('meals', JSON.stringify(storedMeals)); // Save updated meals
    //     }
    
    //     // Retrieve the stored meal list for the selected type
    //     const mealValues = storedMeals[mealType];
    
    //     // Loop through each day of the week and add the meal to the corresponding dropdown
    //     const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    //     for (let day of days) {
    //         const dropdown = document.getElementById(`${mealType}_${day}`);
    //         if (dropdown) {
    //             mealValues.forEach(meal => {
    //                 const option = document.createElement("option");
    //                 option.textContent = meal;
    //                 dropdown.appendChild(option);
    //             });
    //         }
    //     }
    
    //     console.log(`Added ${inputValue} to ${mealType}`);
    //     input.value = ""; // Clear input field
    //     document.getElementById("addMealsForm").reset();
    
    // }