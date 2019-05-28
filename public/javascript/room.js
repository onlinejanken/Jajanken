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