

// for registeration 
// todo - needed work
function validate() {
    var uname = document.getElementById("fullName").value;
    var email = document.getElementById("registerEmail").value;
    var phone = document.getElementById("phoneNo").value;
    var pass = document.getElementById("registerPassword").value;

    var namechecker = /^[A-Za-z. ]{3,30}$/;
    var emailchecker = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var phonechecker = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    var passchecker = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (namechecker.test(uname)) {
        document.getElementById('nameerr').innerHTML = "";
    } else {
        document.getElementById('nameerr').innerHTML = "*Invalid name";
        return false;
    }

    if (phonechecker.test(phone)) {
        document.getElementById('phoneerr').innerHTML = "";
    } else {
        document.getElementById('phoneerr').innerHTML = "*Invalid number";
        return false;
    }

    if (emailchecker.test(email)) {
        document.getElementById('emailerr').innerHTML = "";
    } else {
        document.getElementById('emailerr').innerHTML = "*Invalid email";
        return false;
    }

    if (passchecker.test(pass)) {
        document.getElementById('passerr').innerHTML = "";
    } else {
        document.getElementById('passerr').innerHTML = "*Invalid password";
        return false;
    }
}

//Login page validation using AJAX
var btnClicked = function (){
        
    console.log('Btn Fired');
    
    var http =new XMLHttpRequest();
    var data  = 
    {
        'email': document.getElementById('loginEmail').value, 
        'password': document.getElementById('loginPassword').value
    };
    http.open('post', 'http://localhost:3000/login');
    http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log('request initialized')
    http.send("email=" + data.email + "&password=" + data.password);
    console.log('request sent')
    http.onreadystatechange = function(ev){
        console.log(http.readyState);
    }
    http.onloadend = function (ev){
        console.log('Load ended');
        console.log(http.responseText);
        if(http.responseText == 'invalid'){
            document.getElementById('invalidDiv').style.setProperty('display', 'block');
        } else {
            window.open(http.responseText,"_self");
        }
    }
}