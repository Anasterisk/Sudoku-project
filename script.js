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
//the inhibitor is only checking the original
for(let j = 0; j<boardSquare.length; j++){    
    boardSquare[j].addEventListener('click',(e)=>{  
for(let k=0; k<27;k++){
    for(let i = 1; i<4; i++){
     if (   document.querySelectorAll(`.${e.target.classList[1]}`)[k].innerHTML === holding.id ||
            document.querySelectorAll(`.${e.target.classList[2]}`)[k].innerHTML === holding.id ||
            document.querySelectorAll(`.${e.target.classList[3]}`)[k].innerHTML === holding.id ){
             console.log("denied")
             return
    }else {
        
        boardSquare[j].innerHTML=holding.id
        console.log("hi")
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