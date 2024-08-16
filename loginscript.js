const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

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

const isValidPassword = password => {
    return /[A-Z]/       .test(password) &&
    /[a-z]/       .test(password) &&
    /[0-9]/       .test(password);

};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    var flagpass = false;
    var flaguser = false;

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    else if(usernameValue.length < 2 || usernameValue.length > 12)
    {
        setError(username, 'Username must be between 2-12 characters')
    }
    else {
        setSuccess(username);
        flaguser = true;
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
        flagpass = true;
    }




    if(flagpass && flaguser)
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


