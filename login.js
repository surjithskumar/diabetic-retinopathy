    //Login functionality
    let login=document.getElementById('login');
    login.addEventListener('click',()=>{
        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;

        //checking local storage for account
        let accDetails=JSON.parse(localStorage.getItem(email));
        console.log(accDetails); //check working

        if (accDetails && accDetails.password === password) {
            alert(`${accDetails.username} Welcome to Diabetic Retinopathy Predictor`);
            window.location='./home.html';
        } else {
            alert("Invalid Email id or Password");
            document.getElementById('email').value="";
            document.getElementById('password').value="";
        }
    });