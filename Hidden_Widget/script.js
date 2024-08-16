const btnOp=document.querySelector('.btn');
const inputField=document.querySelector('.input')

btnOp.addEventListener('click',function(){
    if(inputField.classList.contains('active'))
    {
        inputField.classList.remove('active')
    }
    else{
        inputField.classList.add('active')
    }
    btnOp.style.transform='translateX(0%)'
})