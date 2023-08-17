function showDate(){
    var todate = new Date() ;
    document.getElementById('date').innerText=todate.toDateString()       
}
showDate()
function showTime(){
    var time = new Date;
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var a = "AM";
    if (hour == 0){
        hour = 12;
    }else if (hour > 12 ){
     a = "PM";
     hour = hour - 12 ;
    }else if (hour < 10 ){
       hour = "0" + hour;

    }else if (min < 10){
        min = "0" + min
    }else if (min < 10){
        sec = "0" + sec
    }

    var clocktime = hour + " " + ":" + " " + min + " " + ":" + " " + sec + " " + ":" + " " + a ;
    console.log(clocktime)
    document.getElementById('time').innerText=clocktime;
}




var IntervalRef ;
function start(){
    IntervalRef = setInterval(showTime, 1000)
}
function stopinterval(){
    clearInterval(IntervalRef);
    document.getElementById('para').innerText="After stop Refresh page to start again";
}