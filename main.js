const colors=["green","red","blue","#777","#51DDE2","#6DE7EB","#A7A296"]
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