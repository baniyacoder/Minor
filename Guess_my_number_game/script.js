'use strict'

// console.log(document.querySelector('.tag-display').textContent);

// console.log(current_score)
let highScore=Number(document.querySelector('.highScore').textContent)
let correctRandomNumber=Math.floor(Math.random()*20)+1;
console.log(correctRandomNumber)
// console.log(correctRandomNumber)
document.querySelector('.section-check-button').addEventListener('click',function(){
    const guessedNumber=Number(document.querySelector('.guess-number').value)
    // console.log(guessedNumber)
    let current_score=Number(document.querySelector('.score').textContent)

        
            if(guessedNumber>correctRandomNumber)
                {
                    // console.log(current_Score)
                    document.querySelector('.tag-display').textContent="Too High!!!";
                    current_score--;
                    if(current_score<1)
                        {
                            document.querySelector('.tag-display').textContent="You Lost the Game!!"
                            document.querySelector('.score').textContent=0;
                            current_score=0;
                        }
                        else
                        {
                            document.querySelector('.score').textContent=current_score;
                        }
                }
            else if(guessedNumber<correctRandomNumber)
                {
                    document.querySelector('.tag-display').textContent="Too Low!!!"
                    current_score--;
                    if(current_score<1)
                        {
                            document.querySelector('.tag-display').textContent="You Lost the Game!!"
                            document.querySelector('.score').textContent=0;
                            current_score=0;
                        }
                        else
                        {
                            document.querySelector('.score').textContent=current_score;
                        }
                }
                else{
                    document.querySelector('.tag-display').textContent="Correct Number!!!"
                    document.querySelector('.header-number').textContent=guessedNumber;
                    document.body.style.backgroundColor="#4a0747"
                    if(current_score>highScore)
                        {
                            document.querySelector('.highScore').textContent=current_score;
                        }
                }
   
})

document.querySelector('.header-button-again').addEventListener('click',function(){
    document.querySelector('.header-number').textContent='?';
    document.querySelector('.score').textContent=20
    document.querySelector('.guess-number').value=' ';
    document.querySelector('.tag-display').textContent='Start Guessing. . .'
    correctRandomNumber=2*Math.floor(Math.random()*10);
    document.body.style.backgroundColor="#222"
})
