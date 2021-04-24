function validateContact(){
    var uname = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var namechecker = /^[A-Za-z. ]{3,30}$/;
    var emailchecker = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var phonechecker = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    var messagechecker = /^[a-zA-Z0-9~!@#$%^&*()`\[\]{};':,./<>?| ]*$/;

    if (namechecker.test(uname)) {
        document.getElementById('nameerr').innerHTML = "";
    } else {
        document.getElementById('nameerr').innerHTML = "*Invalid name";
        return false;
    }

    if (emailchecker.test(email)) {
        document.getElementById('emailerr').innerHTML = "";
    } else {
        document.getElementById('emailerr').innerHTML = "*Invalid email";
        return false;
    }

    if (phonechecker.test(phone)) {
        document.getElementById('phoneerr').innerHTML = "";
    } else {
        document.getElementById('phoneerr').innerHTML = "*Invalid phone";
        return false;
    }

    if (messagechecker.test(message)) {
        document.getElementById('msgerr').innerHTML = "";
    } else {
        document.getElementById('msgerr').innerHTML = "*Invalid message format";
        return false;
    }
}