const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const country = document.getElementById('country');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', e => {
    if(!validateInputs())
    {
        e.preventDefault()
    }
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPassword = password => {
    return /[A-Z]/       .test(password) &&
    /[a-z]/       .test(password) &&
    /[0-9]/       .test(password);

};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const countryValue = country.value.trim();

    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    else if(usernameValue.length < 2 || usernameValue.length > 12)
    {
        setError(username, 'Username must be between 2-12 characters')
    }
    else {
        setSuccess(username);
        flag1 = true;
    }

    if(countryValue === '') {
        setError(country, 'Country is required');
    }
    else {
        setSuccess(country);
        flag5 = true;
    }


    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        flag2 = true
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    }
    else if(!isValidPassword(passwordValue))
    {
        setError(password, 'Password must contain one uppercase lowercase and number');
    }
    else {
        setSuccess(password);
        flag3 = true;
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        flag4 = true;
    }

    if(!checkbox.checked)
    {
        setError(checkbox, 'You must agree to the terms of service');
    }
    else
    {
        setSuccess(checkbox);
    }

    if(flag1 === true && flag2 === true && flag3 === true && flag4 === true && flag5 === true && checkbox.checked)
    {
        return true;
    }
    else {
        return false;
    }
};



function displayTime(){
    var d = new Date();
    var hour = d.getHours(); // 0-23
    var min = d.getMinutes(); // 0-59
    var sec = d.getSeconds(); // 0-59
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    if(hour < 10)
      hour = "0" + hour;
    if(min < 10)
      min = "0" + min;
    if(sec < 10)
      sec = "0" + sec;

    var day = d.getDay();
    var month = d.getMonth();
    

    var displayString = hour + ":" + min + ":" + sec;
    var displayDate = days[day] + " " + d.getDate() + " " + months[month] + " " + d.getFullYear();
    document.getElementById("clock").innerHTML = displayString;
    document.getElementById("date").innerHTML = displayDate;

  }
  setInterval(displayTime, 1000);


