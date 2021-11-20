    var count = 0;
    var value1 = document.getElementById("counter").value;
    var valuecolor = document.getElementById("counter");
    function increase1(){
        count++;
        value1 = count;
        document.getElementById("counter").textContent = value1;
        document.getElementById("counter").style.color = "green";
        console.log(value1)
    }
    function decrease1(){
        count--;
        value1 = count;
        document.getElementById("counter").textContent = value1;
        document.getElementById("counter").style.color = "red";
        console.log(value1)
    }
    function reset1(){
        count = 0;
        value1 = count;
        document.getElementById("counter").textContent = value1;
        document.getElementById("counter").style.color = "#222";
        console.log(value1)
    }

        document.onkeydown = function (e) {
            if (event.keycode == 123) {
                return false;
            }

            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                return false;

            }

            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                return false;

            }

            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                return false;
            }
        }
