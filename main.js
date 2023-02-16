const colors=["green","red","blue","#777","#000","rgb(0,188,255)"]
const btn=document.getElementById("bttn");
const color=document.querySelector('.color');
btn.addEventListener('click',function(){
    const randomnum=getrandomnumber();
    document.body.style.backgroundColor=colors[randomnum];
    color.textContent=colors[randomnum];
});
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}