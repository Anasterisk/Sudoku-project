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
let ePreMade1= [
    3,'','',6,1,'','','',8,'','',2,'',3,'',7,6,'','','','',7,5,'',2,9,'','',9,'',8,'','','',1,'','',4,'',1,7,3,'',5,'','',5,'','','',9,'',2,'','',3,7,'',4,1,'','','','',2,5,'',8,'',9,'','',4,'','','',9,7,'','',2]
let    ePremade2=
    ['','','',1,8,'','','',7,'',3,'',2,'','',6,5,'',1,'',9,'','',5,4,'',8,4,'','',7,6,'',8,'',5,'',7,'','','','','',4,'',2,'',5,'',9,8,'','',6,3,'',1,6,'','',9,'',2,'',5,7,'','',4,'',6,'',6,'','','',3,1,'','','',]
let mPreMade1 =[
    '','',6,'','','','','','','','','','',2,'',8,'',6,3,1,'','',8,3,6,7,'',1,'','','',9,7,8,'','','','','',5,'',8,'','','','','',7,1,6,'','','',9,'',4,'',6,'',5,3,'','',7,5,1,'',3,'',4,'','','','','','','','',7,'','',]
let mPreMade2  = [
    1,4,'',5,'',6,3,'','',3,'','','','','','',8,'',9,8,2,4,1,3,'','','','','','',8,'','','','',9,'',7,6,3,'','',1,2,'',8,'','','','',1,'','','','','','',2,3,7,4,8,1,5,'',5,'','','','','',6,'','',8,9,'',5,'',3,4]
let hPreMade1=[
    '','',6,3,'',7,'','','','','',4,'','','','','',5,1,'','','','',6,'',8,2,2,'',5,'',3,'',1,'',6,'','','',2,'','',3,'','',9,'','','',7,'','','',4,'',5,'','','','','','','','',1,'','','','','','','','','',8,1,'',9,'',4,'',]
let hPreMade2=    [
    '','',1,8,'','',5,3,'','','','','',6,3,'','','',8,'','',1,'','','','',4,'',4,'',7,'','','',8,'','','',7,'',5,'',6,'','',9,'',6,'','',2,7,'','','','',8,3,'','','','','','',9,'','',8,'',4,'',1,7,'','','','','','',2,'',]

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

const randomPick =(min,max)=>{
    min = Math.ceil(1)
    max = Math.floor(2)
    return Math.floor(Math.random()*(max-min+1)+min)
}
const cpuParameter=()=>{
    if (setDifficulty === "easy"){
        for(let i=0; i<boardSquare.length; i++)
        boardSquare[i].innerHTML=ePreMade1[i]

         boardBalance = 192
 
         
}else if (setDifficulty === "medium"){
    for(let i=0; i<boardSquare.length; i++)
    boardSquare[i].innerHTML=mPreMade1[i]
            boardBalance = 132

        
}else if (setDifficulty === `hard`){
    for(let i=0; i<boardSquare.length; i++)
    boardSquare[i].innerHTML= hPreMade1[i]

            boardBalance=111

        }
    }  

const changingDiff=()=>{
    for(let set of difficulty){
        if (set.checked){
         setDifficulty = set.id
    }}
    cpuParameter()

}

// game timer// 
//https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html 
    // starting function//
 const startTimer=()=> {
    if(time === false){
        return
    }else if (completed===true){
        return
    }else if (int!== null){
        clearInterval(int)
    }
    int = setInterval(clocking,1000)
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
    document.querySelector(".setting").style.display="none"
    startbutton.style.display="none"

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

