const bgImage=document.querySelector('.bg')
const loader=document.querySelector('.loader')


let currentLoader=0
let int =setInterval(update,30)
function update()
{
    currentLoader++;

    if(currentLoader>99)
    {
        clearInterval(int)
    }

    loader.textContent=`${currentLoader}%`
    loader.style.opacity=`${mappingNumberRanges(currentLoader,0,100,1,0)}`
    bgImage.style.filter=`blur(${mappingNumberRanges(currentLoader,0,100,30,0)}px)`

}

// Mapping a range of numbers to another range of numbers
function mappingNumberRanges (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}