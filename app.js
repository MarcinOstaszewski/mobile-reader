window.addEventListener('DOMContentLoaded', ()=> {
    let wIW, wIH;

    let textarea = document.getElementById('textarea');
    let windowSize = document.getElementById('window-size');

    let changeWindowSize = () => {
        wIW = window.innerWidth;
        wIH = window.innerHeight;
        windowSize.innerText = 'Width: ' + wIW + ' Height: ' + wIH;
        textarea.style.width = Math.floor(wIW - 15) + 'px';
        textarea.style.height = Math.floor(wIH - 45) + 'px';
    }
    window.onresize = () => changeWindowSize();
    changeWindowSize();

})