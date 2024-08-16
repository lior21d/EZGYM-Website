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




const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const body = document.getElementById('bodytext');

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


const validateInputs = () => {
    const nameValue = name.value.trim()
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const bodyValue = bodytext.value.trim();

   var nameFlag = false;
   var emailFlag = false;
   var subjectFlag = false;
   var bodyFlag = false;

    if(nameValue === '') {
        setError(name, 'Name is required');
    }
    else {
        setSuccess(name);
        nameFlag = true;
    }


    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        emailFlag = true
    }

    if(subjectValue === '') {
        setError(subject, 'Subject is required');
    }
    else {
        setSuccess(subject);
        subjectFlag = true;
    }

    if(bodyValue === '') {
        setError(bodytext, 'Body is required');
    }
    else {
        setSuccess(bodytext);
        bodyFlag = true;
    }

    if(nameFlag && emailFlag && subjectFlag && bodyFlag)
    {
        return true;
    }
    else {
        return false;
    }
};
