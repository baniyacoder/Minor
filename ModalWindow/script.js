const showModalList=document.querySelectorAll('.show_modal');
const displayModal=document.querySelector('.modal')
const closeModal=document.querySelector('.close-modal')
const overlay=document.querySelector('.overlay')

showModalList.forEach(function(showModal){
    showModal.addEventListener('click',function(){
        displayModal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
})

closeModal.addEventListener('click',function(){
    displayModal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click',function(){
    overlay.classList.add('hidden')
    displayModal.classList.add('hidden')
})

document.addEventListener('keydown',function(event){
    console.log(event)
    if(event.key==='Escape' && !displayModal.classList.contains('hidden')){
        
        
            overlay.classList.add('hidden')
            displayModal.classList.add('hidden')
        
        
    }
})