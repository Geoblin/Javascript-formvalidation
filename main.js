const form = document.querySelector("#form");
const button = form.querySelector("button");
const errorText = form.querySelector("#error");


button.addEventListener("click", function(event){
    event.preventDefault();

    //Firstname
    const inputFieldFname = form.querySelector("#firstname");
    const stringValueFname = inputFieldFname.value;
    const stringLengthFname = stringValueFname.length;
    const errorFname = form.querySelector("#fnameerror");
    if (stringLengthFname >= 2){
        errorFname.innerText = stringValueFname + " is good";
    } else{
        errorFname.innerText = stringValueFname + " is not good";
    }

    //Email
    const inputFieldEmail = form.querySelector("#email");
    const stringValueEmail = inputFieldEmail.value;
    const stringLengthEmail = stringValueEmail.length;
    const errorEmail = form.querySelector("#emailerror");

    if (stringLengthEmail >= 4 && stringValueEmail.includes("@")){
        errorEmail.innerText = stringValueEmail + " is good";
    } else{
        errorEmail.innerText = stringValueEmail + " is not good";
    }
    
    //Password
    const inputFieldPassword = form.querySelector("#password");
    const stringValuePassword = inputFieldPassword.value;
    const stringlengthPassword = stringValuePassword.length;
    const errorPassword = form.querySelector("#passworderror")

    if (stringlengthPassword >= 6){
        errorPassword.innerText = "Password good";
    } else{
        errorPassword.innerText = "Password to short or bad"
    }

    //repassword
    const inputFieldRepassword = form.querySelector("#repassword");
    const stringValuerePassword = inputFieldRepassword.value;
    const errorrepassword = form. querySelector("#repassworderror")

    if (stringValuePassword === stringValuerePassword){
        errorrepassword.innerText = "Password is good"
    } else {
        errorrepassword.innerText = "The passwords does not match up"
    }
});