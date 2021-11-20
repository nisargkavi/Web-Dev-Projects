function play() {
        var url = document.getElementById('url').value;
        url = url.replace("https://youtu.be/","https://www.youtube.com/embed/");
        console.log(url)
        url = url.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
        console.log(url)
        var iframe = document.getElementById('iframe');
        var src = document.createAttribute("src");
        src.value = url;
        iframe.setAttributeNode(src);
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
