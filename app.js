window.onload = function () {

    var min = 00;
    var sec = 00;
    var msec = 00;

    var appendMin = document.getElementById("min");
    var appendSec = document.getElementById("sec");
    var appendMsec = document.getElementById("msec");
    var startButton = document.getElementById("button-start");
    var stopButton = document.getElementById("button-stop");
    var resetButton = document.getElementById("button-reset");
    var Interval


    startButton.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = function () {
        clearInterval(Interval);
    }

    resetButton.onclick = function () {
        clearInterval(Interval);
        msec = "00";
        sec = "00";
        min = "00";
        appendMsec.innerHTML = msec;
        appendSec.innerHTML = sec;
        appendMin.innerHTML = min;
    }

    function startTimer (){
        msec++;

        if(msec <= 9){
            appendMsec.innerHTML = "0"+ msec
        }
        
        if(msec > 9){
            appendMsec.innerHTML = msec;
        }

        if(msec > 99){
            sec++;
            appendSec.innerHTML = "0"+ sec;
            msec = 0;
            appendMsec.innerHTML = "0"+0;
        }
        if(sec > 9 ){
            appendSec.innerHTML = sec;
        }

        if(sec > 60){
            min++;
            appendMin.innerHTML = "0"+ min;
            sec = 0;
            appendSec.innerHTML = "0"+ 0;
        }
        if(min > 60){
            appendMin.innerHTML = min;
        }
    }
}