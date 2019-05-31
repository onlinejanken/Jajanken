let player = {};
player.name = document.getElementById('username');
let roomId = document.getElementById('roomId');
window.onload = countDown;

function countDown(){
    let count = 10;
    let id =  setInterval(function(){
        count--;
        document.getElementById('timer').textContent= 'あと' + count + '秒';
        if(count <= 0){
            clearInterval(id);
        }
    },1000);
}

function rock(){
    player.hand = 0;
    console.log(player);
}

function paper(){
    player.hand = 1;
    console.log(player);
}

function scissors(){
    player.hand = 2;
    console.log(player);
}