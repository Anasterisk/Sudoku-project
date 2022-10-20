//menu buttons
let difficulty = document.querySelectorAll('input[name="difficulty"]')
let timeToggle = document.querySelector('#timeToggle')
let startbutton = document.querySelector('#start')
let toggle = document.querySelector('.toggle')
let time = false
let start = false
//timer variables
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timer = document.querySelector('.timer')
let int =null

//game logic variables
let input= document.querySelectorAll(".input")
let holding = document.querySelector(".holding")
let boardSquare = document.querySelectorAll('.bl')
let identifier = null
//win switch
let completed   = false
let boardBalance   = 0

//shortcut fill//
let skip = document.querySelector(".skip")
let quickFill =[
    1,2,3,9,7,8,5,6,4,
    4,5,6,3,1,2,8,9,7,
    7,8,9,6,4,5,2,3,1,
    3,1,2,8,9,7,4,5,6,
    6,4,5,2,3,1,7,8,9,
    9,7,8,5,6,4,1,2,3,
    2,3,1,7,8,9,6,4,5,
    5,6,4,1,2,3,9,7,8,
    8,9,7,4,5,6,3,1,2,]
//inhibitor check variables
let legalMove   = false
let checkSq     = null
let checkRow    = null
let checkCol    = null

//cpu variables//
const resetBoard =[
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
]
let cpuBoard= [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
]
let cpuInput = NaN
let cpuRw= NaN
let cpuRwI = NaN
let cpuAttempt = NaN
let cpuInputPool = [1,2,3,4,5,6,7,8,9]
let cpuBoardRange = null
let cpuMinsq    = null
let setDifficulty = null
    // settings//
const settingTimer =()=>{
    console.log("checking")
    if( timeToggle.checked === false){
        toggle.style.display ="none"
        console.log("unchecked")
        time = false
        timer.style.display="inline-flex"
        timer.style.color  ="gray" 
    }else{
        toggle.style.display ="none"
        timer.style.display ="inline-flex"
        time = true
        console.log("click")
        console.log(timeToggle.checked=true)
    }
}

// game timer// 
//https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html 
    // starting function//
 const startTimer=()=> {
    console.log("timer checks")
    if(time === false){
        return
    }else if (completed===true){
        console.log("halted")
        return
    }else if (int!== null){
        clearInterval(int)
        console.log("clear interval")
    }
    int = setInterval(clocking,1000)
    console.log("time running")
 }
    // stoping function//
const stopTimer =()=>{
    clearInterval(int)
}
    // resetting time//
const resetTimer=()=>{
    clearInterval(int)
    [seconds,minutes,hours]= [0,0,0];
    timer.innerHTML ="00:00:00"
}
    // timer innards//
const clocking=()=>{
        seconds ++
        if( seconds == 60){
            seconds = 0
            minutes++
            if(minutes == 60){
                minutes = 0
                hours ++
        }
    }
    let h = hours <10   ?"0"+hours: hours
    let m = minutes <10 ?"0"+minutes: minutes
    let s = seconds <10 ?"0"+seconds: seconds
    return timer.innerHTML=`${h}:${m}:${s}`
}

// selecting input value//
for (let i=0; i<input.length; i++){
    input[i].addEventListener('click',()=>{
        if(start === false){
            console.log(`start check ${start}`)
            return
        }else{
        playingValue = input[i].innerText
        holding.setAttribute('id', input[i].value) 
        console.log("inputfunct running")
    }})
    }

const resetStates =()=>{
    legalMove   = false
    checkSq     = null
    checkRow    = null
    checkCol    = null
    identifier  = null
}

//// game halting functions //// 
const boardCal = (x)=>{
    y = parseInt(identifier) || 0
    console.log(y)
    x = parseInt(holding.id) || 0
    console.log(x)
    return boardBalance+=x- y
}

const completionCheck =()=>{ 
    if(boardBalance===405){
        completed = true
        stopTimer()
    }
}

//// inhibitor check functioning////
const inhibitorCheck=()=>{
        for(let k=0; k<9;k++){
    if( checkSq[k].innerHTML === holding.id ||
        checkRow[k].innerHTML === holding.id||     
        checkCol[k].innerHTML === holding.id){
        legalMove = false 
        return     
    }else{
        legalMove = true
        }
    }
}
///Game Settings///
startbutton.addEventListener('click', ()=>{
    settingTimer()
    start = true
    console.log(start)
})

////Game logic////
for(let i = 0; i<boardSquare.length; i++){ 
    boardSquare[i].addEventListener('click',function(e){
        identifier = boardSquare[i].innerHTML
        completionCheck()
    if (completed=== true){
        return
    } else if (holding.id === ""){
        boardSquare[i].innerHTML = holding.id
    }else if ( legalMove === false){
            //establishing board check variables//
        checkSq = document.querySelectorAll(`.${e.target.classList[1]}`)
        checkRow= document.querySelectorAll(`.${e.target.classList[2]}`)
        checkCol= document.querySelectorAll(`.${e.target.classList[3]}`)
        inhibitorCheck();
            if (legalMove === true){ 
                boardCal();
                boardSquare[i].innerHTML=holding.id
                startTimer()
                resetStates()
                completionCheck()
                return
            }else if(legalMove === false) {
                resetStates()
                return
            }
        }
    }
)}

timer.addEventListener("click",()=>{
    stopTimer()
})
skip.addEventListener("click",()=> {
    for(let i=0; i<boardSquare.length; i++)
    boardSquare[i].innerHTML=quickFill[i]
    boardBalance = 405
    completionCheck()
})

//randomizer in-theworks//

const randomInput=(min,max)=>{
    min = Math.ceil(1)
    max = Math.floor(9)
    return Math.floor(Math.random()*(max-min+1)+min)
} 

const cpuPickRw =(min,max)=>{
    min = Math.ceil(1)
    max = Math.floor(cpuBoard[randomInput()-1].length)
    cpuRw = Math.floor(Math.random()*(max-min+1)+min) 
}
cpuPickRw()
const cpuPickRwI =(min,max)=>{
    min = Math.ceil(1)
    max = Math.floor(cpuBoard[cpuRw-1].length)
    cpuRwI = Math.floor(Math.random()*(max-min+1)+min) 
}
const cpuPlayInput =()=>{
    min=Math.ceil(1)
    max=Math.floor(cpuInputPool.length)
    cpuInput = Math.floor(Math.random()*(max-min+1)+min)
}

console.log(cpuRw)
cpuPickRwI()
console.log(cpuRwI)
const autoPopulate =()=>{
    let balance = 0
    let run     = 0
    while(balance < cpuBoardRange && run < cpuMinsq){
        cpuAttempt = randomInput()
        for(let i =0; i< cpuAttempt;){
            cpuPlayInput()
            cpuPickRw()
            cpuPickRwI()
        }

    }

}

const cpuParameter=()=>{
    if (setDifficulty === "easy"){
        cpuBoardRange   = 135
        cpuMinsq        = 40
}else if (setDifficulty === "medium"){
        cpuBoardRange   = 108
        cpuMinsq        = 30
}else if (setDifficulty === `hard`){
        cpuBoardRange   = 87
        cpuMinsq        = 25
    }
}

const changingDiff=()=>{
    for(let set of difficulty){
        if (set.checked){
         setDifficulty = set.id
    }}
    cpuParameter()

}
const test=()=>{
    console.log(setDifficulty)
}
//save for later reference
// identifying the class list
//boardSquare[j].classList[1]+ boardSquare[j].classList[2]+ boardSquare[j].classList[3]
// boardSquare[j].classList[i] && boardSquare[j].innerText
        //checking the clicked square's stats
//e.target.classList[i] 

//e.target.innerHTML

//VV how to compare classList 
//
//boardSquare[j].classList.contains(`${e.target.classList[1]}`)
//
//document.querySelectorAll(`.${e.target.classList[i]}`)[k].innerHTML
//^^ this code checks for all 27 spaces (region, row, and column) for it's innerHTML.

//winning board {
// 123978564,
// 456312897,
// 789645231,
// 312897456,
// 645231789,
// 978564123,
// 231789645,
// 564123978,
// 897456312,
// }