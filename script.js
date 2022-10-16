
//let playingValue = ''
//timer variables
let [seconds,minutes,hours] = [0,0,0]
let timer = document.querySelector('.timer')
let int =null

//game logic variables
let input= document.querySelectorAll(".input")
let holding = document.querySelector(".holding")
let boardSquare = document.querySelectorAll('.bl')
let completed = false

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
       
       console.log("hello " + input[i].innerText)
        playingValue = input[i].innerText
        holding.setAttribute('id', input[i].value) 
        console.log(holding.id)
        startTimer
        return
    })
    
}

// game stopping function // 
const completionCheck =()=>{
    for (let i=0; i <boardSquare.length; i++){
    if( boardSquare[i].innerText !== ""){
        completed = true
        console.log(completed)
        stopTimer
        return
    }
}
}
        //
// const inhibitorCheck=()=>{
//     for(let j = 1; j<4; j++){ 
//         for(let k=0; k<9;k++){ 
//             document.querySelectorAll(`.${e.target.classList[j]}`)[k].innerHTML
//             return
// }}}


//Game logic//
                //the inhibitor is only checking the original input before just bypassing the check
for(let i = 0; i<boardSquare.length; i++){    
    boardSquare[i].addEventListener('click',function(e){  
for(let j = 1; j<4; j++){ 
   for(let k=0; k<9;k++){   
if (                    // current input inhibitor in the works //
        document.querySelectorAll(`.${e.target.classList[1]}`)[k].innerHTML === holding.id||
        document.querySelectorAll(`.${e.target.classList[2]}`)[k].innerHTML === holding.id||     
        document.querySelectorAll(`.${e.target.classList[3]}`)[k].innerHTML === holding.id
    ){
    console.log()
    return
}else {
    
    boardSquare[i].innerHTML=holding.id
    console.log("bypassed")
    return
     }
    }
 }
})
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

