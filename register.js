function register(event){
    event.preventDefault(); // Prevent the form from submitting

    let accDetails = {
        username:document.getElementById('username').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    };

//check working
console.log(accDetails);

//check if account number is already exist in local storage 
if (localStorage.getItem(accDetails.email)){
    alert("Sorry, this account is already exists");

    //clear input field addded optional
    document.getElementById('username').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
}
else{
    // store username in local storage
    localStorage.setItem('username',accDetails.username);
    
    localStorage.setItem(accDetails.email, JSON.stringify    (accDetails));
    alert(`Registration Successfull`);
    window.location='./login.html'
}
}
//Attach register function to the form submission
document.getElementById('registerForm').addEventListener("submit",register);