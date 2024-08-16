const progressConainer=document.querySelector('progress_steps')
const progressBar=document.getElementById('progress')
const nextButton=document.getElementById('next')
const prevButton=document.getElementById('prev')
const numberList=document.querySelectorAll('.number');


let currentActive=1;

nextButton.addEventListener('click',function(event){
    
    currentActive++;
    if(currentActive>=numberList.length)currentActive=numberList.length
    update()

    
    
})

prevButton.addEventListener('click',function(event){
    currentActive--;
    if(currentActive<=1)currentActive=1;
   update()
})

function update(){
    numberList.forEach((number,idx)=>{
        if(idx<=currentActive-1)
        {
            number.classList.add('active');
        }
        else{
            number.classList.remove('active')
        }
    })

    progressBar.style.width=`${((currentActive-1)/(numberList.length-1))*100}%`

    if(currentActive===1)
    {
        prevButton.disabled=true;
    }
    else if(currentActive===numberList.length)
    {
        nextButton.disabled=true;
    }
    else 
    {
        prevButton.disabled=false;
        nextButton.disabled=false;
    }
}