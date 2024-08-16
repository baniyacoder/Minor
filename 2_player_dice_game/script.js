let holdScore=document.querySelectorAll('.current_score')
let currentScore=document.querySelectorAll('.hold_score')
let newGameButton=document.querySelector('.new_game_button')
let rollDiceButton=document.querySelector('.roll_dice_button')
let holdScoreButton=document.querySelector('.hold_button')
let gameConsole=document.querySelector('.game_card')
let displayImage=document.querySelector('.display_image')


const generateRandomDiceNumber=function(){
    return Math.floor(Math.random()*7)+1
}

// Dynamically add images to the curr dom element

const insertImage=function(curr_path){
    // const createImage=document.createElement('img');
    // createImage.src=curr_path
    // createImage.style.width='10rem'
    // createImage.style.height='10rem'
    // createImage.style.position='absolute'
    // createImage.style.top='45%'
    // createImage.style.left='50%'
    // createImage.style.transform='translate(-50%,-50%)'
    // document.querySelector('.game_card').appendChild(createImage)
    console.log(displayImage)
    displayImage.classList.remove('hidden')
    displayImage.src=curr_path
}

const switchPlayer=function(){
    document.querySelector(`.player_${currPlayer+1}`).classList.remove('active')
    currPlayer=currPlayer===0?1:0;
    document.querySelector(`.player_${currPlayer+1}`).classList.add('active')
}

let currentTotalScoreList=[0,0]
let currPlayer=0;

rollDiceButton.addEventListener('click',function(){
    let currentRandomNumber=generateRandomDiceNumber()
    switch(currentRandomNumber){
        case 1:
            insertImage('dice-1.png')
            break;
        case 2:
            insertImage('dice-2.png')
            break;
        case 3:
            insertImage('dice-3.png')
            break;
        case 4:
            insertImage('dice-4.png')
            break;
        case 5:
            insertImage('dice-5.png')
            break;
        case 6:
            insertImage('dice-6.png')
            break;
    }
    if(currentRandomNumber!==1){
        currentTotalScoreList[currPlayer]+=currentRandomNumber
        currentScore[currPlayer].textContent=currentTotalScoreList[currPlayer]
    }
    else{
        currentTotalScoreList[currPlayer]=0;
        currentScore[currPlayer].textContent=currentTotalScoreList[currPlayer]
        switchPlayer(currPlayer)
    }
})

let totalScoreList=[0,0];
holdScoreButton.addEventListener('click',function(){
    totalScoreList[currPlayer]+=currentTotalScoreList[currPlayer]
    if(totalScoreList[currPlayer]>=100){
        holdScore[currPlayer].textContent=totalScoreList[currPlayer]
        document.querySelector(`.player_${currPlayer+1}`).style.backgroundColor='black'
        gameConsole.style.opacity=1;
        rollDiceButton.disabled=true
        displayImage.classList.add('hidden')
        currentScore[currPlayer].textContent=0;
    }
    else{
        holdScore[currPlayer].textContent=totalScoreList[currPlayer]
        currentScore[currPlayer].textContent=0
        currentTotalScoreList[currPlayer]=0;
        switchPlayer(currPlayer)
    }

})

newGameButton.addEventListener('click',function(){
    currentTotalScoreList=[0,0]
    currentScore.forEach(function(currentScoreChild){
        currentScoreChild.textContent=0;
    })
    totalScoreList=[0,0]
    holdScore.forEach(function(holdScoreChild){
        holdScoreChild.textContent=0;
    })
    displayImage.classList.add('hidden')
})