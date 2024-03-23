const hour = document.getElementById('hours')
const minute = document.getElementById('minutes')
const second = document.getElementById('second')
const ampmEle = document.getElementById('am-pm')

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h > 12){
        h -= 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampmEle.innerText = ampm;

}
setInterval(()=>{
    clock()
},1000)