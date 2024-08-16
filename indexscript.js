
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
