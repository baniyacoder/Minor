const boxArr=document.querySelectorAll('.boxes');

window.addEventListener('scroll',checkBoxes)


function checkBoxes(){

    const triggerPoint=(window.innerHeight/2)
    boxArr.forEach((box)=>{
        const boxTop=box.getBoundingClientRect().top;

        if(boxTop<triggerPoint)
        {
            box.classList.add('show')
        }
        else
        {
            box.classList.remove('show')
        }
    })

}
