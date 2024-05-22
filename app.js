let day = document.querySelector('.days'),
    hour = document.querySelector('.hours'),
    minut = document.querySelector('.minuts'),
    second = document.querySelector('.seconds');

const deadline = new Date("1 June 2024 23:55:00") ;

function updateDate () {
    let nowDate = new Date() ;
    let diff = deadline - nowDate 
    console.log(diff);
    let d = Math.floor(diff / 1000 / 60 / 60 / 24) ,
        h = Math.floor(diff / 1000 / 60 / 60 % 24) ,
        m = Math.floor(diff / 1000 / 60 % 60) ,
        s = Math.floor(diff / 1000 % 60) ;
        console.log(d,h,m,s);
    
    day.innerHTML = d < 10 ? '0' + d : d ;
    hour.innerHTML = h < 10 ? '0' + h : h ;
    minut.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(() => {
    updateDate() ;
} , 1000)