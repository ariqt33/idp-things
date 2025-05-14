const loginForm = document.getElementById("login-form");
const loginButton= document.getElementById("login-form-submit");
const loginErrorMSG= document.getElementById("Login-error-msg");

loginButton.addEventListener("click"), (e) =>{
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (EmailAddress === "ali@gmail.com" && password === "DermaScope"){
        alert("You have successfully logged in.");
        location.reload();
    } else
    {
        loginErrorMSG.style.opacity =1;
    }
}
