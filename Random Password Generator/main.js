var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.\';:+=^*_-0123456789';
        let output = document.getElementById("pass1");

        function randomValue(value){
            return Math.floor(Math.random()*value);
        }

        function genPassword(){
            let length = document.getElementById('length').value;
            document.getElementById("length-val").textContent = length;
            let str = '';

            for(let i=0; i<=length ; i++){
                let random = randomValue(characters.length);
                str += characters.charAt(random);
            }
            output.value = str;
            console.log(str)

            if (length>9) {
                document.getElementById("length-val").style.color = "#0dae01";
            }
            if (length>18){
                document.getElementById("length-val").style.color = "#0dd301";
            }
            if(length>25){
                document.getElementById("length-val").style.color = "#0df601";
            }
        }

        function copykarbc(){
            output.select();
            document.execCommand('copy');
            // alert("Password Copied!");
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
