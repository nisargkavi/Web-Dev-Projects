window.onkeypress = (e) => {
    document.getElementById('kp').style.display = 'none'
    document.getElementById('whichkey').innerText= e.code;
    document.getElementById('key').innerText = e.key
    document.getElementById('which').innerText = e.which
    document.getElementById('code').innerText = e.code
}
