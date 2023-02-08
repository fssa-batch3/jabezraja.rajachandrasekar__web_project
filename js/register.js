const Registered = e =>{
    e.preventDefault();
     let name = document.getElementById("name").value,
      phonenumber = document.getElementById("phonenumber").value,
      email = document.getElementById("email").value,
      password = document.getElementById("password").value,
      confirm_password = document.getElementById("confirm_password").value;

     // Parshing  the JSON
     let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
     let exist = user_list.length &&
     JSON.parse(localStorage.getItem('user_list')).some(data =>
     data.email.toLowerCase()== email.toLowerCase() ||
     data.phonenumber.toLowerCase() == phonenumber.toLowerCase());

     if(!exist){
        user_list.push({name, phonenumber, email, password, confirm_password});
        localStorage.setItem('user_list', JSON.stringify(user_list));
        console.log(localStorage.getItem('user_list'));
        document.querySelector('form').reset();
        document.getElementById('email').focus();
        alert('Account created Successfully');
        location.href = "../../index.html";
     }
     else{
        alert('Sorry the User already Exist!! \n Try with different Phone number or email');
        document.querySelector('form').reset();
    }
     
}
// for sign in()
function login(e){
    e.preventDefault();
    let email = document.getElementById('email').value,
        password = document.getElementById('password').value;    
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
    JSON.parse(localStorage.getItem('user_list')).some(data =>
         data.email.toLowerCase() == email && 
         data.password.toLowerCase() == password);
         
    if(exist){
        alert("Your login in successful");
        location.href = "../../index.html";
    }
    else{
        alert("Incorrect login credentials");

    }
}