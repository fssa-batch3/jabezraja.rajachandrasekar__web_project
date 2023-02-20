const Registered = e =>{
    e.preventDefault();
     let name = document.getElementById("name").value,
      phonenumber = document.getElementById("phonenumber").value,
      email = document.getElementById("email").value,
      password = document.getElementById("password").value,
      confirm_password = document.getElementById("confirm_password").value,
      user_uniqueId = uuidv4();
     // Parshing  the JSON
     let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
     let exist = user_list.length &&
     JSON.parse(localStorage.getItem('user_list')).some(data =>
     data.email.toLowerCase()== email.toLowerCase() ||
     data.phonenumber.toLowerCase() == phonenumber.toLowerCase());
    
     if (password != confirm_password){
       return alert("password and confirm_password is not match")
     }
     if(!exist){
        user_list.push({"name":name,"phonenumber":phonenumber,"email":email, password, confirm_password,user_uniqueId});
        localStorage.setItem('user_list', JSON.stringify(user_list));
        localStorage.setItem("user_data", JSON.stringify(email));
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
// for login()
function login(e){
    
    let email = document.getElementById('email').value,
        password = document.getElementById('password').value;    
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
    JSON.parse(localStorage.getItem('user_list')).some(data =>
         data.email.toLowerCase() == email.toLowerCase() && 
         data.password.toLowerCase() == password.toLowerCase());
         
    if(exist){
        alert("Your login is successful");
        location.href = "../../index.html";
        localStorage.setItem("user_data", JSON.stringify(email));
    }
    else{
        alert("Incorrect login credentials");
    }
    e.preventDefault();
}