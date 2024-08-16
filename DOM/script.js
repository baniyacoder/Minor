
// insta like button

const cardele=document.querySelector('.card')
const heartele=document.querySelector('i')
cardele.addEventListener('dblclick',function(){
    heartele.style.transform='translate(-50%,-50%) scale(2)'
    heartele.style.opacity=0.6

    setTimeout(function(){
        heartele.style.transform='translate(-50%,-50%) scale(0)'
        heartele.style.opacity=0
    },1000)
})


// Cursor code 

const main=document.querySelector('.custom_cursor');
const crsr=document.querySelector('.cursor');
main.addEventListener('mousemove',function(mousemove_variable){
    crsr.style.left=`${mousemove_variable.x}px`
    crsr.style.top=`${mousemove_variable.y}px`
})


// Multiple Image Hover animation

const elem=document.querySelectorAll('.elem')

elem.forEach(function(Ele){
    
    const elemImg=Ele.querySelector('.elem img')
    Ele.addEventListener('mousemove',function(){
    elemImg.style.transform='scale(5)'
})

    Ele.addEventListener('mouseleave',function(){
    elemImg.style.transform='scale(0)'

})

    Ele.addEventListener('mouseenter',function(){
    elemImg.style.opacity=1;
})

})


