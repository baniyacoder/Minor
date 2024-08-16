const container=document.querySelector('.container')
const panelList=document.querySelectorAll('.panel')


container.addEventListener('click',function(event){
    const currSelectedTarget=event.target;
    if(currSelectedTarget.classList.contains('panel'))
    {
        panelList.forEach((panel)=>{
            panel.classList.remove('active')
        })
        currSelectedTarget.classList.add('active');
    }
})