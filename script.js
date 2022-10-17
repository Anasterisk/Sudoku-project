
//let playingValue = ''
//timer variables
let [seconds,minutes,hours] = [0,0,0]
let timer = document.querySelector('.timer')
let int =null

//game logic variables
let input= document.querySelectorAll(".input")
let holding = document.querySelector(".holding")
let boardSquare = document.querySelectorAll('.bl')
//win switch
let completed   = false
let mockBoard   = [
    "","","","","","","","","",
    "","","","","","","","","",
    "","","","","","","","","",
    "","","","","","","","","",
    "","","","","","","","","",
    "","","","","","","","","",
    "","","","","","","","","",
    "","","","","","","","","",
    "","","","","","","","","",
]
let matrix   = []
//inhibitor check variables
let legalMove   = false
let checkSq     = null
let checkRow    = null
let checkCol    = null

// game timer// 
//https://www.foolishdeveloper.com/2021/10/simple-stopwatch-using-javascript.html used it a reference still not working though
    // starting function//
 const startTimer=()=>{
    if (int!== null){
        clearInterval(int)
    }
    int = setInterval(timer,10)
    console.log("timer Starts")
 }
    // stoping function//
const stopTimer =()=>{
    clearInterval(int)
}
    // timer innards//
const clocking=()=>{
    seconds ++
    if( seconds === 60){
        seconds = 0
        minutes++
        if(minutes === 60){
            minutes = 0
            hours ++
        }
    }
    let h = hours <10   ?"0"+hours: hours
    let m = minute <10  ?"0"+minutes: minutes
    let s = seconds <10 ?"0"+seconds: seconds
    timer.innerHTML=`${h}:${m}:${s}`
}

// selecting input value//
for (let i=0; i<input.length; i++){
    input[i].addEventListener('click',()=>{
       console.log(`checking input button ${input[i].innerText}`)
        playingValue = input[i].innerText
        holding.setAttribute('id', input[i].value) 
        console.log(`holding.id value check ${holding.id}`)
        startTimer
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

// game stopping function // 
const completionCheck =()=>{ 
  
    if( completed === false){
         // console.log("Com Check 1 ") 
    //for (let i=0; i <8; i++){
    //if( matrix[i].reduce((total,x)=>{
       //return total=+x
    //},0)===45){
        //completed = true
        console.log("com check 1.5")
        stopTimer
    }else{
        
        console.log(`Com Check 2 ${completed}`)
        
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
    //for(let i = 0; i<boardSquare.length; i++){    
        //boardSquare[i].addEventListener('click',function(e){    
        console.log("inhibitor check 2")
    //for(let j = 1; j<4; j++){ 
        for(let k=0; k<9;k++){
           console.log(`inhibitor check 3 attempt: ${[k]}`)
    if( checkSq[k].innerHTML === holding.id ||
        checkRow[k].innerHTML === holding.id||     
        checkCol[k].innerHTML === holding.id){
        
        
        
        console.log(`inhibitor check 3 blocked try:${[k]}`)
        legalMove = false 
        return     
        }else{
        
        console.log(`inhibitor check 3 passed try: ${[k]}`)
        legalMove = true
        }
    }}



//Game logic//
                //the functions aren't being called
for(let i = 0; i<boardSquare.length; i++){ 
    boardSquare[i].addEventListener('click',function(e){       
    if ( legalMove === false){
                    console.log(`logic check 1, legalMove: ${legalMove}`)
                    checkSq = document.querySelectorAll(`.${e.target.classList[1]}`)
                    checkRow= document.querySelectorAll(`.${e.target.classList[2]}`)
                    checkCol= document.querySelectorAll(`.${e.target.classList[3]}`)
        inhibitorCheck();
                    console.log(`logic check 2, "legalMove: ${legalMove}"`)
        if (legalMove === true){       
        boardSquare[i].innerHTML=holding.id
        mockBoard[i]= holding.id
                    console.log(mockBoard[i])
                    console.log(`logic check 3 "bypassed", legalMove: ${legalMove}`)
        legalMove   = false
        checkSq     = null
        checkRow    = null
        checkCol    = null
                    console.log(legalMove)
        completionCheck()
        return
        }else if(legalMove === false) {
                    console.log (`logic check 3 "invalid move"`)
                    console.log(legalMove)
        checkSq     = null
        checkRow    = null
        checkCol    = null
        return
    }
    }
})}


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