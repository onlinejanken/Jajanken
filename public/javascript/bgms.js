//読み込み時に音楽を流す
window.onload = function() {
    let bgm = new Audio();
    bgm.src = '/public/bgm/maoudamashii_menu.mp3';
    bgm.play();
    bgm.loop = true;
};