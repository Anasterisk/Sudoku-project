let input= document.querySelectorAll(".input")
let playingValue = ''
let holding = document.querySelector(".holding")
let boardSquare = document.querySelectorAll('.bl')


for (let i=0; i<input.length; i++){
    input[i].addEventListener('click',()=>{
       
       console.log("hello " + input[i].innerText)
        
        holding.setAttribute('id', input[i].value) 
        console.log(holding.id)
        return
    })
    
}

for(let j = 0; j<boardSquare.length; j++){
    for(let i = 1; i<4; i++){
        //for(let k=0; k<9;k++){
    boardSquare[j].addEventListener('click',(e)=>{
        // if (e.target.classList[1].innerHTML === holding.id){
        //     console.log(e.target)
        //     return
        // } else {
       
        boardSquare[j].innerHTML=holding.id
        console.log(boardSquare[j].classList.contains(`${e.target.classList[1]}`))
        console.log("hi")
       
        
        return
    }
    )
}}
//save for later reference
// identifying the class list
//boardSquare[j].classList[1]+ boardSquare[j].classList[2]+ boardSquare[j].classList[3]
// boardSquare[j].classList[i] && boardSquare[j].innerText
        //checking the clicked square's stats
//e.target.classList[i] 

//e.target.innerHTML