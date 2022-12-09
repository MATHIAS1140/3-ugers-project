// hente elementer i var.
// addevelistener på knappen eller form - "click", function(event){event.preventdefault()}
// 
// seudo kode er en klade

const fName = document.querySelector("#fName")
const lName = document.querySelector("#lName")
const email = document.querySelector("#email")
const msg = document.querySelector("#msg")
const btn = document.querySelector("#btn")
const errorMsg = document.querySelector("#errorMsg")

btn.addEventListener("click", function(event){
    event.preventDefault();
    //hvis input/value, er tomt, så skal den udfylde det der står i {}
    if(fName.value == ""){
        errorMsg.innerHTML = "fornavnet mangler";
    }
    // det der står i () er et spørgsmål
    else if(lName.value == ""){
        errorMsg.innerHTML = "efternavnet mangler";
    }

    else if(email.value == ""){
        errorMsg.innerHTML = "email mangler";
    }

    else if(msg.value == ""){
        errorMsg.innerHTML = "besked mangler";
    }

    else{
        errorMsg.innerHTML = "du er godkendt";
        fName.value = "";
        lName.value = "";
        email.value = "";
        msg.value = "";
        
    }
})