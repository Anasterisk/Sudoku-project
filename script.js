
//let playingValue = ''
//timer variables
// let seconds = 0
// let minutes = 0
// let hours   =0
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

// game timer// 
//https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html used it a reference still not working though
    // starting function//
 const startTimer=()=> {
    console.log("timer Starts")
    if (completed===true){
        return
    }
    else if (int!== null){
        clearInterval(int)
    }
    int = setInterval(timer,1000)
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
    milliseconds+=10;
    if(milliseconds===1000){
        milliseconds = 0;
        seconds ++
        if( seconds === 60){
            seconds = 0
            minutes++
            if(minutes === 60){
                minutes = 0
                hours ++
        }
    }
}
    let h = hours <10   ?"0"+hours: hours
    let m = minutes <10  ?"0"+minutes: minutes
    let s = seconds <10 ?"0"+seconds: seconds
    return timer.innerHTML=`${h}:${m}:${s}`
}

// selecting input value//
for (let i=0; i<input.length; i++){
    input[i].addEventListener('click',()=>{
        playingValue = input[i].innerText
        holding.setAttribute('id', input[i].value) 
        startTimer()
        return
    })
    
}
// const matrixCal=(mockBoard,x)=>{
//     let matrix =[],i,k;
//      x=9
//     for(i = 0, k=-1;i<mockBoard.length;i++){
//         if(i%x ===0){
//             k++;
//             matrix[k]=[];
//         }
//         matrix[k].push(list[i]);
//     }
//     return matrix
// }

// game stopping functions // 
const boardCal = (x)=>{
    y = parseInt(identifier) || 0
    console.log(y)
    x = parseInt(holding.id) || 0
    console.log(x)
    return boardBalance+=x- y
}

const completionCheck =()=>{ 
    if(boardBalance===1215){
        completed = true
        stopTimer()
        console.log(`${boardBalance} and ${completed}`)
    }
}

  // testing function calls//
const testFunct=()=>{
    console.log("test function is running")
    return
}

// inhibitor check functioning//
const inhibitorCheck=()=>{
    console.log("inhibitor check")
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



//Game logic//

for(let i = 0; i<boardSquare.length; i++){ 
    boardSquare[i].addEventListener('click',function(e){
        identifier = boardSquare[i].innerHTML
        completionCheck()
    if (completed=== true){
        return
    }
    else if ( legalMove === false){
                    console.log(`logic check 1, legalMove: ${legalMove}`)
        checkSq = document.querySelectorAll(`.${e.target.classList[1]}`)
        checkRow= document.querySelectorAll(`.${e.target.classList[2]}`)
        checkCol= document.querySelectorAll(`.${e.target.classList[3]}`)
        inhibitorCheck();
                    console.log(`logic check 2, "legalMove: ${legalMove}"`)
            if (legalMove === true){ 
                boardCal();
                    console.log(`square value before edit: ${boardSquare[i].innerHTML}`)      
                boardSquare[i].innerHTML=holding.id
                    console.log(`logic check 3 "bypassed", legalMove: ${legalMove}`)
                legalMove   = false
                checkSq     = null
                checkRow    = null
                checkCol    = null
                identifier  = null
                    console.log(legalMove)
                    console.log(`total ${boardBalance}`)
                completionCheck()
                return
            }else if(legalMove === false) {
                    console.log (`logic check 3 "invalid move"`)
                    console.log(legalMove)
                checkSq     = null
                checkRow    = null
                checkCol    = null
                identifier  = null
                return
    }
    }
    
})}

skip.addEventListener("click",()=> {
    for(let i=0; i<boardSquare.length; i++)
    boardSquare[i].innerHTML=quickFill[i]
    boardBalance = 1215
    completionCheck()
}
)

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